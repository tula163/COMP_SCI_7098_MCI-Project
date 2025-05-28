package com.example.backcode.service;

import com.example.backcode.common.ApiResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Map;

@Service
public class RecommendService {

    public ApiResponse<Object> recommendAgents(Map<String, String> userInput) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            // 转换用户输入为 JSON 字符串
            String inputJson = objectMapper.writeValueAsString(userInput);

            // 调用 Python 脚本
            ProcessBuilder builder = new ProcessBuilder(
                    "/opt/anaconda3/bin/python",
                    "model/recommend.py",
                    inputJson
            );

            Process process = builder.start();

            // 读取 stdout（正常返回）
            BufferedReader stdOut = new BufferedReader(new InputStreamReader(process.getInputStream()));
            StringBuilder output = new StringBuilder();
            String line;
            while ((line = stdOut.readLine()) != null) {
                output.append(line);
            }

            // 读取 stderr（错误日志）
            BufferedReader stdErr = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            StringBuilder errorOutput = new StringBuilder();
            while ((line = stdErr.readLine()) != null) {
                errorOutput.append(line).append("\n");
            }

            int exitCode = process.waitFor();

            // Python 报错，stderr 不为空
            if (exitCode != 0 || errorOutput.length() > 0) {
                return ApiResponse.error(500, "Python 脚本错误:\n" + errorOutput.toString());
            }

            String result = output.toString().trim();

            // 如果返回为空
            if (result.isEmpty()) {
                return ApiResponse.error(500, "Python 脚本未返回任何结果");
            }

            // 非 JSON 字符（如 "Traceback"），直接抛错
            if (!result.startsWith("{") && !result.startsWith("[")) {
                return ApiResponse.error(500, "Python 输出非 JSON 格式:\n" + result);
            }

            // 转为 JSON 对象
            Object jsonResult = objectMapper.readValue(result, Object.class);
            return ApiResponse.success(jsonResult);

        } catch (Exception e) {
            e.printStackTrace();
            return ApiResponse.error(500, "系统错误：" + e.getMessage());
        }
    }
}
