package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.MerchantDAO;
import com.example.domain.Merchant;

@Service
public class MerchantServiceImpl implements MerchantService {

    @Autowired
    private MerchantDAO merchantDAO;

    // 오늘 총 매출
    @Override
    public List<Merchant> todaySum() {
        return merchantDAO.todaySum();
    }
    
}
