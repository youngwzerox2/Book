package com.example.domain;

import lombok.Data;

@Data
public class AdminAsk {
    
    // ******************************** 문의 **********************************************
    private Integer ask_id;
    private String ask_title;
    private String ask_content;
    private String ask_date;
    private String ask_reply_done;
    private String ask_reply_content;
    private String ask_reply_time;
    private String ask_reply_admin; 
    private String member_id;
}
