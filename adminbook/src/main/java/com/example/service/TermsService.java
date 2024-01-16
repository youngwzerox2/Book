package com.example.service;

import java.util.List;

import com.example.domain.Notice;

public interface TermsService {

    // ************************* 이용약관 ***************************
    // 이용약관 전체리스트
    List<Notice> termsList();

    // 이용약관 상세정보
    Notice termsDetail(Notice vo);

    // 이용약관 수정
    void updateTerms(Notice vo);
}
