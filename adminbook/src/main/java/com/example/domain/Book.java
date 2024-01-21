package com.example.domain;

import lombok.Data;

@Data
public class Book {
    
    // ******************************** 도서 **********************************************
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
}
