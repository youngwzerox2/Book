package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.LoginDAO;
import com.example.domain.Login;

@Service
public class LoginServiceImpl implements LoginService{

    @Autowired
    private LoginDAO loginDAO;

    // ************************* 로그인 ***************************
    // 오늘 접속자 수
    @Override
    public List<Login> todayLogin() {
        return loginDAO.todayLogin();
    }
    
}
