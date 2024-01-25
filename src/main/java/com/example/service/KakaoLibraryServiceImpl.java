package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.KakaoLibraryDAO;
import com.example.domain.KakaoLibrary;

@Service
public class KakaoLibraryServiceImpl implements KakaoLibraryService{
    
    @Autowired
    private KakaoLibraryDAO kakaoLibraryDAO;

    // ************************* 도서관 ***************************
    // 도서관 위치 부르기
    @Override
    public List<KakaoLibrary> getAllLocations() {
        return kakaoLibraryDAO.getAllLocations();
    }
}
