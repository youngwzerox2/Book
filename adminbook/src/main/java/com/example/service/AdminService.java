package com.example.service;

import java.util.List;

import com.example.domain.AdminVO;

public interface AdminService {
    // *************************회원***************************
    // 회원리스트
    List<AdminVO> memberList();

    // 회원상세정보
    AdminVO memberDetail(AdminVO vo);

    // 회원정보수정
    void updateMember(AdminVO vo);

    // 회원정보삭제
    void deleteMember(AdminVO vo);

    // *************************도서***************************
    // 도서리스트
    List<AdminVO> bookList();

    // 회원상세정보
    AdminVO bookDetail(AdminVO vo);

    // 도서정보수정
    void updateBook(AdminVO vo);

    // 도서정보삭제
    void deleteBook(AdminVO vo);

    // *************************커뮤니티***************************
    // 커뮤니티 신고 전체리스트
    List<AdminVO> communityList();

    // 커뮤니티상세정보
    AdminVO communityDetail(AdminVO vo);

    // 커뮤니티정보수정
    void updateCommunity(AdminVO vo);
}
