package com.example.userservice;

import java.util.List;

import com.example.domain.Book;

public interface UserBookService {

    List<Book> selectByTitle(String bookname);

    List<Book> selectByTitle10(String bookname);
    
    Book selectByNum(String bookIsbn13);

    List<Book> selectHotbook();
    
}
