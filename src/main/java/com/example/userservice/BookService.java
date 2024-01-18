package com.example.userservice;

import com.example.domain.Book;

public interface BookService {
    
    Book selectByNum(String bookIsbn13);
    
}
