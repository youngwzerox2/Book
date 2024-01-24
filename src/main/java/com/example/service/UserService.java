package com.example.service;

import java.util.List;

import com.example.domain.User;

public interface UserService {

    // ************************* 회원 ***************************
    // 회원 전체리스트
    List<User> memberList();

    // 회원상세정보
    User memberDetail(User vo);

    // 회원정보수정
    void updateMember(User vo);

    // 회원정보삭제
    void deleteMember(User vo);
    
    // 관리자 회원 ID 목록
    List<String> getAdminMemberIds();
}
