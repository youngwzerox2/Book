package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.AdminBook;

@Mapper
public interface BookDAO {
    
    // *************************도서***************************
    // 도서전체리스트
    public List<AdminBook> bookList();

    // 도서상세정보
    public AdminBook bookDetail(AdminBook vo);

    // 도서정보수정
    public void updateBook(AdminBook vo);

    // 도서정보삭제
    public void deleteBook(AdminBook vo);
}
