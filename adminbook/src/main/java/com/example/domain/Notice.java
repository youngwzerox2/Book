package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Notice {

    // ****************************** 공지사항, FAQ, 이용약관 *******************************
    private Integer noticeNumber;
    private String noticeType;
    private String noticeTitle;
    private String noticeContent;
    private Date noticeDate;
    private Integer noticeDisplay;
    private String memberId;
}
