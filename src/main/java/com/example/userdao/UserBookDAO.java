package com.example.userdao;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Book;

@Mapper
public interface UserBookDAO {
    
    Book selectByNum(String bookIsbn13);
}
