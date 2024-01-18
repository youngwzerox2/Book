package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Calendar {

	private Integer calendarNum;		// 글 번호
	private Date	calendarDate;		// 달력날짜
	private Date	calendarRealtime;	// 기록날짜
	private String	bookIsbn13;			// 청구기호13자리
	private String	calendarContent;	// 메모
	private String	memberId;			// 고객아이디
	private String	bookname;			// 책 제목(INNER JOIN book)
	
}
