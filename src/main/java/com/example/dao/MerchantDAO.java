package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Merchant;

@Mapper
public interface MerchantDAO {
    
    // ************************* 상품 ****************************
    // 오늘 총 매출
    public List<Merchant> todaySum();
}
