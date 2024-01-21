package com.example.userservice;

import java.util.List;

import com.example.domain.ChatData;

public interface UserChatDataService {
    
    List<ChatData> selectByUser(String memberId);
	
	ChatData selectByNum(String chatNumber);
	
	Integer write(ChatData dto);

}
