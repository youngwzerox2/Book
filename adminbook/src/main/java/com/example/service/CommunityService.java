package com.example.service;

import java.util.List;

import com.example.domain.AdminCommunity;

public interface CommunityService {
    
    // ************************* 커뮤니티 ***************************
    // 커뮤니티 신고 전체리스트
    List<AdminCommunity> communityList();

    // 커뮤니티 상세정보
    AdminCommunity communityDetail(AdminCommunity vo);

    // 커뮤니티정보 수정
    void updateCommunity(AdminCommunity vo);
}
