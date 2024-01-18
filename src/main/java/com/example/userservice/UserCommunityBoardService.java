package com.example.userservice;

import java.util.List;

import com.example.domain.CommunityBoard;

public interface UserCommunityBoardService {
    
    List<CommunityBoard> selectAll();

    List<CommunityBoard> selectByUser(String memberId);
	
	CommunityBoard selectByNum(String communityBoardId);
	
	Integer write(CommunityBoard dto);
	
	Integer update(CommunityBoard dto);
	
	Integer delete(String communityBoardId);

}
