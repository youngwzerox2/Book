package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.domain.AdminVO;
import com.example.service.AdminService;


@Controller
public class AdminController {
    
    @Autowired
    private AdminService adminService;

    @RequestMapping("/{step}")
    public String viewPage(@PathVariable String step) {
        return step;
    }

    // 메인
    @RequestMapping("/index")
    public String index() {
        System.out.println("index.jsp호출");
        return "index";
    }

    // ***************************************회원****************************************
    // 회원관리
    @RequestMapping("/member")
    public void memberList(Model m) {
        // AdminVO vo = new AdminVO();
        List<AdminVO> list = adminService.memberList();
        m.addAttribute("memberList", list);
        System.out.println("member.jsp호출");
    }

    // 회원상세정보
    @RequestMapping("/memberDetail")
    public void memberDetail(Model m, AdminVO vo) {
        AdminVO member = adminService.memberDetail(vo);
        System.out.println("memberDetail.jsp호출");
        m.addAttribute("member", member);
    }

    // 회원정보수정
    @RequestMapping("/updateMember")
    public String updateMember(AdminVO vo) {
        System.out.println("회원정보수정:"+vo);
        adminService.updateMember(vo);
        return "redirect:member";
    }

    // 회원정보삭제
    @RequestMapping("/deleteMember")
    public String deleteMember(AdminVO vo) {
        adminService.deleteMember(vo);
        return "redirect:member";
    }

    // ***************************************도서****************************************
    // 도서관리
    @RequestMapping("/book")
    public void bookList(Model m) {
        List<AdminVO> list = adminService.bookList();
        m.addAttribute("bookList", list);
        System.out.println("book.jsp호출");
    }

    // 도서상세정보
    @RequestMapping("/bookDetail")
    public void bookDetail(Model m, AdminVO vo) {
        AdminVO book = adminService.bookDetail(vo);
        System.out.println("bookDetail.jsp호출");
        m.addAttribute("book", book);
    }

     // 도서정보수정
    @RequestMapping("/updateBook")
    public String updateBook(AdminVO vo) {
        System.out.println("도서정보수정:"+vo);
        adminService.updateBook(vo);
        return "redirect:book";
    }

    // 도서정보삭제
    @RequestMapping("/deleteBook")
    public String deleteBook(AdminVO vo) {
        adminService.deleteBook(vo);
        return "redirect:book";
    }
 
    // ***************************************커뮤니티****************************************
    // 커뮤니티관리
    @RequestMapping("/community")
    public void communityList(Model m) {
        // AdminVO vo = new AdminVO();
        List<AdminVO> list = adminService.communityList();
        m.addAttribute("communityList", list);
        System.out.println("community.jsp호출");
    }

    // 커뮤니티상세정보
    @RequestMapping("/communityDetail")
    public void communityDetail(Model m, AdminVO vo) {
        AdminVO community = adminService.communityDetail(vo);
        System.out.println("communityDetail.jsp호출");
        m.addAttribute("community", community);
    }

    // 커뮤니티정보수정
    @RequestMapping("/updateCommunity")
    public String updateCommunity(AdminVO vo) {
        System.out.println("커뮤니티정보수정:"+vo);
        adminService.updateCommunity(vo);
        return "redirect:community";
    }

    // 공지사항
    @RequestMapping("/notice")
    public void notice() {
        System.out.println("notice.jsp호출");
    }

    // 공지상세정보
    @RequestMapping("/noticedetail")
    public void noticedetail() {
        System.out.println("noticedetail.jsp호출");
    }

    // 이용약관
    @RequestMapping("/termsconditions")
    public void termsconditions() {
        System.out.println("termsconditions.jsp호출");
    }

    // FAQ
    @RequestMapping("/faq")
    public void faq() {
        System.out.println("faq.jsp호출");
    }

   

    // 통계관리
    @RequestMapping("/charts")
    public void charts() {
        System.out.println("charts.jsp호출");
    }

    // 도서관관리
    @RequestMapping("/adminlibrary")
    public void adminlibrary() {
        System.out.println("adminlibrary.jsp호출");
    }
}
