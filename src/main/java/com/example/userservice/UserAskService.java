package com.example.userservice;

import java.util.List;

import com.example.domain.Ask;

public interface UserAskService {

    List<Ask> selectByUser(String memberId);
	
	Ask selectByNum(String askId);
	
	Integer write(Ask dto);
	
	Integer update(Ask dto);
	
	Integer delete(String askId);

}
