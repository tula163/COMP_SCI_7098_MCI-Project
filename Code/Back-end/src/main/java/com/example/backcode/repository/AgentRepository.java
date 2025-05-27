package com.example.backcode.repository;

import com.example.backcode.pojo.Agent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgentRepository extends JpaRepository<Agent, Long> {
    List<Agent> findByIdIn(List<Long> ids); // ✅ 现在能正常工作了
}
