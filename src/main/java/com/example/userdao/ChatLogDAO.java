package com.example.userdao;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.ChatLog;

@Mapper
public interface ChatLogDAO {
    
    Integer write(ChatLog dto);

}
