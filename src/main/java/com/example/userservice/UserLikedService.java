package com.example.userservice;

import java.util.List;

import com.example.domain.Liked;

public interface UserLikedService {
    
    List<Liked> selectByLiked();

    List<Liked> selectByUserUser(String memberId);

    List<Liked> selectByUserBook(String memberId);

    List<Liked> selectByUserBoard(String memberId);

    List<Liked> selectByUserComment(String memberId);
    
	Integer write(Liked dto);
	
	Integer delete(String likedNum);

}
