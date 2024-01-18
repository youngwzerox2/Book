package com.example.userservice;

import java.util.List;

import com.example.domain.Calendar;

public interface UserCalendarService {
    
    List<Calendar> selectByUser(String memberId);
	
	Calendar selectByNum(String calendarNum);
	
	Integer write(Calendar dto);
	
	Integer update(Calendar dto);
	
	Integer delete(String calendarNum);

}
