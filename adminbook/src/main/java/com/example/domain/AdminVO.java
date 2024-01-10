package com.example.domain;

import lombok.Data;

@Data
public class AdminVO {
    
    // ****************************** 회원정보 *******************************
    private String member_id;
    private String member_password;
    private String member_name;
    private String member_email;
    private String member_nickname;
    private String member_gender;
    private String member_birthday;
    private String member_tel;
    private String join_date;
    private String quit_date;
    private boolean member_visit_agree;
    private String member_grade;
    // private String card_number;
    // private String card_cvc;
    // private String card_date;
    // private String card_password;

    // ****************************** 도서정보 *******************************
    private Integer NO;
    private String ranking;
    private String bookname;
    private String authors;
    private String publisher;
    private String publication_year;
    private String book_isbn13;
    private String addition_symbol;
    private String vol;
    private String class_no;
    private String class_nm;
    private Integer loan_count;
    private String bookImageURL;
    private String bookDtlUrl;
    private String description;

    // ****************************** 커뮤니티 신고정보 *******************************
    private Integer complain_id;
    private String complain_type;
    private Integer complain_target_id;
    private String complain_content;
    private String complain_date;
    private String complain_done;
    private String complain_reply;
    private String complain_reply_date;
    private String complain_target_user;
    private String complain_reply_admin;

    // ****************************** 공지사항, FAQ, 이용약관 *******************************
    private Integer notice_number;
    private String notice_type;
    private String notice_title;
    private String notice_content;
    private String notice_date;
    private Integer notice_display;
}
