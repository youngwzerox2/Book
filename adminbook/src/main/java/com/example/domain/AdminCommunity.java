package com.example.domain;

import lombok.Data;

@Data
public class AdminCommunity {

    // ******************************** 커뮤니티 **********************************************
    private Integer complain_id;
    private String complain_type;
    private Integer complain_target_id;
    private String complain_content;
    private String complain_date;
    private String complain_done;
    private String complain_reply;
    private String complain_reply_date;
    private String complain_target_user;
    private String complain_reply_admin;
    private String member_id;
}
