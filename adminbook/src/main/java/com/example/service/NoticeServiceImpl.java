package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.NoticeDAO;
import com.example.domain.AdminNotice;

@Service
public class NoticeServiceImpl implements NoticeService{

    @Autowired
    private NoticeDAO noticeDAO;

    // *************************공지사항***************************
    // 공지사항 전체 리스트
    @Override
    public List<AdminNotice> noticeList() {
        return noticeDAO.noticeList();
    }

    // 공지사항 상세정보
    @Override
    public AdminNotice noticeDetail(AdminNotice vo) {
        return noticeDAO.noticeDetail(vo);
    }

    // 공지사항 수정
    @Override
    public void updateNotice(AdminNotice vo) {
        noticeDAO.updateNotice(vo);
    }

    // 공지사항 삭제
    @Override
    public void deleteNotice(AdminNotice vo) {
        noticeDAO.deleteNotice(vo);
    }

    // 공지사항 등록
    @Override
    public void insertNotice(AdminNotice vo) {
        noticeDAO.insertNotice(vo);
    }
}
