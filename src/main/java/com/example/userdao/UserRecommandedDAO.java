package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Recommanded;

@Mapper
public interface UserRecommandedDAO {
    
    List<Recommanded> selectByUser(String memberId);

    Recommanded selectByNum(String recommandedId);
	
	Integer write(Recommanded dto);
	
	Integer delete(String recommandedId);

}
