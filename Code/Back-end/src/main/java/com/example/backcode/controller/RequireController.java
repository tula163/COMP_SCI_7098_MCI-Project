package com.example.backcode.controller;

import com.example.backcode.pojo.Requirements;
import com.example.backcode.service.RequireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin // 前后端分离时允许跨域访问
public class RequireController {

    @Autowired
    private RequireService requireService;

    @PostMapping("/submit")
    public String submitRequirement(@RequestBody Requirements requirements) {
        requireService.saveRequirement(requirements);
        return "Submitted successfully!";
    }
}
