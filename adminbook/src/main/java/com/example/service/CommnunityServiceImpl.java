package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.CommunityDAO;
import com.example.domain.AdminCommunity;

@Service
public class CommnunityServiceImpl implements CommunityService {

    @Autowired
    private CommunityDAO communityDAO;
    
    // *************************커뮤니티***************************
    // 커뮤니티 신고 전체 리스트
    @Override
    public List<AdminCommunity> communityList() {
       return communityDAO.communityList();
    }

    // 커뮤니티 신고 상세정보
    @Override
    public AdminCommunity communityDetail(AdminCommunity vo) {
       return communityDAO.communityDetail(vo);
    }

    // 커뮤니티정보수정
    @Override
    public void updateCommunity(AdminCommunity vo) {
        communityDAO.updateCommunity(vo);
    }
}
