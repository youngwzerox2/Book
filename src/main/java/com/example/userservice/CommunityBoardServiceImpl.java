package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.CommunityBoard;
import com.example.userdao.CommunityBoardDAO;

@Service
public class CommunityBoardServiceImpl implements CommunityBoardService {

    @Autowired
    private CommunityBoardDAO communityBoardDAO;

    @Override
    public List<CommunityBoard> selectAll() {
        return communityBoardDAO.selectAll();
    }

    @Override
    public List<CommunityBoard> selectByUser(String memberId) {
        return communityBoardDAO.selectByUser(memberId);
    }

    @Override
    public CommunityBoard selectByNum(String communityBoardId) {
        return communityBoardDAO.selectByNum(communityBoardId);
    }

    @Override
    public Integer write(CommunityBoard dto) {
        return communityBoardDAO.write(dto);
    }

    @Override
    public Integer update(CommunityBoard dto) {
        return communityBoardDAO.update(dto);
    }

    @Override
    public Integer delete(String communityBoardId) {
        return communityBoardDAO.delete(communityBoardId);
    }
    
}
