package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.CommunityComment;
import com.example.userdao.UserCommunityCommentDAO;

@Service
public class UserCommunityCommentServiceImpl implements UserCommunityCommentService {

    @Autowired
    private UserCommunityCommentDAO communityCommentDAO;

    @Override
    public List<CommunityComment> selectByUser(String memberId) {
        return communityCommentDAO.selectByUser(memberId);
    }

    @Override
    public CommunityComment selectByNum(String communityCommentId) {
        return communityCommentDAO.selectByNum(communityCommentId);
    }

    @Override
    public Integer write(CommunityComment dto) {
        return communityCommentDAO.write(dto);
    }

    @Override
    public Integer update(CommunityComment dto) {
        return communityCommentDAO.update(dto);
    }

    @Override
    public Integer delete(String communityCommentId) {
        return communityCommentDAO.delete(communityCommentId);
    }
    
}
