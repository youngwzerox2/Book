package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.RecordDTO;
import com.example.service.RecordServiceImpl;

@CrossOrigin(origins = "http://118.217.203.37:3000")
@RestController
@RequestMapping("/record")
public class RecordController {

	@Autowired
	private RecordServiceImpl recordService;
	
	
	// *** SELECT ***********************************************************
	// 한 명의 사용자가 작성한 모든 독서 기록 출력
	// @GetMapping("/selectByUser")
	// public void selectByUser(@RequestParam String memberId, Model m) {
	// 	try {
	// 		System.out.println("[RecordController/selectByUser] 요청");
	// 		List<RecordDTO> result = recordService.selectByUser(memberId);
	// 		System.out.println("[RecordController/selectByUser] " + result);
	// 		m.addAttribute("userRecord", result);
	// 	} catch (Exception ex) {
	// 		ex.printStackTrace();
	// 	}
	// }

	@GetMapping("/selectByUser")
	public ResponseEntity<List<RecordDTO>> selectByUser(@RequestParam String memberId) {
		try {
			System.out.println("[RecordController/selectByUser] 요청");
			List<RecordDTO> result = recordService.selectByUser(memberId);
			System.out.println("[RecordController/selectByUser] " + result);
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception ex) {
			ex.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	// 특정 기록 내용 출력
	@GetMapping("/selectByRecord")
	public void selectByRecord(RecordDTO dto, Model m) {
		System.out.println("[RecordController/selectByRecord] 요청");
		RecordDTO result = recordService.selectByRecord(dto);
		System.out.println("[RecordController/selectByRecord] " + result);
		m.addAttribute("record", result);
	}
	
	// *** INSERT ***********************************************************
	// 사용자의 독서기록 입력
	@PostMapping("/write")
	public void writeRecord(RecordDTO dto) {
		System.out.println("[RecordController/writeRecord] 요청");
		recordService.writeRecord(dto);
	}
	
	// *** UPDATE ***********************************************************
	// 사용자의 독서기록 수정
	@PostMapping("/update")
	public void updateRecord(RecordDTO dto) {
		System.out.println("[RecordController/updateRecord] 요청");
		recordService.updateRecord(dto);
//		return "redirect:여기에요청명입력";
	}
	
	// *** DELETE ***********************************************************
	// 사용자의 독서기록 삭제
	@GetMapping("/delete")
	public void deleteRecord(RecordDTO dto) {
		System.out.println("[RecordController/deleteRecord] 요청");
		recordService.deleteRecord(dto);
//		return "redirect:여기에요청명입력";
	}
		
}