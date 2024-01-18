package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Ask;
import com.example.userdao.AskDAO;

@Service
public class AskServiceImpl implements AskService {

    @Autowired
    private AskDAO askDAO;

    @Override
    public List<Ask> selectByUser(String memberId) {
        return askDAO.selectByUser(memberId);
    }

    @Override
    public Ask selectByNum(String askId) {
        return askDAO.selectByNum(askId);
    }

    @Override
    public Integer write(Ask dto) {
        return askDAO.write(dto);
    }

    @Override
    public Integer update(Ask dto) {
        return askDAO.update(dto);
    }

    @Override
    public Integer delete(String askId) {
        return askDAO.delete(askId);
    }
    
}
