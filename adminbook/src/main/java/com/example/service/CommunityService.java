package com.example.service;

import java.util.List;

import com.example.domain.Community;

public interface CommunityService {
    
    // ************************* 커뮤니티 ***************************
    // 커뮤니티 신고 전체리스트
    List<Community> communityList();

    // 커뮤니티 상세정보
    Community communityDetail(Community vo);

    // 커뮤니티정보 수정
    void updateCommunity(Community vo);
}
