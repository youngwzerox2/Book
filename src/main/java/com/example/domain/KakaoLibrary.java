package com.example.domain;

import lombok.Data;

@Data
public class KakaoLibrary {
    
     // ******************************** 도서관 위치 **********************************************
    private Integer region;        // 도서관 지역코드
    private String  libraryName;   // 도서관 이름
    private String  libraryLa;     // 도서관 위도
    private String  libraryLo;     // 도서관 경도
    private String  libraryNum;    // 도서관 코드

}
