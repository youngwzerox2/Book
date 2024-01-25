package com.example.userservice;

import java.util.List;

import com.example.domain.ChatLog;

public interface UserChatLogService {
    
    Integer write(ChatLog dto);

	Integer getChatNum(String memberId);

    Integer logYN(String memberId);

    List<String> getSentenceN(String memberId);

    List<String> getSentenceY(String memberId);
    
    void terminateY(String memberId);

}
