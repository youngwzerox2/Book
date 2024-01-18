package com.example.userservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.RecordDTO;
import com.example.userdao.RecordDAO;

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
	public RecordDTO selectByNum(String recordBookNum) {
		return recordDAO.selectByNum(recordBookNum);
	}

	// *** INSERT ***********************************************************
	// 사용자의 독서기록 입력
	@Override
	public Integer write(RecordDTO dto) {
		return recordDAO.write(dto);
	}

	// *** UPDATE ***********************************************************
	// 사용자의 독서기록 수정
	@Override
	public Integer update(RecordDTO dto) {
		return recordDAO.update(dto);
	}

	// *** DELETE ***********************************************************
	// 사용자의 독서기록 삭제
	@Override
	public Integer delete(String recordBookNum) {
		return recordDAO.delete(recordBookNum);
	}
	
}
