package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdminController {
    
    @RequestMapping("/{step}")
    public String viewPage(@PathVariable String step) {
        return step;
    }

    @RequestMapping("/index")
    public String index() {
        System.out.println("index.jsp호출");
        return "index";
    }

    @RequestMapping("/sidebar")
    public void sidebar() {
        System.out.println("sidebar.jsp호출");
    }

    @RequestMapping("/member")
    public void member() {
        System.out.println("member.jsp호출");
    }
    
    @RequestMapping("/memberdetail")
    public void memberdetail() {
        System.out.println("memberdetail.jsp호출");
    }

    @RequestMapping("/book")
    public void book() {
        System.out.println("book.jsp호출");
    }

    @RequestMapping("/notice")
    public void notice() {
        System.out.println("notice.jsp호출");
    }

    @RequestMapping("/noticedetail")
    public void noticedetail() {
        System.out.println("noticedetail.jsp호출");
    }

    @RequestMapping("/termsconditions")
    public void termsconditions() {
        System.out.println("termsconditions.jsp호출");
    }

    @RequestMapping("/faq")
    public void faq() {
        System.out.println("faq.jsp호출");
    }

    @RequestMapping("/community")
    public void community() {
        System.out.println("community.jsp호출");
    }

    @RequestMapping("/charts")
    public void charts() {
        System.out.println("charts.jsp호출");
    }

    @RequestMapping("/adminlibrary")
    public void adminlibrary() {
        System.out.println("adminlibrary.jsp호출");
    }
}
