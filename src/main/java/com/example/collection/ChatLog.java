package com.example.collection;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;
import lombok.Data;

@Data
@Document(collection = "chat_log")
public class ChatLog {

	@Id
	private Integer chatNumber;		// 채팅번호
	private Date	time;			// 채팅(전송)시간
	private String	sentence;		// 채팅내용
}
