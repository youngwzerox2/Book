package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Ask;

@Mapper
public interface AskDAO {

    // ************************* 문의 ***************************
    // 문의 전체 리스트
    public List<Ask> askList();

    // 문의 상세정보
    public Ask askDetail(Ask vo);

    // 문의 정보수정
    public void updateAsk(Ask vo);

    // 문의 정보삭제
    public void deleteAsk(Ask vo);

    // 문의 등록
    public void insertAsk(Ask vo);

    // 미완료된 답변이 있는 문의 리스트
    public List<Ask> getUnansweredList();

    // 완료된 답변이 있는 문의 리스트
    public List<Ask> getAnsweredList();

}
