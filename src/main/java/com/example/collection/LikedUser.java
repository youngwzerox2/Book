package com.example.collection;

import java.sql.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;
import lombok.Data;

@Data
@Document(collection = "liked_user")
public class LikedUser {

    @Id
    private String	objectId;		// 랜덤으로 생성되는 아이디값
    private String  memberId;       // 사용자 아이디
    private String  likedUser;      // 좋아요된 사용자 아이디
    private Date    time;           // 좋아요 누른 시각

}
