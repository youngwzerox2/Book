package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.CommunityComment;

@Mapper
public interface UserCommunityCommentDAO {
    
    List<CommunityComment> selectByUser(String memberId);
	
	CommunityComment selectByNum(String communityCommentId);
	
	Integer write(CommunityComment dto);
	
	Integer update(CommunityComment dto);
	
	Integer delete(String communityCommentId);

}
