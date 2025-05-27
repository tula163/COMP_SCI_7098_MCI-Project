package com.example.backcode.service;

import com.example.backcode.pojo.Requirements;
import com.example.backcode.repository.RequireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RequireService {

    @Autowired
    private RequireRepository requireRepository;

    public Requirements saveRequirement(Requirements requirement) {
        return requireRepository.save(requirement);
    }
}
