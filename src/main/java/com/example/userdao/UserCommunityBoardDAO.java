package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.CommunityBoard;

@Mapper
public interface UserCommunityBoardDAO {

    List<CommunityBoard> selectAll();

    List<CommunityBoard> selectByUser(String memberId);
	
	CommunityBoard selectByNum(String communityBoardId);
	
	Integer write(CommunityBoard dto);
	
	Integer update(CommunityBoard dto);
	
	Integer delete(String communityBoardId);

}
