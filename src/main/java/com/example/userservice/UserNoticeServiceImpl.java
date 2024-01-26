package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Notice;
import com.example.userdao.UserNoticeDAO;

@Service
public class UserNoticeServiceImpl implements UserNoticeService {

    @Autowired
    private UserNoticeDAO noticeDAO;

    @Override
    public List<Notice> selectNotice() {
        return noticeDAO.selectNotice();
    }

    @Override
    public List<Notice> selectFAQ() {
        return noticeDAO.selectFAQ();
    }

    @Override
    public List<Notice> selectInfo() {
        return noticeDAO.selectInfo();
    }
    
}
