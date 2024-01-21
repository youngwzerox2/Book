package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Complain;

@Mapper
public interface ComplainDAO {
    
    // *************************커뮤니티***************************
    // 커뮤니티 신고 전체리스트
    public List<Complain> complainList();

    // 커뮤니티 상세정보
    public Complain complainDetail(Complain vo);

    // 커뮤니티 정보수정
    public void updateComplain(Complain vo); 
}
