package com.example.userservice;

import java.util.List;

import com.example.domain.Notice;

public interface UserNoticeService {
    
    List<Notice> selectNotice();

    List<Notice> selectFAQ();

    List<Notice> selectInfo();
}
