package com.example.userservice;

import java.util.List;

import com.example.domain.Complain;

public interface UserComplainService {
    
    List<Complain> selectComplain(String memberId);
}
