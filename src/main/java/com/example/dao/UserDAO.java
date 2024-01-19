package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.User;

@Mapper
public interface UserDAO {

    // ************************* 회원 ***************************
    // 회원 전체리스트
    public List<User> memberList();

    // 회원 상세정보
    public User memberDetail(User vo);

    // 회원 정보수정
    public void updateMember(User vo);

    // 회원 정보삭제
    public void deleteMember(User vo);
}
