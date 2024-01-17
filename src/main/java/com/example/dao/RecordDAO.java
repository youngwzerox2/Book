package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.RecordDTO;

@Mapper
public interface RecordDAO {

	public List<RecordDTO> selectByUser(String memberId);
	
	public RecordDTO selectByRecord(RecordDTO dto);
	
	public void writeRecord(RecordDTO dto);
	
	public void updateRecord(RecordDTO dto);
	
	public void deleteRecord(RecordDTO dto);
}
