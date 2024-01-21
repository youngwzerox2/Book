package com.example.userservice;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.domain.Liked;

@Service
public class UserLikedServiceImpl implements UserLikedService {

    @Override
    public List<Liked> selectByLiked() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'selectByLiked'");
    }

    @Override
    public List<Liked> selectByUserUser(String memberId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'selectByUserUser'");
    }

    @Override
    public List<Liked> selectByUserBook(String memberId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'selectByUserBook'");
    }

    @Override
    public List<Liked> selectByUserBoard(String memberId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'selectByUserBoard'");
    }

    @Override
    public List<Liked> selectByUserComment(String memberId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'selectByUserComment'");
    }

    @Override
    public Integer write(Liked dto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'write'");
    }

    @Override
    public Integer delete(String likedNum) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }
    
}
