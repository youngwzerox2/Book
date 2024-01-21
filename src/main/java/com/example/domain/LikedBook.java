package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class LikedBook {

	private String	objectId;		// 랜덤으로 생성되는 아이디값
	private String	memberId;		// 사용자 아이디
	private String	bookIsbn;		// isbn13자리
	private Date	time;			// 찜 누른 시각
	
}
