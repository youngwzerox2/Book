package com.example.service;

import java.util.List;

import com.example.domain.Merchant;

public interface MerchantService {
    
    // *************************** 매출 ********************************
    // 오늘 총 매출
    List<Merchant> todaySum();
}
