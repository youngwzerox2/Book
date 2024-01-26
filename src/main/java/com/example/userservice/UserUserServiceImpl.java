package com.example.userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.User;
import com.example.userdao.UserUserDAO;

@Service
public class UserUserServiceImpl implements UserUserService {

    @Autowired
    private UserUserDAO userDAO;

    // @Autowired
    // private JavaMailSender javaMailSender;

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

    // @Override
    // public void sendEmail(String to, String subject, String body) {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'sendEmail'");
    // }

    // @Override
    // public String verificationCode() {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'verificationCode'");
    // }
    
}
