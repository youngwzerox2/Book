package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Notice;

@Mapper
public interface TermsDAO {

    // *************************이용약관***************************
    // 이용약관 전체 리스트
    public List<Notice> termsList();

    // 이용약관 상세정보
    public Notice termsDetail(Notice vo);

    // 이용약관 정보수정
    public void updateTerms(Notice vo);
}
