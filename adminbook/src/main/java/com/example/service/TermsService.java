package com.example.service;

import java.util.List;

import com.example.domain.AdminNotice;

public interface TermsService {

    // ************************* 이용약관 ***************************
    // 이용약관 전체리스트
    List<AdminNotice> termsList();

    // 이용약관 상세정보
    AdminNotice termsDetail(AdminNotice vo);

    // 이용약관 수정
    void updateTerms(AdminNotice vo);
}
