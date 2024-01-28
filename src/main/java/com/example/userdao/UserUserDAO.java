package com.example.userdao;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.User;

@Mapper
public interface UserUserDAO {
    
    User selectByNum(String memberId);

	User selectForFind(User dto);
	
	Integer write(User dto);
	
	Integer update(User dto);

	void changeToTempPw(String memberId, String tempPw);

	Integer checkId(String memberId);

}
