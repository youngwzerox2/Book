package com.example.service;

import java.util.List;

import com.example.domain.AdminNotice;

public interface NoticeService {
    
    // ************************* 공지사항 ***************************
    // 공지사항 전체리스트
    List<AdminNotice> noticeList();

    // 공지사항 상세정보
    AdminNotice noticeDetail(AdminNotice vo);

    // 공지사항정보 수정
    void updateNotice(AdminNotice vo);

    // 공지사항정보 삭제
    void deleteNotice(AdminNotice vo);

    // 공지사항 등록
    void insertNotice(AdminNotice vo);
}
