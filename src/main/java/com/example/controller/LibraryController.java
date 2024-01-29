package com.example.controller;
import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.domain.KakaoLibrary;
import com.example.domain.User;
import com.example.service.KakaoLibraryService;
import com.example.userservice.UserLibraryServiceImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

// @RestController
@Controller
@RequestMapping("library")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class LibraryController {

    @Autowired
    private UserLibraryServiceImpl libraryService;

    @Autowired
    private KakaoLibraryService kakaoLibraryService;

    // 회원 도서관
    @GetMapping("/memberlibrary")
    public void memberlibrary(@RequestParam(name = "isbn13")String Inputisbn13, Model m) {
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
        // String isbn13 = "9788952870582"; 
        String isbn13 = Inputisbn13; 
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
        // return "memberlibrary";
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

    // *** SELECT ***********************************************************
    // 사용자 맞춤 사용자 추천 책장
    @ResponseBody
    @PostMapping("/recommendBookshelf")
    public List<User> recommend(@RequestParam(name = "memberId") String memberId) {
        try{
            System.out.println("[LibraryController/recommendBookshelf] 요청");

            // .py 파일 실행
			String pythonFile = "src\\main\\resources\\static\\python\\client_user_recommend.py";
			ProcessBuilder pb = new ProcessBuilder("python.exe", pythonFile, memberId);
			pb.directory(new File(System.getProperty("user.dir")));
			Process process = pb.start();

            // 프로세스 종료 대기
            int exitCode = process.waitFor();
            System.out.println("Exit Code: " + exitCode);

			// .py 출력 읽어오기
			InputStream inputStream = process.getInputStream();
			InputStream errorStream = process.getErrorStream();
			BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
			BufferedReader error = new BufferedReader(new InputStreamReader(errorStream));
			String line; // 읽어온 각 줄의 내용을 담을 변수
			String errorLine;
			// StringBuilder sb = new StringBuilder();

            List<String> recommendIdList = new ArrayList<String>();
            // List<String> recommendList = new ArrayList<String>();
            // HashMap<String, String> recommendMap = new HashMap<String, String>();

			// 정상 출력
			while ((line = reader.readLine()) != null) {
				// sb.append(line);
                recommendIdList.add("'" + line + "'");
                // recommendMap.put(line, line);
			}

			// 에러 출력
			while ((errorLine = error.readLine()) != null) {
				System.err.println("[Error] > " + errorLine);
			}

			reader.close();
			error.close();

            String joinedId = String.join(", ", recommendIdList);
            System.out.println("[UserRecommend] > " + joinedId);
            List<User> recommendList = libraryService.recommendBookshelf(joinedId);

			// String output = sb.toString();
			// System.out.println(output);
			// System.out.println("[UserRecommend] > " + recommendList);

            return recommendList;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // 연령대별 책장 (로그인한 사용자와 비슷한 연령대인 사용자 랜덤 추출)
    @PostMapping("/ageBookshelf")
    @ResponseBody
    public List<User> ageBookshelf(@RequestParam(name = "memberId") String memberId) {
        System.out.println("[LibraryController/ageBookshelf] 요청");
        List<User> result = libraryService.ageBookshelf(memberId);
        System.out.println("[LibraryController/ageBookshelf] " + result);
        return result;
    }

    // 연령대별 책장 (10대 이하 / 20대 / 30대 / 40대 / 50대 / 60대 이상)
    @GetMapping("/chooseAgeBookshelf")
    @ResponseBody
    public List<User> chooseAgeBookshelf(@RequestParam(name = "selectedAge") String selectedAge) {
        System.out.println("[LibraryController/chooseAgeBookshelf] 요청");
        List<User> result = libraryService.chooseAgeBookshelf(selectedAge);
        System.out.println("[LibraryController/chooseAgeBookshelf] " + result);
        return result;
    }

    // 랭킹순 책장
    @GetMapping("/rankingBookshelf")
    @ResponseBody
    public List<User> rankingBookshelf() {
        System.out.println("[LibraryController/rankingBookshelf] 요청");
        List<User> result = libraryService.rankingBookshelf();
        System.out.println("[LibraryController/rankingBookshelf] " + result);
        return result;
    }
}