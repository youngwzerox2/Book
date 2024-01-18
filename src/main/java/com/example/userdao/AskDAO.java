package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Ask;

@Mapper
public interface AskDAO {
    
    List<Ask> selectByUser(String memberId);
	
	Ask selectByNum(String askId);
	
	Integer write(Ask dto);
	
	Integer update(Ask dto);
	
	Integer delete(String askId);

}
