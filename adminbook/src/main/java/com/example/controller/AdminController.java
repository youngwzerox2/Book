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
}
