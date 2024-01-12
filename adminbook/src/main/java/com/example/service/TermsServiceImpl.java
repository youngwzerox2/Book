package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.TermsDAO;
import com.example.domain.AdminNotice;

@Service
public class TermsServiceImpl implements TermsService{
    
    @Autowired
    private TermsDAO termsDAO;

    // *************************이용약관***************************
    // 이용약관 전체 리스트
    @Override
    public List<AdminNotice> termsList() {
        return termsDAO.termsList();
    }

    // 이용약관 상세정보
    @Override
    public AdminNotice termsDetail(AdminNotice vo) {
        return termsDAO.termsDetail(vo);
    }

    // 이용약관 수정
    @Override
    public void updateTerms(AdminNotice vo) {
        termsDAO.updateTerms(vo); 
    }
}
