package com.example.userservice;

import java.util.List;

import com.example.domain.Merchant;

public interface UserMerchantService {

    List<Merchant> selectByUser(String memberId);
    
    Integer writeMonth(Merchant dto);

    Integer writeYear(Merchant dto);

    Integer writeForever(Merchant dto);

}
