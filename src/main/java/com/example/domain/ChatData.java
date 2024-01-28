package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class ChatData {

	private Integer chatNumber;				// 채팅번호
	private String	memberId;				// 사용자아이디
	private String	recommandedBook1;		// 추천받은책1
	private String	recommandedBook2;		// 추천받은책2
	private String	recommandedBook3;		// 추천받은책3
	private String	pickedBook;				// 사용자가 고른 책
	private String	emotion;				// 예측한 감정
	private String	chatDataDate;			// 기록날짜
	private String	bookImageURL;			// 고른 책 이미지
	private String	bookname;				// 책 제목
	private String	authors;				// 저자
	private String	publisher;				// 출판사
	private String	publicationYear;		// 출판년도
	private String	bookImageURL1;			// 책 이미지 1
	private String	bookname1;				// 책 제목
	private String	authors1;				// 저자
	private String	publisher1;				// 출판사
	private String	publicationYear1;		// 출판년도
	private String	bookImageURL2;			// 책 이미지 2
	private String	bookname2;				// 책 제목
	private String	authors2;				// 저자
	private String	publisher2;				// 출판사
	private String	publicationYear2;		// 출판년도
	private String	bookImageURL3;			// 책 이미지 3
	private String	bookname3;				// 책 제목
	private String	authors3;				// 저자
	private String	publisher3;				// 출판사
	private String	publicationYear3;		// 출판년도
	
}
