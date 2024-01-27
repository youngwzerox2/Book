package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Complain;

@Mapper
public interface UserComplainDAO {
    
    List<Complain> selectComplain(String memberId);

}
