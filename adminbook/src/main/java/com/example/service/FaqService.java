package com.example.service;

import java.util.List;

import com.example.domain.AdminNotice;

public interface FaqService {
     // ************************* FAQ ***************************
    // FAQ 전체리스트
    List<AdminNotice> faqList();

    // FAQ 상세정보
    AdminNotice faqDetail(AdminNotice vo);

    // FAQ 수정
    void updateFaq(AdminNotice vo);

    // FAQ 삭제
    void deleteFaq(AdminNotice vo);

    // FAQ 등록
    void insertFaq(AdminNotice vo);
}
