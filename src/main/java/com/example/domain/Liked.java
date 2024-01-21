package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Liked {
    
    private Integer likedNum;       // 좋아요 번호
    private String  memberId;       // 사용자 아이디
    private String  likedType;      // 좋아요 종류
    private String  likedElement;   // 좋아요를 누른 요소
    private Date    likedTime;      // 좋아요를 누른 시각

}
