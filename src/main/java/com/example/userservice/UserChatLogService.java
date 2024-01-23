package com.example.userservice;

import com.example.domain.ChatLog;

public interface UserChatLogService {
    
    Integer write(ChatLog dto);

	Integer getChatNum();

}
