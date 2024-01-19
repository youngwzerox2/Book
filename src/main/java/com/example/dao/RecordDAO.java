package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.RecordDTO;

@Mapper
public interface RecordDAO {

    // ************************* 독서기록 ***************************
    // 독서기록 전체리스트
    public List<RecordDTO> recordList();

    // 독서기록 상세정보
    public RecordDTO recordDetail(RecordDTO vo);

    // 독서기록 정보수정
    public void updateRecord(RecordDTO vo);

    // 독서기록 정보삭제
    public void deleteRecord(RecordDTO vo);
}
