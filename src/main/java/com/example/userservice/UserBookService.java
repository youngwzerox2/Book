package com.example.userservice;

import java.util.List;

import com.example.domain.Book;

public interface UserBookService {

    List<Book> selectByTitle(String bookname);
    
    Book selectByNum(String bookIsbn13);
    
}
