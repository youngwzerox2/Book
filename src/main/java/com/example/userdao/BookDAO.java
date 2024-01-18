package com.example.userdao;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Book;

@Mapper
public interface BookDAO {
    
    Book selectByNum(String bookIsbn13);
}
