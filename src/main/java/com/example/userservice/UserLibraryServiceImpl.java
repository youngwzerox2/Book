package com.example.userservice;

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
    public List<User> ageBookshelf(String selectedAge) {
        return libraryDAO.ageBookshelf(selectedAge);
    }

    @Override
    public List<User> rankingBookshelf() {
        return libraryDAO.rankingBookshelf();
    }
    
}
