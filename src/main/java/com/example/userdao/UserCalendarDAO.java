package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Calendar;

@Mapper
public interface UserCalendarDAO {

    List<Calendar> selectByUser(String memberId);
	
	Calendar selectByNum(String calendarNum);
	
	Integer write(Calendar dto);
	
	Integer update(Calendar dto);
	
	Integer delete(String calendarNum);

}
