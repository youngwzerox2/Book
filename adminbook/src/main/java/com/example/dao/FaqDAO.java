package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Notice;

@Mapper
public interface FaqDAO {
    
    // *************************FAQ***************************
    // FAQ 전체 리스트
    public List<Notice> faqList();

    // FAQ 상세정보
    public Notice faqDetail(Notice vo);

    // FAQ 정보수정
    public void updateFaq(Notice vo);

    // FAQ 정보삭제
    public void deleteFaq(Notice vo);

    // FAQ 등록
    public void insertFaq(Notice vo);
}
