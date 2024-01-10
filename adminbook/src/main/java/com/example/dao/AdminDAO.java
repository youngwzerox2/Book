package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.AdminVO;

@Mapper
public interface AdminDAO {

    // *************************회원***************************
    // 회원전체리스트
    public List<AdminVO> memberList();

    // 회원상세정보
    public AdminVO memberDetail(AdminVO vo);

    // 회원정보수정
    public void updateMember(AdminVO vo);

    // 회원정보삭제
    public void deleteMember(AdminVO vo);
    
    // *************************도서***************************
    // 도서전체리스트
    public List<AdminVO> bookList();

    // 도서상세정보
    public AdminVO bookDetail(AdminVO vo);

    // 도서정보수정
    public void updateBook(AdminVO vo);

    // 도서정보삭제
    public void deleteBook(AdminVO vo);

    // *************************커뮤니티***************************
    // 커뮤니티 신고 전체리스트
    public List<AdminVO> communityList();

    // 커뮤니티 상세정보
    public AdminVO communityDetail(AdminVO vo);

    // 커뮤니티 정보수정
    public void updateCommunity(AdminVO vo);

    // *************************공지사항***************************
    // 공지사항 전체 리스트
    public List<AdminVO> noticeList();

    // 공지사항 상세정보
    public AdminVO noticeDetail(AdminVO vo);

    // 공지사항 정보수정
    public void updateNotice(AdminVO vo);

    // *************************FAQ***************************
    // 공지사항 전체 리스트
    public List<AdminVO> faqList();

    // 공지사항 상세정보
    public AdminVO faqDetail(AdminVO vo);

    // 공지사항 정보수정
    public void updateFaq(AdminVO vo);
}
