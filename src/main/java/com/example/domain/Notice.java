package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Notice {

    // ****************************** 공지사항, FAQ, 이용약관 *******************************
	private Integer noticeNumber;		// 글 번호
	private String	noticeType;			// 글 카테고리
	private String	noticeTitle;		// 글 제목
	private String	noticeContent;		// 글 내용
	private Date	noticeDate;			// 글 등록일
	private Integer noneDisplay;		// 글 공개여부
	private String	memberId;			// 작성자
	
}
