package com.example.userservice;

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
    public Integer getChatNum() {
        return chatLogDAO.getChatNum();
    }

    @Override
    public String getMemberId() {
        return chatLogDAO.getMemberId();
    }

}
