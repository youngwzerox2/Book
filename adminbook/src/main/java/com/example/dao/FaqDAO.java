package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.AdminNotice;

@Mapper
public interface FaqDAO {
    
    // *************************FAQ***************************
    // FAQ 전체 리스트
    public List<AdminNotice> faqList();

    // FAQ 상세정보
    public AdminNotice faqDetail(AdminNotice vo);

    // FAQ 정보수정
    public void updateFaq(AdminNotice vo);

    // FAQ 정보삭제
    public void deleteFaq(AdminNotice vo);

    // FAQ 등록
    public void insertFaq(AdminNotice vo);
}
