package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.ChatLog;
import com.example.userdao.UserChatLogDAO;

@Service
public class UserChatLogServiceImpl implements UserChatLogService{

    @Autowired
    private UserChatLogDAO chatLogDAO;

    @Override
    public Integer write(ChatLog dto) {
        return chatLogDAO.write(dto);
    }

    @Override
    public Integer getChatNum(String memberId) {
        return chatLogDAO.getChatNum(memberId);
    }

    @Override
    public Integer logYN(String memberId) {
        return chatLogDAO.logYN(memberId);
    }

    @Override
    public List<String> getSentenceN(String memberId) {
        return chatLogDAO.getSentenceN(memberId);
    }

    @Override
    public List<String> getSentenceY(String memberId) {
        return chatLogDAO.getSentenceY(memberId);
    }

    @Override
    public void terminateY(String memberId) {
        chatLogDAO.terminateY(memberId);
    }

}
