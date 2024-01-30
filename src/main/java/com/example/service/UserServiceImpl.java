package com.example.service;

import java.util.List;

import org.eclipse.tags.shaded.org.apache.regexp.recompile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.UserDAO;
import com.example.domain.User;

@Service
public class UserServiceImpl implements UserService{
    
    @Autowired
    private UserDAO userDAO;
    // ************************* 회원 ***************************
    // 회원리스트
    @Override
    public List<User> memberList() {
        return userDAO.memberList(); 
    }

    // 회원상세정보
    @Override
    public User memberDetail(User vo) {
       return userDAO.memberDetail(vo);
    }

    // 회원정보수정
    @Override
    public void updateMember(User vo) {
        userDAO.updateMember(vo);
    }

    // 회원정보삭제
    @Override
    public void deleteMember(User vo) {
        userDAO.deleteMember(vo);
    }

    // 관리자 회원 ID 목록
    @Override
    public List<String> getAdminMemberIds() {
        return userDAO.getAdminMemberIds();
    }

    // 연령대 분석
    @Override
    public List<User> getAge() {
        return userDAO.getAge();
    }

    // 신규 가입자 수
    @Override
    public List<User> newUser() {
        return userDAO.newUser();
    }
}
