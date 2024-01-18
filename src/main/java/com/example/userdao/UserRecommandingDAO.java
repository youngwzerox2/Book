package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Recommanding;

@Mapper
public interface UserRecommandingDAO {
    
    List<Recommanding> selectByUser(String memberId);

    Recommanding selectByNum(String recommandingId);
	
	Integer write(Recommanding dto);
	
	Integer update(Recommanding dto);
	
	Integer delete(String recommandingId);
}
