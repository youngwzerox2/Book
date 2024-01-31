package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Login;

@Mapper
public interface LoginDAO {
    
    // *************************** 로그인 ******************************
    // 오늘 접속자 수
    public List<Login> todayLogin();
}
