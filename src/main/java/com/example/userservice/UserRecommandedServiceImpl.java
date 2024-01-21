package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.domain.Recommanded;
import com.example.userdao.UserRecommandedDAO;

public class UserRecommandedServiceImpl implements UserRecommandedService {

    @Autowired
    private UserRecommandedDAO recommandedDAO;

    @Override
    public List<Recommanded> selectByUser(String memberId) {
        return recommandedDAO.selectByUser(memberId);
    }

    @Override
    public Recommanded selectByNum(String recommandedId) {
        return recommandedDAO.selectByNum(recommandedId);
    }

    @Override
    public Integer write(Recommanded dto) {
        return recommandedDAO.write(dto);
    }

    @Override
    public Integer delete(String recommandedId) {
        return recommandedDAO.delete(recommandedId);
    }
    
}
