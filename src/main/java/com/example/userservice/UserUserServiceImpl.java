package com.example.userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.User;
import com.example.userdao.UserUserDAO;

@Service
public class UserUserServiceImpl implements UserUserService {

    @Autowired
    private UserUserDAO userDAO;

    @Override
    public User selectByNum(String memberId) {
        return userDAO.selectByNum(memberId);
    }

    @Override
    public User selectForFind(User dto) {
        return userDAO.selectForFind(dto);
    }

    @Override
    public Integer write(User dto) {
        return userDAO.write(dto);
    }

    @Override
    public Integer update(User dto) {
        return userDAO.update(dto);
    }

    @Override
    public void changeToTempPw(String memberId, String tempPw) {
        userDAO.changeToTempPw(memberId, tempPw);
    }

    @Override
    public Integer checkId(String memberId) {
        return userDAO.checkId(memberId);
    }

}
