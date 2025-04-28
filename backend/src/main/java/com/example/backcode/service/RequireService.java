package com.example.backcode.service;


import com.example.backcode.pojo.Requirements;
import com.example.backcode.repository.ReqiureRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequireService {
    private final ReqiureRepository reqiureRepository;
    public RequireService(ReqiureRepository reqiureRepository) {
        this.reqiureRepository = reqiureRepository;
    }

    public List<Requirements> getAllRequirements() {
        return reqiureRepository.findAll();
    }



    public Requirements addRequirement(Requirements requirements) {
        return reqiureRepository.save(requirements);
    }




}
