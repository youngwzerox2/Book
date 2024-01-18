package com.example.userdao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.RecordDTO;

@Mapper
public interface UserRecordDAO {

	public List<RecordDTO> selectByUser(String memberId);
	
	public RecordDTO selectByNum(String recordBookNum);
	
	public Integer write(RecordDTO dto);
	
	public Integer update(RecordDTO dto);
	
	public Integer delete(String recordBookNum);
}
