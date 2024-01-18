package com.example.userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.User;
import com.example.userdao.UserDAO;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Override
    public User selectByNum(String memberId) {
        return userDAO.selectByNum(memberId);
    }

    @Override
    public Integer write(User dto) {
        return userDAO.write(dto);
    }

    @Override
    public Integer update(User dto) {
        return userDAO.update(dto);
    }
    
}
