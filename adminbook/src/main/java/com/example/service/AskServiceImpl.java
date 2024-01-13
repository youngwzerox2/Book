package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.AskDAO;
import com.example.domain.AdminAsk;

@Service
public class AskServiceImpl implements AskService{

    @Autowired
    private AskDAO askDAO;

    // ************************* 문의 ***************************
    // 문의 전체 리스트
    @Override
    public List<AdminAsk> askList() {
        System.out.println("전체서비스");
        return askDAO.askList();
    }

    // 문의 상세정보
    @Override
    public AdminAsk askDetail(AdminAsk vo) {
        System.out.println("문의상세"+vo);
        return askDAO.askDetail(vo);
    }

    // 문의 수정
    @Override
    public void updateAsk(AdminAsk vo) {
        askDAO.updateAsk(vo); 
        System.out.println("문의수정"+ vo);
    }

    // 문의 삭제
    @Override
    public void deleteAsk(AdminAsk vo) {
        askDAO.deleteAsk(vo);
    }

    // 문의 등록
    @Override
    public void insertAsk(AdminAsk vo) {
        askDAO.insertAsk(vo);
    }

    // 미완료된 답변이 있는 문의 리스트
    @Override
    public List<AdminAsk> getUnansweredList() {
        System.out.println("미완료서비스");
        return askDAO.getUnansweredList();
    }

    // 완료된 답변이 있는 문의 리스트
    @Override
    public List<AdminAsk> getAnsweredList() {
        System.out.println("완료서비스");
        return askDAO.getAnsweredList();
    }
}
