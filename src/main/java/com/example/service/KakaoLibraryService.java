package com.example.service;

import java.util.List;

import com.example.domain.KakaoLibrary;

public interface KakaoLibraryService {

    // 도서관 위치 부르기
    List<KakaoLibrary> getAllLocations();
}
