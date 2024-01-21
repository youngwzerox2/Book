package com.example.controller;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("pay")
public class PayController {

    @RequestMapping("/{step}")
    public String viewPage(@PathVariable String step) {
        return "pay/" + step;
    }
    
    // @RequestMapping("kakaopay")
    // @ResponseBody
    // public String kakaopay() {
    //     try {
    //         URL addr = new URL("https://kapi.kakao.com/v1/payment/ready");
    //         HttpURLConnection conn = (HttpURLConnection) addr.openConnection();
    //         conn.setRequestMethod("POST");
    //         conn.setRequestProperty("Authorization", "KakaoAK b0ca15e2b23fb3dddcde8d8adb2fab9c"); // Admin 키
    //         conn.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
    //         conn.setDoOutput(true); // 서버에 전해줄 게 있는지 없는지(input은 자동으로 true)
    //         String param = "cid=TC0ONETIME"
    //         + "&partner_order_id=partner_order_id"
    //         + "&partner_user_id=partner_user_id"
    //         + "&item_name=초코파이&quantity=1"
    //         + "&total_amount=2200"
    //         + "&vat_amount=200"
    //         + "&tax_free_amount=0"
    //         + "&approval_url=https://developers.kakao.com/success"
    //         + "&fail_url=https://developers.kakao.com/fail"
    //         + "&cancel_url=https://developers.kakao.com/cancel";
    //         OutputStream output = conn.getOutputStream();
    //         DataOutputStream dataOutput = new DataOutputStream(output);
    //         dataOutput.writeBytes(param); // 알아서 형변환해서 사용
    //         // dataOutput.flush(); // 가지고 있는 걸 비움; close()하면 알아서 호출됨
    //         dataOutput.close();

    //         Integer result = conn.getResponseCode();

    //         InputStream input;
    //         if(result == 200) {
    //             // 통신 성공
    //             input = conn.getInputStream();
    //         } else {
    //             // 통신 실패
    //             input = conn.getErrorStream();
    //         }
    //         InputStreamReader reader = new InputStreamReader(input);
    //         BufferedReader buff = new BufferedReader(reader);
    //         return buff.readLine();
            
    //     } catch (IOException e) {
    //         e.printStackTrace();
    //     }

    //     return "";
    // }

    @RequestMapping("kakaopay")
@ResponseBody
public String kakaopay() {
    try {
        URL url = new URL("https://kapi.kakao.com/v1/payment/ready");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Authorization", "KakaoAK b0ca15e2b23fb3dddcde8d8adb2fab9c"); // Admin 키
        conn.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        conn.setDoOutput(true);

        // URL 인코딩을 사용하여 파라미터 구성
        String param = "cid=TC0ONETIME"                     // 가맹점 코드
                    + "&partner_order_id=partner_order_id"  // 가맹점 주문번호
                    + "&partner_user_id=partner_user_id"    // 가맹점 회원 id
                    + "&item_name=초코파이"                  // 상품명
                    + "&quantity=1"                         // 상품 수량
                    + "&total_amount=5000"                  // 총 금액
                    + "&vat_amount=200"                     // 부가세
                    + "&tax_free_amount=0"                  // 상품 비과세 금액
                    + "&approval_url=http://localhost:8080/" // 결제 성공 시
                    + "&fail_url=http://localhost:8080/"     // 결제 실패 시
                    + "&cancel_url=http://localhost:8080/"; // 결제 취소 시

        try (OutputStream output = conn.getOutputStream();
             DataOutputStream dataOutput = new DataOutputStream(output)) {
            dataOutput.writeBytes(param);
        }

        int result = conn.getResponseCode();

        InputStream input;
        if (result == 200) {
            // 통신 성공
            input = conn.getInputStream();
        } else {
            // 통신 실패
            input = conn.getErrorStream();
        }

        InputStreamReader reader = new InputStreamReader(input);
        BufferedReader buff = new BufferedReader(reader);
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = buff.readLine()) != null) {
            response.append(line);
        }

        return response.toString();

    } catch (IOException e) {
        e.printStackTrace();
        return "Error occurred: " + e.getMessage();
    }
}

}
