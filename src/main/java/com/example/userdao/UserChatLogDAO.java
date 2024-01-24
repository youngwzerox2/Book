package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.ChatLog;

@Mapper
public interface UserChatLogDAO {
    
    Integer write(ChatLog dto);

	Integer getChatNum(String memberId);

    Integer logYN(String memberId);

    List<String> getSentenceN(String memberId);

    List<String> getSentenceY(String memberId);

    void terminateY(String memberId);

}
