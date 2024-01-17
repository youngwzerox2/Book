package com.example.domain;

import lombok.Data;

@Data
public class Community {

    // ******************************** 커뮤니티 **********************************************
    private Integer complainId;
    private String complainType;
    private Integer complainTargetId;
    private String complainContent;
    private String complainDate;
    private String complainDone;
    private String complainReply;
    private String complainReplyDate;
    private String complainTargetUser;
    private String complainReplyAdmin;
    private String memberId;
}
