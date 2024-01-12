package com.example.service;

import java.util.List;

import com.example.domain.AdminUser;

public interface UserService {

    // ************************* 회원 ***************************
    // 회원 전체리스트
    List<AdminUser> memberList();

    // 회원상세정보
    AdminUser memberDetail(AdminUser vo);

    // 회원정보수정
    void updateMember(AdminUser vo);

    // 회원정보삭제
    void deleteMember(AdminUser vo);
    
}
