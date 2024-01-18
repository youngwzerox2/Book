package com.example.service;

import java.util.List;

import com.example.domain.RecordDTO;

public interface RecordService {
	
	List<RecordDTO> selectByUser(String memberId);
	
	RecordDTO selectByRecord(RecordDTO dto);
	
	void writeRecord(RecordDTO dto);
	
	void updateRecord(RecordDTO dto);
	
	void deleteRecord(RecordDTO dto);

}
