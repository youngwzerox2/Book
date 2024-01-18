package com.example.userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Book;
import com.example.userdao.BookDAO;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDAO bookDAO;

    @Override
    public Book selectByNum(String bookIsbn13) {
        return bookDAO.selectByNum(bookIsbn13);
    }
    
}
