package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Liked;
import com.example.userdao.UserLikedDAO;

@Service
public class UserLikedServiceImpl implements UserLikedService {

    @Autowired
    private UserLikedDAO likedDAO;

    @Override
    public List<Liked> selectByLiked() {
        return likedDAO.selectByLiked();
    }

    @Override
    public List<Liked> selectByUserUser(String memberId) {
        return likedDAO.selectByUserUser(memberId);
    }

    @Override
    public List<Liked> selectByUserBook(String memberId) {
        return likedDAO.selectByUserBook(memberId);
    }

    @Override
    public List<Liked> selectByUserBoard(String memberId) {
        return likedDAO.selectByUserBoard(memberId);
    }

    @Override
    public List<Liked> selectByUserComment(String memberId) {
        return likedDAO.selectByUserComment(memberId);
    }

    @Override
    public Integer write(Liked dto) {
        return likedDAO.write(dto);
    }

    @Override
    public Integer delete(String likedNum) {
        return likedDAO.delete(likedNum);
    }
    
}
