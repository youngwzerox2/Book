package com.example.userdao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.User;

@Mapper
public interface UserLibraryDAO {

    List<User> recommendBookshelf(String joinedId);

    List<User> ageBookshelf(String memberId);
    
    List<User> chooseAgeBookshelf(String selectedAge);

    List<Map<String, Object>> getRanker();

    List<User> rankingBookshelf(String joinedId);

}
