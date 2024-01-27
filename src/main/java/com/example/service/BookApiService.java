// package com.example.service;

// import java.io.BufferedReader;
// import java.io.InputStreamReader;
// import java.net.HttpURLConnection;
// import java.net.URL;
// import java.net.URLEncoder;

// public class BookApiService {
//     public static void main(String[] args) {
//         try {
//             // API 엔드포인트
//             String apiEndpoint = "https://data4library.kr/api/bookExist";

//             // API 키
//             String authKey = "9ea76f31c20ce4c02d3eeb25892c0bd248634fd7a525883db2c87e65125d07d5";

//             // 도서관 코드 (동적으로 바뀌는 값)
//             String libCode = "050001";  // 여기에 동적으로 변경되는 값 적용

//             // ISBN13 (고정 값)
//             String isbn13 = "8809105873012";

//             // URL 조합
//             String apiUrl = String.format("%s?authKey=%s&libCode=%s&isbn13=%s",
//                     apiEndpoint, authKey, URLEncoder.encode(libCode, "UTF-8"), isbn13);

//             // HTTP 연결 설정
//             URL url = new URL(apiUrl);
//             HttpURLConnection connection = (HttpURLConnection) url.openConnection();
//             connection.setRequestMethod("GET");

//             // 응답 코드 확인
//             int responseCode = connection.getResponseCode();
//             System.out.println("Response Code: " + responseCode);

//             // 응답 내용 읽기
//             BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
//             StringBuilder response = new StringBuilder();
//             String line;
//             while ((line = reader.readLine()) != null) {
//                 response.append(line);
//             }
//             reader.close();

//             // 응답 내용 출력
//             System.out.println("Response Content: " + response.toString());

//             // 연결 종료
//             connection.disconnect();
//         } catch (Exception e) {
//             e.printStackTrace();
//         }
//     }
// }
