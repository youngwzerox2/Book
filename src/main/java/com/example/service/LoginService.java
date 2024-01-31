package com.example.service;

import java.util.List;

import com.example.domain.Login;

public interface LoginService {

    // ************************* 로그인 ******************************
    // 오늘 접속자 수
    List<Login> todayLogin();
}
