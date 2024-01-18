package com.example.userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.ChatLog;
import com.example.userdao.ChatLogDAO;

@Service
public class ChatLogServiceImpl implements ChatLogService{

    @Autowired
    private ChatLogDAO chatLogDAO;

    @Override
    public Integer write(ChatLog dto) {
        return chatLogDAO.write(dto);
    }

}
