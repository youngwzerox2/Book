package com.example.controller;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("pay")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class PayController {

    @RequestMapping("/{step}")
    public String viewPage(@PathVariable String step) {
        return "pay/" + step;
    }
    
    @RequestMapping("kakaopay")
    @ResponseBody
    public String kakaopay( @RequestParam(name = "partner_user_id") String partnerUserId, 
                            @RequestParam(name = "item_name") String itemName) {
        try {
            System.out.println("여기 오긴 함,,,");
            URL addr = new URL("https://kapi.kakao.com/v1/payment/ready");
            HttpURLConnection conn = (HttpURLConnection) addr.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Authorization", "KakaoAK b0ca15e2b23fb3dddcde8d8adb2fab9c"); // Admin 키
            conn.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
            conn.setDoOutput(true); // 서버에 전해줄 게 있는지 없는지(input은 자동으로 true)
            String param = "cid=TC0ONETIME"
            + "&partner_order_id=ReadMe"
            + "&partner_user_id=" + partnerUserId
            + "&item_name=" + itemName
            + "&quantity=1"
            + "&total_amount=5000"
            + "&tax_free_amount=0"
            + "&approval_url=http://118.217.203.37:3000/free/readme/mypage/pay" // 결제 완료 후 이동할 페이지
            + "&fail_url=http://118.217.203.37:3000/free/readme/mypage/pay"     // 결제 실패 시 이동할 페이지
            + "&cancel_url=http://118.217.203.37:3000/free/readme/mypage/pay";  // 결제 취소 시 이동할 페이지

            System.out.println(param);
            OutputStream output = conn.getOutputStream();
            DataOutputStream dataOutput = new DataOutputStream(output);
            dataOutput.writeBytes(param); // 알아서 형변환해서 사용
            // dataOutput.flush(); // 가지고 있는 걸 비움; close()하면 알아서 호출됨
            dataOutput.close();

            Integer result = conn.getResponseCode();

            InputStream input;
            if(result == 200) {
                // 통신 성공
                input = conn.getInputStream();
                System.out.println("성공함");
            } else {
                // 통신 실패
                input = conn.getErrorStream();
            }
            InputStreamReader reader = new InputStreamReader(input);
            BufferedReader buff = new BufferedReader(reader);
            return buff.readLine();
            
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "";
    }

    @ResponseBody
    @GetMapping("kgpay")
    public String order(@RequestParam(name = "customerId") String customerId,
                        @RequestParam(name = "orderName") String orderName) {
        try {
            System.out.println("찐 KG임,,,");
            // 랜덤한 주문번호 생성
            long nano = System.currentTimeMillis();
            String paymentId = "pid-" + nano;

            URL addr = new URL("https://stdpay.inicis.com/stdjs/INIStdPay.js");
            HttpURLConnection conn = (HttpURLConnection) addr.openConnection();
            conn.setRequestMethod("POST");
            // conn.setRequestProperty("Authorization", "KakaoAK b0ca15e2b23fb3dddcde8d8adb2fab9c"); // Admin 키
            conn.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
            conn.setDoOutput(true); // 서버에 전해줄 게 있는지 없는지(input은 자동으로 true)

            String param = 
            "storeId=INIBillTst"
            + "&paymentId=" + paymentId
            + "&orderName=" + orderName
            + "&totalAmount=1"
            + "&currency=WON"
            + "&customerId=cid-" + customerId
            + "&customData=12345"
            + "&confirmUrl=http://118.217.203.37:3000/free/readme/mypage/pay"
            + "&redirectUrl=http://118.217.203.37:3000/free/readme/mypage/pay";

            System.out.println(param);
            OutputStream output = conn.getOutputStream();
            DataOutputStream dataOutput = new DataOutputStream(output);
            dataOutput.writeBytes(param); // 알아서 형변환해서 사용
            // dataOutput.flush(); // 가지고 있는 걸 비움; close()하면 알아서 호출됨
            dataOutput.close();

            Integer result = conn.getResponseCode();

            InputStream input;
            if(result == 200) {
                // 통신 성공
                input = conn.getInputStream();
                System.out.println("성공함");
            } else {
                // 통신 실패
                input = conn.getErrorStream();
            }
            InputStreamReader reader = new InputStreamReader(input);
            BufferedReader buff = new BufferedReader(reader);
            return buff.readLine();
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }

}
