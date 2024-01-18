package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.ChatLog;
import com.example.userservice.ChatLogServiceImpl;

@RestController
@RequestMapping("chatLog")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class ChatLogController {
    
    @Autowired
    private ChatLogServiceImpl chatLogService;

	// *** INSERT ***********************************************************
	// 사용자의 독서기록 입력
	@PostMapping("/write")
	public Integer write(@RequestParam(name = "chatLogs") ChatLog dto) {
		try {
			System.out.println("[ChatLogController/write] 요청");
			Integer result = chatLogService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
