package com.example.domain;

import lombok.Data;

@Data
public class CommunityComment {

	private Integer communityCommentId;			// 댓글 번호
	private Integer communityBoardId;			// 커뮤니티 게시글 번호
	private String	communityCommentContent;	// 댓글 내용
	private String	memberId;					// 댓글작성자
	
}
