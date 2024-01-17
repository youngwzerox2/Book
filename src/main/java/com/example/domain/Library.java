package com.example.domain;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class Library {

	private Integer libraryNum;			// 도서관 번호
	private String	libraryName;		// 도서관 이름
	private String	libraryAddress;		// 도서관 주소
	private String	libraryRunning;		// 영업시간
	private String	libraryClosed;		// 휴무일
	private String	libraryTel;			// 전화번호
	private String	libraryFax;			// Fax 번호
	private String	libraryHomepage;	// 홈페이지
	private BigDecimal libraryLa;		// 위도
	private BigDecimal libraryLo;		// 경도
	
}
