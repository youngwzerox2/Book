package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.FaqDAO;
import com.example.domain.Notice;

@Service
public class FaqServiceImpl implements FaqService{

    @Autowired
    private FaqDAO faqDAO;

     // *************************FAQ***************************
    // FAQ 전체 리스트
    @Override
    public List<Notice> faqList() {
        return faqDAO.faqList();
    }

    // FAQ 상세정보
    @Override
    public Notice faqDetail(Notice vo) {
        return faqDAO.faqDetail(vo);
    }

    // FAQ 수정
    @Override
    public void updateFaq(Notice vo) {
        faqDAO.updateFaq(vo); 
    }

    // FAQ 삭제
    @Override
    public void deleteFaq(Notice vo) {
        faqDAO.deleteFaq(vo);
    }

    // FAQ 등록
    @Override
    public void insertFaq(Notice vo) {
        faqDAO.insertFaq(vo);
    }
}
