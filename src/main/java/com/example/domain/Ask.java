package com.example.domain;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

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

	@DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date    askReplyTime;        // 답변작성시간

    public void setAskReplyTime(String askReplyTime) {
        // 문자열을 Date로 변환하는 로직 추가
        try {
            this.askReplyTime = new SimpleDateFormat("yyyy-MM-dd").parse(askReplyTime);
        } catch (ParseException e) {
            // 예외 처리 로직 추가
            e.printStackTrace();
        }
    }

	private String	askReplyAdmin;		// 처리담당자
	private String	memberId;			// 고객아이디
	
}
