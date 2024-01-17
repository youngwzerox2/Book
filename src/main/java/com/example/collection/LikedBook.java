package com.example.collection;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;
import lombok.Data;

@Data
@Document(collection = "liked_book")
public class LikedBook {

	@Id
	private String	objectId;		// 랜덤으로 생성되는 아이디값
	private String	memberId;		// 사용자 아이디
	private String	bookIsbn;		// isbn13자리
	private Date	time;			// 찜 누른 시각
	
}
