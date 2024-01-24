package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Book;
import com.example.userdao.UserBookDAO;

@Service
public class UserBookServiceImpl implements UserBookService {

    @Autowired
    private UserBookDAO bookDAO;

    @Override
    public List<Book> selectByTitle(String bookname) {
        return bookDAO.selectByTitle(bookname);
    }

    @Override
    public Book selectByNum(String bookIsbn13) {
        return bookDAO.selectByNum(bookIsbn13);
    }
    
}
