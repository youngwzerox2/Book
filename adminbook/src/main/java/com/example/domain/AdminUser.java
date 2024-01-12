package com.example.domain;

import lombok.Data;

@Data
public class AdminUser {

    // ****************************** 회원정보 *******************************
    private String member_id;
    private String member_password;
    private String member_name;
    private String member_email;
    private String member_nickname;
    private String member_gender;
    private String member_birthday;
    private String member_tel;
    private String join_date;
    private String quit_date;
    private boolean member_visit_agree;
    private String member_grade;
    private String warning_date;
    private Integer warning_count;
    // private String card_number;
    // private String card_cvc;
    // private String card_date;
    // private String card_password;
}
