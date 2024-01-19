package com.example.service;

import java.util.List;

import com.example.domain.RecordDTO;

public interface RecordService {

    // ************************* 독서기록 ***************************
    // 회원 전체리스트
    List<RecordDTO> recordList();

    // 회원상세정보
    RecordDTO recordDetail(RecordDTO vo);

    // 회원정보수정
    void updateRecord(RecordDTO vo);

    // 회원정보삭제
    void deleteRecord(RecordDTO vo);
}
