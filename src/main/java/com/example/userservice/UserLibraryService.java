package com.example.userservice;

import java.util.List;
import java.util.Map;

import com.example.domain.User;

public interface UserLibraryService {

    List<User> recommendBookshelf(String joinedId);

    List<User> ageBookshelf(String memberId);
        
    List<User> chooseAgeBookshelf(String selectedAge);

    List<Map<String, Object>> getRanker();

    List<User> rankingBookshelf(String joinedId);
}
