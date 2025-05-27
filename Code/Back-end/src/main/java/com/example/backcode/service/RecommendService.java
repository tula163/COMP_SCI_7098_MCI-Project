package com.example.backcode.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Map;

@Service
public class RecommendService {

    public String recommendAgents(Map<String, String> userInput) throws IOException {
        // 转成 JSON 传参
        ObjectMapper objectMapper = new ObjectMapper();
        String inputJson = objectMapper.writeValueAsString(userInput);

        // 调用 Python 脚本
        ProcessBuilder builder = new ProcessBuilder(
                "/opt/anaconda3/bin/python", // ← 替换成你的路径
                "model/recommend.py",
                inputJson
        );

        builder.redirectErrorStream(true);
        Process process = builder.start();

        // 读取输出
        BufferedReader reader = new BufferedReader(
                new InputStreamReader(process.getInputStream())
        );
        StringBuilder output = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            output.append(line);
        }

        return output.toString();
    }
}
