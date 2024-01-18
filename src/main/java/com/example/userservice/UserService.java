package com.example.userservice;

import com.example.domain.User;

public interface UserService {
    
    User selectByNum(String memberId);
	
	Integer write(User dto);
	
	Integer update(User dto);

}
