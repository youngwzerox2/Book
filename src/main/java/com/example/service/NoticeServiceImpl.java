package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.NoticeDAO;
import com.example.domain.Notice;

@Service
public class NoticeServiceImpl implements NoticeService{

    @Autowired
    private NoticeDAO noticeDAO;

    // *************************공지사항***************************
    // 공지사항 전체 리스트
    @Override
    public List<Notice> noticeList() {
        return noticeDAO.noticeList();
    }

    // 공지사항 상세정보
    @Override
    public Notice noticeDetail(Notice vo) {
        return noticeDAO.noticeDetail(vo);
    }

    // 공지사항 수정
    @Override
    public void updateNotice(Notice vo) {
        noticeDAO.updateNotice(vo);
    }

    // 공지사항 삭제
    @Override
    public void deleteNotice(Notice vo) {
        noticeDAO.deleteNotice(vo);
    }

    // 공지사항 등록
    @Override
    public void insertNotice(Notice vo) {
        noticeDAO.insertNotice(vo);
    }
}
