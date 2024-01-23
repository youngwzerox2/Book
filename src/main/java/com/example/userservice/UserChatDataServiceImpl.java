package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.ChatData;
import com.example.userdao.UserChatDataDAO;

@Service
public class UserChatDataServiceImpl implements UserChatDataService {
    
    @Autowired
    private UserChatDataDAO chatDataDAO;

    @Override
    public List<ChatData> selectByUser(String memberId) {
        return chatDataDAO.selectByUser(memberId);
    }

    @Override
    public ChatData selectByNum(String chatNumber) {
        return chatDataDAO.selectByNum(chatNumber);
    }

    @Override
    public Integer write(ChatData dto) {
        return chatDataDAO.write(dto);
    }
    
}
