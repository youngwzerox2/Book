package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.ChatData;
import com.example.userservice.UserChatDataServiceImpl;

@RestController
@RequestMapping("chatData")
public class ChatDataController {
    
    @Autowired
    private UserChatDataServiceImpl chatDataService;

    // *** SELECT ***********************************************************
	// 한 명의 사용자가 작성한 모든 채팅 기록 출력
	@GetMapping("/selectByUser")
	public List<ChatData> selectByUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[ChatDataController/selectByUser] 요청");
			List<ChatData> result = chatDataService.selectByUser(memberId);
			System.out.println("[ChatDataController/selectByUser] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// 특정 채팅 기록 출력
	@GetMapping("/selectByNum")
	public ChatData selectByNum(@RequestParam(name = "chatNumber") String chatNumber) {
		try {
			System.out.println("[ChatDataController/selectByNum] 요청");
			ChatData result = chatDataService.selectByNum(chatNumber);
			System.out.println("[ChatDataController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 채팅 기록 입력
	@PostMapping("/write")
	public Integer write(ChatData dto) {
		try {
			System.out.println("[ChatDataController/write] 요청");
			Integer result = chatDataService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
