package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Book;

@Mapper
public interface BookDAO {
    
    // *************************도서***************************
    // 도서전체리스트
    public List<Book> bookList();

    // 도서상세정보
    public Book bookDetail(Book vo);

    // 도서정보수정
    public void updateBook(Book vo);

    // 도서정보삭제
    public void deleteBook(Book vo);
}
