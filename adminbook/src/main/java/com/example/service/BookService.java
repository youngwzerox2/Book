package com.example.service;

import java.util.List;

import com.example.domain.AdminBook;

public interface BookService {
    
    // ************************* 도서 ***************************
    // 도서리스트
    List<AdminBook> bookList();

    // 회원 상세정보
    AdminBook bookDetail(AdminBook vo);

    // 도서정보 수정
    void updateBook(AdminBook vo);

    // 도서정보 삭제
    void deleteBook(AdminBook vo);
}
