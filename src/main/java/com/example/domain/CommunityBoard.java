package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class CommunityBoard {
	
	private Integer communityBoardId;		// 커뮤니티 게시글 번호
	private String	communityBoardTag;		// 게시글 태그
	private String	communityBoardContent;	// 게시글 내용
	private Date	communityBoardDate;		// 게시글 작성일자
	private String	memberId;				// 고객아이디
	
}
