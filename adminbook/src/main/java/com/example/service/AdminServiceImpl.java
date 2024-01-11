package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.AdminDAO;
import com.example.domain.AdminVO;

@Service
public class AdminServiceImpl implements AdminService{

    @Autowired
    private AdminDAO adminDAO;

    // *************************회원***************************
    // 회원리스트
    @Override
    public List<AdminVO> memberList() {
        return adminDAO.memberList(); 
    }

    // 회원상세정보
    @Override
    public AdminVO memberDetail(AdminVO vo) {
       return adminDAO.memberDetail(vo);
    }

    // 회원정보수정
    @Override
    public void updateMember(AdminVO vo) {
        adminDAO.updateMember(vo);
    }

    // 회원정보삭제
    @Override
    public void deleteMember(AdminVO vo) {
        adminDAO.deleteMember(vo);
    }

    // *************************도서***************************
    // 도서리스트
    @Override
    public List<AdminVO> bookList() {
        return adminDAO.bookList(); 

    }

    // 도서상세정보
    @Override
    public AdminVO bookDetail(AdminVO vo) {
       return adminDAO.bookDetail(vo);
    }

    // 도서정보수정
    @Override
    public void updateBook(AdminVO vo) {
        adminDAO.updateBook(vo);
    }

    // 도서정보삭제
    @Override
    public void deleteBook(AdminVO vo) {
        adminDAO.deleteBook(vo);
    }

    // *************************커뮤니티***************************
    // 커뮤니티 신고 전체 리스트
    @Override
    public List<AdminVO> communityList() {
       return adminDAO.communityList();
    }

    // 커뮤니티 신고 상세정보
    @Override
    public AdminVO communityDetail(AdminVO vo) {
       return adminDAO.communityDetail(vo);
    }

    // 커뮤니티정보수정
    @Override
    public void updateCommunity(AdminVO vo) {
        adminDAO.updateCommunity(vo);
    }

    // *************************공지사항***************************
    // 공지사항 전체 리스트
    @Override
    public List<AdminVO> noticeList() {
        return adminDAO.noticeList();
    }

    // 공지사항 상세정보
    @Override
    public AdminVO noticeDetail(AdminVO vo) {
        return adminDAO.noticeDetail(vo);
    }

    // 공지사항 수정
    @Override
    public void updateNotice(AdminVO vo) {
        adminDAO.updateNotice(vo);
    }

    // 공지사항 삭제
    @Override
    public void deleteNotice(AdminVO vo) {
        adminDAO.deleteNotice(vo);
    }

    // 공지사항 등록
    @Override
    public void insertNotice(AdminVO vo) {
        adminDAO.insertNotice(vo);
    }
    

    // *************************FAQ***************************
    // FAQ 전체 리스트
    @Override
    public List<AdminVO> faqList() {
        return adminDAO.faqList();
    }

    // FAQ 상세정보
    @Override
    public AdminVO faqDetail(AdminVO vo) {
        return adminDAO.faqDetail(vo);
    }

    // FAQ 수정
    @Override
    public void updateFaq(AdminVO vo) {
        adminDAO.updateFaq(vo); 
    }

    // FAQ 삭제
    @Override
    public void deleteFaq(AdminVO vo) {
        adminDAO.deleteFaq(vo);
    }

    // FAQ 등록
    @Override
    public void insertFaq(AdminVO vo) {
        adminDAO.insertFaq(vo);
    }

    // *************************이용약관***************************
    // 이용약관 전체 리스트
    @Override
    public List<AdminVO> termsList() {
        return adminDAO.termsList();
    }

    // 이용약관 상세정보
    @Override
    public AdminVO termsDetail(AdminVO vo) {
        return adminDAO.termsDetail(vo);
    }

    // 이용약관 수정
    @Override
    public void updateTerms(AdminVO vo) {
        adminDAO.updateTerms(vo); 
    }


   

   
    
}
