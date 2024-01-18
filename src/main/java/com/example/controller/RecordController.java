package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.RecordDTO;
import com.example.userservice.RecordServiceImpl;

@RestController
@RequestMapping("record")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class RecordController {

	@Autowired
	private RecordServiceImpl recordService;
	
	// *** SELECT ***********************************************************
	// 한 명의 사용자가 작성한 모든 독서 기록 출력
	@GetMapping("/selectByUser")
	public List<RecordDTO> selectByUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[RecordController/selectByUser] 요청");
			List<RecordDTO> result = recordService.selectByUser(memberId);
			System.out.println("[RecordController/selectByUser] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// 특정 기록 내용 출력
	@GetMapping("/selectByNum")
	public RecordDTO selectByNum(@RequestParam(name = "recordBookNum") String recordBookNum) {
		try {
			System.out.println("[RecordController/selectByNum] 요청");
			RecordDTO result = recordService.selectByNum(recordBookNum);
			System.out.println("[RecordController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 사용자의 독서기록 입력
	@PostMapping("/write")
	public Integer write(@RequestParam(name = "records") RecordDTO dto) {
		try {
			System.out.println("[RecordController/write] 요청");
			Integer result = recordService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** UPDATE ***********************************************************
	// 사용자의 독서기록 수정
	@PostMapping("/update")
	public Integer update(@RequestParam(name = "records") RecordDTO dto) {
		try{
			System.out.println("[RecordController/update] 요청");
			Integer result = recordService.update(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** DELETE ***********************************************************
	// 사용자의 독서기록 삭제
	@GetMapping("/delete")
	public Integer delete(@RequestParam(name = "recordBookNum") String recordBookNum) {
		try {
			System.out.println("[RecordController/delete] 요청");
			Integer result = recordService.delete(recordBookNum);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
		
}