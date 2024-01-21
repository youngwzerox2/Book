package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Recommanded {

	private Integer recommandedNum;			// 추천번호
	private Date	recommandedDate;		// 추천받은 날짜
	private String	recommandedFeel;		// 추천받은 당시 감정
	private String	memberId;				// 고객아이디
	private String	recommandedBookPick;	// 추천 중 고른 책
	private String	recommandedBook1;		// 추천책1
	private String	recommandedBook2;		// 추천책2
	private String	recommandedBook3;		// 추천책3
	
}
