package com.example.service;

import java.util.List;

import com.example.domain.AdminAsk;

public interface AskService {
    
    // ************************* 문의 ***************************
    // 문의 전체리스트
    List<AdminAsk> askList();

    // 문의 상세정보
    AdminAsk askDetail(AdminAsk vo);

    // 문의 수정
    void updateAsk(AdminAsk vo);

    // 문의 삭제
    void deleteAsk(AdminAsk vo);

    // 문의 등록
    void insertAsk(AdminAsk vo);

    // 미완료된 답변이 있는 문의 리스트
    List<AdminAsk> getUnansweredList();

    // 완료된 답변이 있는 문의 리스트
    List<AdminAsk> getAnsweredList();
}
