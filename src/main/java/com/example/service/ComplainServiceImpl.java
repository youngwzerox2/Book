package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.ComplainDAO;
import com.example.domain.Complain;

@Service
public class ComplainServiceImpl implements ComplainService {

    @Autowired
    private ComplainDAO complainDAO;
    
    // ************************* 컴플레인 ***************************
    // 컴플레인 신고 전체 리스트
    @Override
    public List<Complain> complainList() {
       return complainDAO.complainList();
    }

    // 컴플레인 신고 상세정보
    @Override
    public Complain complainDetail(Complain vo) {
       return complainDAO.complainDetail(vo);
    }

    // 컴플레인 정보수정
    @Override
    public void updateComplain(Complain vo) {
        complainDAO.updateComplain(vo);
    }
}
