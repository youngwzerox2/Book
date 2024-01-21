package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Liked;

@Mapper
public interface UserLikedDAO {
    
    List<Liked> selectByLiked();

    List<Liked> selectByUserUser(String memberId);

    List<Liked> selectByUserBook(String memberId);

    List<Liked> selectByUserBoard(String memberId);

    List<Liked> selectByUserComment(String memberId);
    
	Integer write(Liked dto);
	
	Integer delete(String likedNum);
    
}
