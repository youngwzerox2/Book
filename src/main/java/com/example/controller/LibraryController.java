package com.example.controller;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import com.example.domain.KakaoLibrary;
import com.example.service.KakaoLibraryService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("library")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class LibraryController {

    @Autowired
    private KakaoLibraryService kakaoLibraryService;

    // 회원 도서관
    @RequestMapping("/memberlibrary")
    public String memberlibrary(@RequestParam(name = "isbn13" ) String inputIsbn13, Model m) {
        List<KakaoLibrary> libraryLocations = kakaoLibraryService.getAllLocations();
        // 모델에 JSON 형식으로 데이터 추가
        ObjectMapper objectMapper = new ObjectMapper();
        String libraryLocationsJson;
        try {
            libraryLocationsJson = objectMapper.writeValueAsString(libraryLocations);
            // System.out.println(libraryLocationsJson);
        } catch (JsonProcessingException e) {
            // 예외 처리
            e.printStackTrace();
            libraryLocationsJson = "[]"; // 기본적으로 빈 배열로 설정
        }
        m.addAttribute("libraryLocations", libraryLocationsJson);
        // 각 libraryNum에 대한 외부 API 호출 및 응답 받기
        List<String> apiResponses = new ArrayList<>();
        String apiUrl = "https://data4library.kr/api/bookExist";
        String authKey = "9ea76f31c20ce4c02d3eeb25892c0bd248634fd7a525883db2c87e65125d07d5";
        String isbn13 = inputIsbn13; 
        for (KakaoLibrary library : libraryLocations) {
            String libCode = library.getLibraryNum(); // 또는 다른 방식으로 libraryNum을 가져와야 할 수 있음
            String apiResponse = callExternalApi(apiUrl, authKey, libCode, isbn13);
            apiResponses.add(apiResponse);
             // 콘솔에 API 응답 출력
            System.out.println("API 응답 for library " + libCode + ": " + apiResponse);
        }
        m.addAttribute("apiresponses", apiResponses);
        // System.out.println("apiResponses@@@@:"+ apiResponses);
        System.out.println("memberlibrary.jsp 호출");
        return "http://114.207.167.88:8080/memberlibrary";
    }
    private String callExternalApi(String apiUrl, String authKey, String libCode, String isbn13) {
        // WebClient를 사용해서 외부 API 호출
        WebClient webClient = WebClient.create();
        // API 호스트 정보 추가
        URI uri = UriComponentsBuilder.fromHttpUrl(apiUrl)
                .queryParam("authKey", authKey)
                .queryParam("libCode", libCode)
                .queryParam("isbn13", isbn13)
                .build()
                .toUri();
        // API 호출 및 응답 받기
        String apiResponse = webClient.get()
                .uri(uri)
                .retrieve()
                .bodyToMono(String.class)
                .block();
        return apiResponse;
    }
}