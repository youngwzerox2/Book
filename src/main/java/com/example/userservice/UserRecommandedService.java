package com.example.userservice;

import java.util.List;

import com.example.domain.Recommanded;

public interface UserRecommandedService {
    
    List<Recommanded> selectByUser(String memberId);

    Recommanded selectByNum(String recommandedId);
	
	Integer write(Recommanded dto);

}
