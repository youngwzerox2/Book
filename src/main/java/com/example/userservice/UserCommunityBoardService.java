package com.example.userservice;

import java.util.List;

import com.example.domain.CommunityBoard;
import com.example.domain.FileDTO;

public interface UserCommunityBoardService {
    
    List<CommunityBoard> selectAll();

    List<CommunityBoard> selectByUser(String memberId);
	
	CommunityBoard selectByNum(String communityBoardId);

	void writeFile(FileDTO fdto);

	Integer getFileNum();
	
	Integer write(CommunityBoard dto);
	
	Integer update(CommunityBoard dto);
	
	Integer delete(String communityBoardId);

}
