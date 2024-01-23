package com.example.domain;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Data 
public class Complain {

	private Integer complainId;				// 신고글 번호
	private String	complainType;			// 신고항목
	private Integer complainTargetId;		// 신고받은 글 번호
	private String	complainContent;		// 신고내용
	private Date	complainDate;			// 신고글 작성시간
	private String	complainDone;			// 신고글 처리여부
	private String	complainReply;			// 신고글 답변

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date	complainReplyDate;		// 신고글 답변 작성시간

	public void setComplainDate(String complainDate) {
        // 문자열을 Date로 변환하는 로직 추가
        try {
            this.complainDate = new SimpleDateFormat("yyyy-MM-dd").parse(complainDate);
        } catch (ParseException e) {
            // 예외 처리 로직 추가
            e.printStackTrace();
        }
    }

	private String	complainTargetUser;		// 신고받은 글 작성자
	private String	complainReplyAdmin;		// 처리담당자
	private String	memberId;				// 고객아이디 
	
}
