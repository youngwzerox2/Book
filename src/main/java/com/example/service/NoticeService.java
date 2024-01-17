package com.example.service;

import java.util.List;

import com.example.domain.Notice;

public interface NoticeService {
    
    // ************************* 공지사항 ***************************
    // 공지사항 전체리스트
    List<Notice> noticeList();

    // 공지사항 상세정보
    Notice noticeDetail(Notice vo);

    // 공지사항정보 수정
    void updateNotice(Notice vo);

    // 공지사항정보 삭제
    void deleteNotice(Notice vo);

    // 공지사항 등록
    void insertNotice(Notice vo);
}
