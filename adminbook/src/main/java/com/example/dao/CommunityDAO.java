package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Community;

@Mapper
public interface CommunityDAO {
    
    // *************************커뮤니티***************************
    // 커뮤니티 신고 전체리스트
    public List<Community> communityList();

    // 커뮤니티 상세정보
    public Community communityDetail(Community vo);

    // 커뮤니티 정보수정
    public void updateCommunity(Community vo);
}
