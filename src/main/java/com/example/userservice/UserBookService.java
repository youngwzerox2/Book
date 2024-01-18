package com.example.userservice;

import com.example.domain.Book;

public interface UserBookService {
    
    Book selectByNum(String bookIsbn13);
    
}
