package com.example.service;

import java.util.List;

import com.example.domain.Notice;

public interface FaqService {
     // ************************* FAQ ***************************
    // FAQ 전체리스트
    List<Notice> faqList();

    // FAQ 상세정보
    Notice faqDetail(Notice vo);

    // FAQ 수정
    void updateFaq(Notice vo);

    // FAQ 삭제
    void deleteFaq(Notice vo);

    // FAQ 등록
    void insertFaq(Notice vo);
}
