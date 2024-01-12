package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.AdminCommunity;

@Mapper
public interface CommunityDAO {
    
    // *************************커뮤니티***************************
    // 커뮤니티 신고 전체리스트
    public List<AdminCommunity> communityList();

    // 커뮤니티 상세정보
    public AdminCommunity communityDetail(AdminCommunity vo);

    // 커뮤니티 정보수정
    public void updateCommunity(AdminCommunity vo);
}
