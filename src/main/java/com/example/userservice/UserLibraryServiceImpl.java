package com.example.userservice;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.User;
import com.example.userdao.UserLibraryDAO;

@Service
public class UserLibraryServiceImpl implements UserLibraryService {

    @Autowired
    private UserLibraryDAO libraryDAO;

    @Override
    public List<User> recommendBookshelf(String joinedId) {
        return libraryDAO.recommendBookshelf(joinedId);
    }

    @Override
    public List<User> ageBookshelf(String memberId) {
        return libraryDAO.ageBookshelf(memberId);
    }

    @Override
    public List<User> chooseAgeBookshelf(String selectedAge) {
        return libraryDAO.chooseAgeBookshelf(selectedAge);
    }

    @Override
    public List<User> rankingBookshelf() {
        return libraryDAO.rankingBookshelf();
    }
    
}
