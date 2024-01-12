package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.AdminNotice;

@Mapper
public interface NoticeDAO {

    // *************************공지사항***************************
    // 공지사항 전체 리스트
    public List<AdminNotice> noticeList();

    // 공지사항 상세정보
    public AdminNotice noticeDetail(AdminNotice vo);

    // 공지사항 정보수정
    public void updateNotice(AdminNotice vo);

    // 공지사항 정보삭제
    public void deleteNotice(AdminNotice vo);

    // 공지사항 등록
    public void insertNotice(AdminNotice vo);
}
