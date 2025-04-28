package com.example.backcode.controller;

//public class RequireController {
//}


import com.example.backcode.pojo.Requirements;
import com.example.backcode.service.RequireService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/requirements")
public class RequireController {

    private final RequireService requireService;

    public RequireController(RequireService requireService) {
        this.requireService = requireService;
    }

    // 测试插入一条
    @PostMapping("/add")
    public Requirements addRequirement(@RequestBody Requirements requirements) {
        return requireService.addRequirement(requirements);
    }

    // 查询所有
    @GetMapping
    public List<Requirements> getAllRequirements() {
        return requireService.getAllRequirements();
    }




}

