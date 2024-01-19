package com.example.domain;

import lombok.Data;

@Data
public class ChatData {

	private String	objectId;				// 랜덤으로 생성되는 아이디
	private String	memberId;				// 사용자아이디
	private String	recommandedBook1;		// 추천받은책1
	private String	recommandedBook2;		// 추천받은책2
	private String	recommandedBook3;		// 추천받은책3
	private String	pickedBook;				// 사용자가 고른 책
	private String	emotion;				// 예측한 감정
	private Integer chatNumber;				// 채팅번호
	
}
