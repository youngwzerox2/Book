package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Recommanding {

	private Integer recommandingId;				// 추천글 번호
	private Date	recommandingBookTime;		// 추천글 등록시간
	private String	recommandingTitle;			// 추천글 제목
	private String	recommandingBookContent;	// 추천글 내용
	private Integer	recommandingAgree;			// 추천글 공개여부
	private Integer	recommandingBookNo1;		// 추천글 대표게시물 등록여부
	private String	recommandingTag;			// 추천태그
	private String	bookIsbn1;					// 청구기호13자리 1
	private String	bookIsbn2;					// 청구기호13자리 2
	private String	bookIsbn3;					// 청구기호13자리 3
	private String	bookIsbn4;					// 청구기호13자리 4
	private String	bookIsbn5;					// 청구기호13자리 5
	private String	memberId;					// 고객아이디
	private String	bookname;					// 책 제목
	private String	bookImageURL;				// 책 이미지
	
}
