package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.CommunityBoard;
import com.example.domain.FileDTO;

@Mapper
public interface UserCommunityBoardDAO {

    List<CommunityBoard> selectAll();

    List<CommunityBoard> selectByUser(String memberId);
	
	CommunityBoard selectByNum(String communityBoardId);

	void writeFile(FileDTO fdto);

	Integer getFileNum();
	
	Integer write(CommunityBoard dto);
	
	Integer update(CommunityBoard dto);
	
	Integer delete(String communityBoardId);

}
