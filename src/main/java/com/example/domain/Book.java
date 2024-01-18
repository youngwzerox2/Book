package com.example.domain;

import lombok.Data;

@Data
public class Book {
    
    // ******************************** 도서 **********************************************
	private Integer no;					// 번호
	private String	ranking;			// 랭킹
	private String	bookname;			// 책 제목
	private String	authors;			// 작가
	private String	publisher;			// 출판사
	private String	publicationYear;	// 출판년도
	private String	bookIsbn13;			// 청구기호13자리
	private String	additionSymbol;		// 부가기호5자리
	private String	vol;				// 권수
	private String	classNo;			// 청구기호
	private String	classNm;			// 카테고리
	private Integer loanCount;			// 대출횟수
	private String	bookImageUrl;		// 책 이미지 url
	private String	bookDtlUrl;			// 책 데이터 url
	private String	emotionTag;			// 감정태그
	private String	description;		// 책 소개
	
}
