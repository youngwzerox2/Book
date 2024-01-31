package com.example.domain;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class Login {
    
    // ***************************** 로그인 *********************************************
    private String      logId;           // 로그인 아이디
    private String      memberId;        // 사용자 아이디
    private Timestamp   loginTime;       // 로그인 시간

    // ***************************** 통계 *********************************************
    private Integer todayLoginCount;     // 로그인 접속자 수
}
