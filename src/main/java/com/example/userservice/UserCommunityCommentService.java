package com.example.userservice;

import java.util.List;

import com.example.domain.CommunityComment;

public interface UserCommunityCommentService {
    
    List<CommunityComment> selectByUser(String memberId);
	
	CommunityComment selectByNum(String communityCommentId);
	
	Integer write(CommunityComment dto);
	
	Integer update(CommunityComment dto);
	
	Integer delete(String communityCommentId);

}
