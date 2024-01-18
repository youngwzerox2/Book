package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Recommanding;
import com.example.userdao.RecommandingDAO;

@Service
public class RecommandingServiceImpl implements RecommandingService {

    @Autowired
    private RecommandingDAO recommandingDAO;

    @Override
    public List<Recommanding> selectByUser(String memberId) {
        return recommandingDAO.selectByUser(memberId);
    }

    @Override
    public Recommanding selectByNum(String recommandingId) {
        return recommandingDAO.selectByNum(recommandingId);
    }

    @Override
    public Integer write(Recommanding dto) {
        return recommandingDAO.write(dto);
    }

    @Override
    public Integer update(Recommanding dto) {
        return recommandingDAO.update(dto);
    }

    @Override
    public Integer delete(String recommandingId) {
        return recommandingDAO.delete(recommandingId);
    }
    
}
