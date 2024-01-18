package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Blocking;
import com.example.userdao.BlockingDAO;

@Service
public class BlockingServiceImpl implements BlockingService {

    @Autowired
    private BlockingDAO blockingDAO;

    @Override
    public List<Blocking> selectByUser(String memberId) {
        return blockingDAO.selectByUser(memberId);
    }

    @Override
    public Blocking selectByNum(String blockedNumber) {
        return blockingDAO.selectByNum(blockedNumber);
    }

    @Override
    public Integer write(Blocking dto) {
        return blockingDAO.write(dto);
    }

    @Override
    public Integer update(Blocking dto) {
        return blockingDAO.update(dto);
    }

    @Override
    public Integer delete(String blockedNumber) {
        return blockingDAO.delete(blockedNumber);
    }
    
}
