package com.example.userservice;

import java.util.List;

import com.example.domain.Recommanding;

public interface UserRecommandingService {
    
    List<Recommanding> selectByUser(String memberId);

    Recommanding selectByNum(String recommandingId);
	
	Integer write(Recommanding dto);
	
	Integer update(Recommanding dto);
	
	Integer delete(String recommandingId);
	
}
