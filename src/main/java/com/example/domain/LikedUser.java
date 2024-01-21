package com.example.domain;

import java.sql.Date;

import lombok.Data;

@Data
public class LikedUser {

    private String	objectId;		// 랜덤으로 생성되는 아이디값
    private String  memberId;       // 사용자 아이디
    private String  likedUser;      // 좋아요 눌린 사용자 아이디
    private Date    time;           // 좋아요 누른 시각
    
}
