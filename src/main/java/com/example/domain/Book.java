package com.example.domain;

import lombok.Data;

@Data
public class Book {
    
    // ******************************** 도서 **********************************************
    private Integer no;
    private String ranking;
    private String bookname;
    private String authors;
    private String publisher;
    private String publicationYear;
    private String bookIsbn13;
    private String additionSymbol;
    private String vol;
    private String classNo;
    private String classNm;
    private Integer loanCount;
    private String bookImageUrl;
    private String bookDtlUrl;
    private String description;
}
