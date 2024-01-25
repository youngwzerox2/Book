package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.Merchant;
import com.example.userservice.UserMerchantServiceImpl;

@RestController
@RequestMapping("merchant")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class MerchantController {

    @Autowired
    UserMerchantServiceImpl merchantService;

    // *** SELECT ***********************************************************
    // 특정 사용자의 결제 내역 출력
    @GetMapping("/selectByUser")
    public List<Merchant> selectByUser(@RequestParam(name = "memberId") String memberId) {
        System.out.println("[MerchantController/selectByUser] 요청");
        List<Merchant> result = merchantService.selectByUser(memberId);
        System.out.println("[MerchantController/selectByUser] " + result);
        return result;
    }

    // *** INSERT ***********************************************************
    // 선택한 구독권에 따라 결제 내역 저장
    @PostMapping("/write")
    public Integer write(Merchant dto) {
        System.out.println("[MerchantController/write] 요청");

        Integer result;

        if(dto.getMerchantType().equals("month")) {
            result = merchantService.writeMonth(dto);
        } else if(dto.getMerchantType().equals("year")) {
            result = merchantService.writeYear(dto);
        } else if(dto.getMerchantType().equals("forever")) {
            result = merchantService.writeForever(dto);
        } else {
            result = null;
        }

        System.out.println("[MerchantController/write] " + result);

        return result;
    }

}
