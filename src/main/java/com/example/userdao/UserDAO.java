package com.example.userdao;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.User;

@Mapper
public interface UserDAO {
    
    User selectByNum(String memberId);
	
	Integer write(User dto);
	
	Integer update(User dto);

}
