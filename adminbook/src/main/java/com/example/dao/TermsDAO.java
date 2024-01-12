package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.AdminNotice;

@Mapper
public interface TermsDAO {

    // *************************이용약관***************************
    // 이용약관 전체 리스트
    public List<AdminNotice> termsList();

    // 이용약관 상세정보
    public AdminNotice termsDetail(AdminNotice vo);

    // 이용약관 정보수정
    public void updateTerms(AdminNotice vo);
}
