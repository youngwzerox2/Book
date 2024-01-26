package com.example.service;

import java.util.List;

import com.example.domain.Ask;

public interface AskService {
    
    // ************************* 문의 ***************************
    // 문의 전체리스트
    List<Ask> askList();

    // 문의 상세정보
    Ask askDetail(Ask vo);

    // 문의 수정
    void updateAsk(Ask vo);

    // 문의 삭제
    void deleteAsk(Ask vo);

    // 문의 등록
    void insertAsk(Ask vo);

    // 미완료된 답변이 있는 문의 리스트
    List<Ask> getUnansweredList();

    // 완료된 답변이 있는 문의 리스트
    List<Ask> getAnsweredList();

    // 문의건수
    List<Ask> askCount();
}
