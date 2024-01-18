package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Calendar;
import com.example.userdao.UserCalendarDAO;

@Service
public class UserCalendarServiceImpl implements UserCalendarService {

    @Autowired
    private UserCalendarDAO calendarDAO;

    @Override
    public List<Calendar> selectByUser(String memberId) {
        return calendarDAO.selectByUser(memberId);
    }

    @Override
    public Calendar selectByNum(String calendarNum) {
        return calendarDAO.selectByNum(calendarNum);
    }

    @Override
    public Integer write(Calendar dto) {
        return calendarDAO.write(dto);
    }

    @Override
    public Integer update(Calendar dto) {
        return calendarDAO.update(dto);
    }

    @Override
    public Integer delete(String calendarNum) {
        return calendarDAO.delete(calendarNum);
    }
    
}
