package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.RecordDAO;
import com.example.domain.RecordDTO;

@Service
public class RecordServiceImpl implements RecordService {

	@Autowired
	private RecordDAO recordDAO;

	// *** SELECT ***********************************************************
	// 한 명의 사용자가 작성한 모든 독서 기록 출력
	@Override
	public List<RecordDTO> selectByUser(String memberId) {
		return recordDAO.selectByUser(memberId);
	}

	// 특정 기록 내용 출력
	@Override
	public RecordDTO selectByRecord(RecordDTO dto) {
		return recordDAO.selectByRecord(dto);
	}

	// *** INSERT ***********************************************************
	// 사용자의 독서기록 입력
	@Override
	public void writeRecord(RecordDTO dto) {
		recordDAO.writeRecord(dto);
	}

	// *** UPDATE ***********************************************************
	// 사용자의 독서기록 수정
	@Override
	public void updateRecord(RecordDTO dto) {
		recordDAO.updateRecord(dto);
	}

	// *** DELETE ***********************************************************
	// 사용자의 독서기록 삭제
	@Override
	public void deleteRecord(RecordDTO dto) {
		recordDAO.deleteRecord(dto);
	}
	
}
