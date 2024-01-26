package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Notice;

@Mapper
public interface UserNoticeDAO {
    
    List<Notice> selectNotice();

    List<Notice> selectFAQ();

    List<Notice> selectInfo();
}
