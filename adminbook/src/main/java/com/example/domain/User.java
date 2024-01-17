package com.example.domain;

import lombok.Data;

@Data
public class User {

    // ****************************** 회원정보 *******************************
    private String memberId;
    private String memberPassword;
    private String memberName;
    private String memberEmail;
    private String memberNickname;
    private String memberGender;
    private String memberBirthday;
    private String memberTel;
    private String joinDate;
    private String quitDate;
    private boolean memberVisitAgree;
    private String memberGrade;
    private String warningDate;
    private Integer warningCount;
    // private String cardNumber;
    // private String cardCvc;
    // private String cardDate;
    // private String cardPassword;
}
