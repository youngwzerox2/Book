package com.example.userdao;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.ChatLog;

@Mapper
public interface UserChatLogDAO {
    
    Integer write(ChatLog dto);

	Integer getChatNum();

    String getMemberId();

}
