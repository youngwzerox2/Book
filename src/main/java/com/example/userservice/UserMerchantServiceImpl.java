package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Merchant;
import com.example.userdao.UserMerchantDAO;

@Service
public class UserMerchantServiceImpl implements UserMerchantService {
    
    @Autowired
    UserMerchantDAO merchantDAO;

    @Override
    public List<Merchant> selectByUser(String memberId) {
        return merchantDAO.selectByUser(memberId);
    }

    @Override
    public Integer writeMonth(Merchant dto) {
        return merchantDAO.writeMonth(dto);
    }

    @Override
    public Integer writeYear(Merchant dto) {
        return merchantDAO.writeYear(dto);
    }

    @Override
    public Integer writeForever(Merchant dto) {
        return merchantDAO.writeForever(dto);
    }

}
