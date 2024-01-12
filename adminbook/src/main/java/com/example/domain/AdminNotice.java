package com.example.domain;

import lombok.Data;

@Data
public class AdminNotice {

    // ****************************** 공지사항, FAQ, 이용약관 *******************************
    private Integer notice_number;
    private String notice_type;
    private String notice_title;
    private String notice_content;
    private String notice_date;
    private Integer notice_display;
    private String member_id;
}
