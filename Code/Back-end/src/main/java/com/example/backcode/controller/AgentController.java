package com.example.backcode.controller;

import com.example.backcode.service.RecommendService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/agent")
public class AgentController {

    @Autowired
    private RecommendService recommendService;

    @PostMapping("/recommend")
    public ResponseEntity<String> recommendAgent(@RequestBody Map<String, String> userInput) {
        try {
            // 调用推荐服务
            String result = recommendService.recommendAgents(userInput);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error: " + e.getMessage());
        }
    }
}
