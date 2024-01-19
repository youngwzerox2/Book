package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.RecordDAO;
import com.example.domain.RecordDTO;

@Service
public class RecordServiceImpl implements RecordService{

    @Autowired
    private RecordDAO recordDAO;
    // ************************* 독서기록 ***************************
    // 독서기록 리스트
    @Override
    public List<RecordDTO> recordList() {
        return recordDAO.recordList();
    }

    // 독서기록 상세정보
    @Override
    public RecordDTO recordDetail(RecordDTO vo) {
        return recordDAO.recordDetail(vo);
    }

    // 독서기록 정보수정
    @Override
    public void updateRecord(RecordDTO vo) {
       recordDAO.updateRecord(vo);
    }

    // 독서기록 삭제
    @Override
    public void deleteRecord(RecordDTO vo) {
       recordDAO.deleteRecord(vo);
    }
    
}
