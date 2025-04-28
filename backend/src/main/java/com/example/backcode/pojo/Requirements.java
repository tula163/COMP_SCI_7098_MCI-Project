package com.example.backcode.pojo;

import jakarta.persistence.*;

@Entity
@Table(name = "requirements")
public class Requirements {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String charge;
    private String visa_type;
    private String booking_prefer;
    private String location;
    private String experience_years;
    private String success_rate;
    private String language;
    private String employ_rate;
    private String google_rate;
    private String availability;



    public Requirements() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }



    public String getCharge() { return charge; }
    public void setCharge(String charge) { this.charge = charge; }

    public String getVisa_type() { return visa_type; }
    public void setVisa_type(String visa_type) { this.visa_type = visa_type; }

    public String getBooking_prefer() { return booking_prefer; }
    public void setBooking_prefer(String booking_prefer) { this.booking_prefer = booking_prefer; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getExperience_years() { return experience_years; }
    public void setExperience_years(String experience_years) { this.experience_years = experience_years; }

    public String getSuccess_rate() { return success_rate; }
    public void setSuccess_rate(String success_rate) { this.success_rate = success_rate; }

    public String getLanguage() { return language; }
    public void setLanguage(String language) { this.language = language; }

    public String getEmploy_rate() { return employ_rate; }
    public void setEmploy_rate(String employ_rate) { this.employ_rate = employ_rate; }

    public String getGoogle_rate() { return google_rate; }
    public void setGoogle_rate(String google_rate) { this.google_rate = google_rate; }

    public String getAvailability() { return availability; }
    public void setAvailability(String availability) { this.availability = availability; }
}
