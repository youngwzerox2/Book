package com.example.service;

import java.util.List;

import com.example.domain.Book;

public interface BookService {
    
    // ************************* 도서 ***************************
    // 도서리스트
    List<Book> bookList();

    // 회원 상세정보
    Book bookDetail(Book vo);

    // 도서정보 수정
    void updateBook(Book vo);

    // 도서정보 삭제
    void deleteBook(Book vo);
}
