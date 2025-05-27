package com.example.backcode.repository;

import com.example.backcode.pojo.Requirements;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequireRepository extends JpaRepository<Requirements, Long> {
    // 无需额外代码，继承 JpaRepository 即可
}
