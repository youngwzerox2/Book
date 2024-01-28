package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.User;

@Mapper
public interface UserLibraryDAO {
    
    List<User> ageBookshelf(String selectedAge);

    List<User> rankingBookshelf();

}
