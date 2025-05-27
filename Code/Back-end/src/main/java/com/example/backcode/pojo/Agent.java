// ✅ Agent.java
package com.example.backcode.pojo;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "agents")
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 主键自增
    private Long id; // ✅ 新增默认主键字段，JPA 默认识别

    @Column(name = "marn")
    private Long marn;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "experience_years")
    private Integer experienceYears;

    private String charge;

    @Column(name = "visa_type")
    private String visaType;

    @Column(name = "booking_preference")
    private String bookingPreference;

    private String location;

    @Column(name = "success_rate")
    private String successRate;

    private String language;

    @Column(name = "employment_type")
    private String employmentType;

    @Column(name = "google_rating")
    private Float googleRating;

    private String availability;
}
