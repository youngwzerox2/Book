package com.example.service;

import java.util.List;

import com.example.domain.Complain;

public interface ComplainService {
    
    // ************************* 커뮤니티 ***************************
    // 커뮤니티 신고 전체리스트
    List<Complain> complainList();

    // 커뮤니티 상세정보
    Complain complainDetail(Complain vo);

    // 커뮤니티정보 수정
    void updateComplain(Complain vo);
}
