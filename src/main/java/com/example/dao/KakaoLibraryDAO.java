package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.KakaoLibrary;

@Mapper
public interface KakaoLibraryDAO {
    
    // ************************* 도서관 위치 ***************************
    // 도서관 위치 얻어오기
    public List<KakaoLibrary> getAllLocations();

    // 도서관 API 호출
    String callLibraryApi(String libCode);
}
