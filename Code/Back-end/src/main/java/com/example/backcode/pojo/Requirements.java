package com.example.backcode.pojo;

import lombok.Data;


import jakarta.persistence.*;


@Data
@Entity
@Table(name = "requirements")
public class Requirements {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer experienceYears;
    private String successRate;
    private String language;
    private String bookingPreference;
    private String charge;
    private String visaType;
    private String location;
    private String employmentType;
    private String googleRating;
    private String availability;
}
