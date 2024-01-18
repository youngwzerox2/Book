package com.example.userservice;

import java.util.List;

import com.example.domain.RecordDTO;

public interface UserRecordService {
	
	List<RecordDTO> selectByUser(String memberId);
	
	RecordDTO selectByNum(String recordBookNum);
	
	Integer write(RecordDTO dto);
	
	Integer update(RecordDTO dto);
	
	Integer delete(String recordBookNum);

}
