package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Blocking;

@Mapper
public interface UserBlockingDAO {

    List<Blocking> selectByUser(String memberId);
	
	Blocking selectByNum(String blockedNumber);
	
	Integer write(Blocking dto);
	
	Integer update(Blocking dto);
	
	Integer delete(String blockedNumber);

}
