package com.example.domain;

import java.util.Date;

import jakarta.persistence.Id;
import lombok.Data;

@Data
public class ChatLog {

	@Id
	private Integer chatNumber;		// 채팅번호
	private String	memberId;		// 사용자 아이디
	private Date	chatTime;		// 채팅(전송)시간
	private String	sentence;		// 채팅내용
	
}
