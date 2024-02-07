package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.AskDAO;
import com.example.domain.Ask;

@Service
public class AskServiceImpl implements AskService{

    @Autowired
    private AskDAO askDAO;

    // ************************* 문의 ***************************
    // 문의 전체 리스트
    @Override
    public List<Ask> askList() {
        return askDAO.askList();
    }

    // 문의 상세정보
    @Override
    public Ask askDetail(Ask vo) {
        return askDAO.askDetail(vo);
    }

    // 문의 수정
    @Override
    public void updateAsk(Ask vo) {
        askDAO.updateAsk(vo); 
    }

    // 문의 삭제
    @Override
    public void deleteAsk(Ask vo) {
        askDAO.deleteAsk(vo);
    }

    // 문의 등록
    @Override
    public void insertAsk(Ask vo) {
        askDAO.insertAsk(vo);
    }

    // 문의건수
    @Override
    public List<Ask> askCount() {
        return askDAO.askCount();
    }

    // 일별 문의건수
    @Override
    public List<Ask> dailyAsk() {
        return askDAO.dailyAsk();
    }
    
}
