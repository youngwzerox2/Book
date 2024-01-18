package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class RecordDTO {

	private Integer recordBookNum;			// 독서기록 번호
	private String	recordBookContent;		// 독서기록 내용
	private Integer recordBookScore;		// 독서기록 평점
	private Date	recordBookTime;			// 독서기록 등록시간
	private String	recordBookTag1;			// 도서 태그
	private String	memberId;				// 고객아이디
	private String	bookIsbn13;				// 청구기호13자리
	private String	bookname;				// 책 제목(INNER JOIN book)

}

