package com.example.userservice;

import java.util.List;

import com.example.domain.Blocking;

public interface UserBlockingService {
    
    List<Blocking> selectByUser(String memberId);
	
	Blocking selectByNum(String blockedNumber);
	
	Integer write(Blocking dto);
	
	Integer update(Blocking dto);
	
	Integer delete(String blockedNumber);

}
