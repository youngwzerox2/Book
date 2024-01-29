package com.example.userservice;

import java.util.List;

import com.example.domain.User;

public interface UserLibraryService {

    List<User> recommendBookshelf(String joinedId);

    List<User> ageBookshelf(String memberId);
        
    List<User> chooseAgeBookshelf(String selectedAge);

    List<User> rankingBookshelf();
}
