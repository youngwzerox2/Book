package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.ChatData;

@Mapper
public interface UserChatDataDAO {
    
    List<ChatData> selectByUser(String memberId);
	
	ChatData selectByNum(String chatNumber);
	
	Integer write(ChatData dto);

}
