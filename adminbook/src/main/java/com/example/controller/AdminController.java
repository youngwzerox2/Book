package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.domain.AdminAsk;
import com.example.domain.AdminBook;
import com.example.domain.AdminCommunity;
import com.example.domain.AdminNotice;
import com.example.domain.AdminUser;
import com.example.service.AskService;
import com.example.service.BookService;
import com.example.service.CommunityService;
import com.example.service.FaqService;
import com.example.service.NoticeService;
import com.example.service.TermsService;
import com.example.service.UserService;

@Controller
public class AdminController {

    // 회원
    @Autowired
    private UserService userService;

    // 도서
    @Autowired
    private BookService bookService;

    // 커뮤니티
    @Autowired
    private CommunityService communityService;

    // 공지사항
    @Autowired
    private NoticeService noticeService;

    // FAQ
    @Autowired
    private FaqService faqService;

    // 문의
    @Autowired
    private AskService askService;

    // 이용약관
    @Autowired
    private TermsService termsService;

    @RequestMapping("/{step}")
    public String viewPage(@PathVariable String step) {
        return step;
    }

    // *************************************** 메인
    // ****************************************
    // 메인
    // @RequestMapping("/index")
    // public String index() {
    // System.out.println("index.jsp호출");
    // return "index";
    // }

    // 메인 제재명단
    @RequestMapping("/index")
    public void index(Model m) {
        List<AdminUser> list = userService.memberList();
        m.addAttribute("memberList", list);
        System.out.println("index.jsp호출");

    }

    // *************************************** 회원
    // ****************************************
    // 회원관리
    @RequestMapping("/member")
    public void memberList(Model m) {
        List<AdminUser> list = userService.memberList();
        m.addAttribute("memberList", list);
        System.out.println("member.jsp호출");
    }

    // 회원상세정보
    @RequestMapping("/memberDetail")
    public void memberDetail(Model m, AdminUser vo) {
        AdminUser member = userService.memberDetail(vo);
        System.out.println("memberDetail.jsp호출");
        m.addAttribute("member", member);
    }

    // 회원정보수정
    @RequestMapping("/updateMember")
    public String updateMember(AdminUser vo) {
        System.out.println("회원정보수정:" + vo);
        userService.updateMember(vo);
        return "redirect:member";
    }

    // 회원정보삭제
    @RequestMapping("/deleteMember")
    public String deleteMember(AdminUser vo) {
        userService.deleteMember(vo);
        return "redirect:member";
    }

    // *************************************** 도서
    // ****************************************
    // 도서관리
    @RequestMapping("/book")
    public void bookList(Model m) {
        List<AdminBook> list = bookService.bookList();
        m.addAttribute("bookList", list);
        System.out.println("book.jsp호출");
    }

    // 도서상세정보
    @RequestMapping("/bookDetail")
    public void bookDetail(Model m, AdminBook vo) {
        AdminBook book = bookService.bookDetail(vo);
        System.out.println("bookDetail.jsp호출");
        m.addAttribute("book", book);
    }

    // 도서정보수정
    @RequestMapping("/updateBook")
    public String updateBook(AdminBook vo) {
        System.out.println("도서정보수정:" + vo);
        bookService.updateBook(vo);
        return "redirect:book";
    }

    // 도서정보삭제
    @RequestMapping("/deleteBook")
    public String deleteBook(AdminBook vo) {
        bookService.deleteBook(vo);
        return "redirect:book";
    }

    // *************************************** 커뮤니티
    // ****************************************
    // 커뮤니티관리
    @RequestMapping("/community")
    public void communityList(Model m) {
        List<AdminCommunity> list = communityService.communityList();
        m.addAttribute("communityList", list);
        System.out.println("community.jsp호출");
    }

    // 커뮤니티상세정보
    @RequestMapping("/communityDetail")
    public void communityDetail(Model m, AdminCommunity vo) {
        AdminCommunity community = communityService.communityDetail(vo);
        System.out.println("communityDetail.jsp호출");
        m.addAttribute("community", community);
    }

    // 커뮤니티정보수정
    @RequestMapping("/updateCommunity")
    public String updateCommunity(AdminCommunity vo) {
        System.out.println("커뮤니티정보수정:" + vo);
        communityService.updateCommunity(vo);
        return "redirect:community";
    }

    // *************************************** 공지사항
    // ****************************************
    // 공지사항 관리
    @RequestMapping("/notice")
    public void noticeList(Model m) {
        // AdminVO vo = new AdminVO();
        List<AdminNotice> list = noticeService.noticeList();
        m.addAttribute("noticeList", list);
        System.out.println("notice.jsp호출");
    }

    // 공지사항 상세정보
    @RequestMapping("/noticeDetail")
    public void noticeDetail(Model m, AdminNotice vo) {
        AdminNotice notice = noticeService.noticeDetail(vo);
        System.out.println("noticeDetail.jsp호출");
        m.addAttribute("notice", notice);
    }

    // 공지사항 정보수정
    @RequestMapping("/updateNotice")
    public String updateNotice(AdminNotice vo) {
        System.out.println("공지사항정보수정:" + vo);
        noticeService.updateNotice(vo);
        return "redirect:notice";
    }

    // 공지사항 삭제
    @RequestMapping("/deleteNotice")
    public String deleteNotice(AdminNotice vo) {
        noticeService.deleteNotice(vo);
        return "redirect:notice";
    }

    // 공지사항 등록
    @RequestMapping("/insertNotice")
    public void insertNotice(Model m, AdminNotice vo) {
        noticeService.insertNotice(vo);
    }

    // *************************************** 이용약관
    // ****************************************
    // 이용약관 관리
    @RequestMapping("/terms")
    public void termsList(Model m) {
        List<AdminNotice> list = termsService.termsList();
        m.addAttribute("termsList", list);
        System.out.println("terms.jsp호출");
    }

    // 이용약관 상세정보
    @RequestMapping("/termsDetail")
    public void termsDetail(Model m, AdminNotice vo) {
        AdminNotice terms = termsService.termsDetail(vo);
        System.out.println("termsDetail.jsp호출");
        m.addAttribute("terms", terms);
    }

    // 이용약관 정보수정
    @RequestMapping("/updateTerms")
    public String updateTerms(AdminNotice vo) {
        System.out.println("이용약관 정보수정:" + vo);
        termsService.updateTerms(vo);
        return "redirect:terms";
    }

    // *************************************** FAQ
    // ****************************************
    // FAQ 관리
    @RequestMapping("/faq")
    public void faqList(Model m) {
        List<AdminNotice> list = faqService.faqList();
        m.addAttribute("faqList", list);
        System.out.println("faq.jsp호출");
    }

    // FAQ 상세정보
    @RequestMapping("/faqDetail")
    public void faqDetail(Model m, AdminNotice vo) {
        AdminNotice faq = faqService.faqDetail(vo);
        System.out.println("faqDetail.jsp호출");
        m.addAttribute("faq", faq);
    }

    // FAQ 정보수정
    @RequestMapping("/updateFaq")
    public String updateFaq(AdminNotice vo) {
        System.out.println("FAQ 정보수정:" + vo);
        faqService.updateFaq(vo);
        return "redirect:faq";
    }

    // FAQ 삭제
    @RequestMapping("/deleteFaq")
    public String deleteFaq(AdminNotice vo) {
        faqService.deleteFaq(vo);
        return "redirect:faq";
    }

    // FAQ 등록
    @RequestMapping("/insertFaq")
    public void insertFaq(Model m, AdminNotice vo) {
        faqService.insertFaq(vo);
    }

    // *************************************** 문의 ****************************************
    // 문의 관리
    @RequestMapping("/ask")
    public String askList(Model m) {
        List<AdminAsk> list = askService.askList();
        m.addAttribute("askList", list);
        System.out.println("ask.jsp호출");

        return "ask";
    }

    // 문의 상세정보
    @RequestMapping("/askDetail")
    public void askDetail(Model m, AdminAsk vo) {
        AdminAsk ask = askService.askDetail(vo);
        System.out.println("askDetail.jsp호출");
        m.addAttribute("ask", ask);
    }

    // 문의 정보수정
    @RequestMapping("/updateAsk")
    public String updateAsk(AdminAsk vo) {
        System.out.println("문의 정보수정:" + vo);
        askService.updateAsk(vo);
        return "redirect:ask";
    }

    // 문의 삭제
    @RequestMapping("/deleteAsk")
    public String deleteAsk(AdminAsk vo) {
        askService.deleteAsk(vo);
        return "redirect:ask";
    }

    // 문의 등록
    @RequestMapping("/insertAsk")
    public void insertAsk(Model m, AdminAsk vo) {
        askService.insertAsk(vo);
    }

    // *************************************** 통계
    // ****************************************
    // 통계관리
    @RequestMapping("/charts")
    public void charts() {
        System.out.println("charts.jsp호출");
    }

    // *************************************** 도서관
    // ****************************************
    // 도서관관리
    @RequestMapping("/adminlibrary")
    public void adminlibrary() {
        System.out.println("adminlibrary.jsp호출");
    }
}
