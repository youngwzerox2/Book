package com.example.userservice;

import java.util.List;

import com.example.domain.User;

public interface UserLibraryService {
    
    List<User> ageBookshelf(String selectedAge);

    List<User> rankingBookshelf();
}
