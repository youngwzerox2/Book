package com.example.service;

import java.util.List;

import com.example.domain.Complain;

public interface ComplainService {
    
    // ************************* 컴플레인 ***************************
    // 컴플레인 신고 전체리스트
    List<Complain> complainList();

    // 컴플레인 상세정보
    Complain complainDetail(Complain vo);

    // 컴플레인정보 수정
    void updateComplain(Complain vo);
}
