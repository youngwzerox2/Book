package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.BookDAO;
import com.example.domain.AdminBook;

@Service
public class BookServiceImpl implements BookService{
    
    @Autowired
    private BookDAO bookDAO;

    // *************************도서***************************
    // 도서리스트
    @Override
    public List<AdminBook> bookList() {
        return bookDAO.bookList(); 
    }

    // 도서상세정보
    @Override
    public AdminBook bookDetail(AdminBook vo) {
       return bookDAO.bookDetail(vo);
    }

    // 도서정보수정
    @Override
    public void updateBook(AdminBook vo) {
        bookDAO.updateBook(vo);
    }

    // 도서정보삭제
    @Override
    public void deleteBook(AdminBook vo) {
        bookDAO.deleteBook(vo);
    }
}
