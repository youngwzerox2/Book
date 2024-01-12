package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.AdminUser;

@Mapper
public interface UserDAO {

    // *************************회원***************************
    // 회원전체리스트
    public List<AdminUser> memberList();

    // 회원상세정보
    public AdminUser memberDetail(AdminUser vo);

    // 회원정보수정
    public void updateMember(AdminUser vo);

    // 회원정보삭제
    public void deleteMember(AdminUser vo);
}
