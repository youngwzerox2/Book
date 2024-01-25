package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Recommanded;
import com.example.userdao.UserRecommandedDAO;

@Service
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
    
}
