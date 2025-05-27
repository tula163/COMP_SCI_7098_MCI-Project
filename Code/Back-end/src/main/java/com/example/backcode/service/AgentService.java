package com.example.backcode.service;

import com.example.backcode.pojo.Agent;
import com.example.backcode.repository.AgentRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Service
public class AgentService {

    @Autowired
    private AgentRepository agentRepository;

    // ✅ 项目启动后自动导入 CSV 文件
    @PostConstruct
    public void importCsv() {
        try {
            BufferedReader reader = new BufferedReader(
                    new InputStreamReader(new ClassPathResource("requirements_data_5.6.csv").getInputStream(), StandardCharsets.UTF_8)
            );

            List<Agent> agents = new ArrayList<>();
            String line;
            reader.readLine(); // 跳过表头

            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",", -1);
                if (parts.length < 12) continue;

                Agent agent = new Agent();
                agent.setMarn(parseLong(parts[0]));
                agent.setFullName(parts[1]);
                agent.setExperienceYears(parseInt(parts[2]));
                agent.setCharge(parts[3]);
                agent.setVisaType(parts[4]);
                agent.setBookingPreference(parts[5]);
                agent.setLocation(parts[6]);
                agent.setSuccessRate(parts[7]);
                agent.setLanguage(parts[8]);
                agent.setEmploymentType(parts[9]);
                agent.setGoogleRating(parseFloat(parts[10]));
                agent.setAvailability(parts[11]);

                agents.add(agent);
            }

            agentRepository.saveAll(agents);
            System.out.println("✅ 已导入 Agent 数据：" + agents.size() + " 条");
        } catch (Exception e) {
            System.err.println("❌ 导入失败：" + e.getMessage());
            e.printStackTrace();
        }
    }

    private Long parseLong(String s) {
        try { return Long.parseLong(s.trim()); } catch (Exception e) { return 0L; }
    }

    private Integer parseInt(String s) {
        try { return Integer.parseInt(s.trim()); } catch (Exception e) { return 0; }
    }

    private Float parseFloat(String s) {
        try { return Float.parseFloat(s.trim()); } catch (Exception e) { return 0f; }
    }
    public List<Agent> getTopAgentsByIds(List<Long> ids) {
        return agentRepository.findByIdIn(ids);
    }
}
