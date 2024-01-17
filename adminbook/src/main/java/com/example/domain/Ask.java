package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Ask {
    
    // ******************************** 문의 **********************************************
    private Integer askId;				// 문의글 번호
	private String	askTitle;			// 문의글 제목
	private String	askContent;			// 문의글 내용
	private Date	askDate;			// 문의글 등록시간
	private String	askReplyDone;		// 처리여부
	private String	askReplyContent;	// 답변내용
	private Date	askReplyTime;		// 답변작성시간
	private String	askReplyAdmin;		// 처리담당자
	private String	memberId;			// 고객아이디
}
