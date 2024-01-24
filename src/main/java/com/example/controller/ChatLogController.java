package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.ChatLog;
import com.example.userservice.UserChatLogServiceImpl;

@RestController
@RequestMapping("chatLog")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class ChatLogController {
    
    @Autowired
    private UserChatLogServiceImpl chatLogService;

	// *** INSERT ***********************************************************
	// 전송 버튼을 누를 때마다 list에 추가됨
	@PostMapping("/chating")
	public void chating(ChatLog dto) {

		String sentence = dto.getSentence().replaceAll("^(\\s+)|(\\s+)$", "");
		dto.setSentence(sentence);

		System.out.println("[dto] > " + dto);
		// DB에 채팅 내용 저장
		chatLogService.write(dto);
		
	}

}
