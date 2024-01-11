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

    // 회원 상세정보
    AdminVO bookDetail(AdminVO vo);

    // 도서정보 수정
    void updateBook(AdminVO vo);

    // 도서정보 삭제
    void deleteBook(AdminVO vo);

    // *************************커뮤니티***************************
    // 커뮤니티 신고 전체리스트
    List<AdminVO> communityList();

    // 커뮤니티 상세정보
    AdminVO communityDetail(AdminVO vo);

    // 커뮤니티정보 수정
    void updateCommunity(AdminVO vo);

    // *************************공지사항***************************
    // 공지사항 전체리스트
    List<AdminVO> noticeList();

    // 공지사항 상세정보
    AdminVO noticeDetail(AdminVO vo);

    // 공지사항정보 수정
    void updateNotice(AdminVO vo);

    // 공지사항정보 삭제
    void deleteNotice(AdminVO vo);

    // 공지사항 등록
    void insertNotice(AdminVO vo);

    // *************************FAQ***************************
    // FAQ 전체리스트
    List<AdminVO> faqList();

    // FAQ 상세정보
    AdminVO faqDetail(AdminVO vo);

    // FAQ 수정
    void updateFaq(AdminVO vo);

    // FAQ 삭제
    void deleteFaq(AdminVO vo);

    // FAQ 등록
    void insertFaq(AdminVO vo);

    // *************************이용약관***************************
    // 이용약관 전체리스트
    List<AdminVO> termsList();

    // 이용약관 상세정보
    AdminVO termsDetail(AdminVO vo);

    // 이용약관 수정
    void updateTerms(AdminVO vo);
}
