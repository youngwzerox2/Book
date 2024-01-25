package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Merchant;

@Mapper
public interface UserMerchantDAO {

    List<Merchant> selectByUser(String memberId);
    
    Integer writeMonth(Merchant dto);

    Integer writeYear(Merchant dto);

    Integer writeForever(Merchant dto);

}
