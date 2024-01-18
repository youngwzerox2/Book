package com.example.collection;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;
import lombok.Data;

@Data
@Document(collection = "liked_board")
public class LikedBoard {

	@Id
	private String	objectId;			// 랜덤으로 생성되는 아이디값
	private String  memberId;			// 사용자아이디
	private String  type;				// 게시글/댓글
	private Integer contentNumber;		// 글번호
}
