package com.example.backcode.controller;

import com.example.backcode.service.RecommendService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.example.backcode.common.ApiResponse;
import java.util.Map;

@RestController
@RequestMapping("/api/agent")
public class AgentController {

    @Autowired
    private RecommendService recommendService;

    @PostMapping("/recommend")
    public ResponseEntity<ApiResponse<Object>> recommendAgent(@RequestBody Map<String, String> userInput) {
        ApiResponse<Object> result = recommendService.recommendAgents(userInput);
        return ResponseEntity.status(result.getCode() == 200 ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).body(result);
    }
}
