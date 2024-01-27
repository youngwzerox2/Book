package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Complain;
import com.example.userdao.UserComplainDAO;

@Service
public class UserComplainServiceImpl implements UserComplainService {

    @Autowired
    private UserComplainDAO complainDAO;

    @Override
    public List<Complain> selectComplain(String memberId) {
        return complainDAO.selectComplain(memberId);
    }

    
    
}
