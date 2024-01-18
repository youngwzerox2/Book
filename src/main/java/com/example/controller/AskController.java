package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.Ask;
import com.example.userservice.UserAskServiceImpl;

@RestController
@RequestMapping("ask")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class AskController {

    @Autowired
    private UserAskServiceImpl askService;

    // *** SELECT ***********************************************************
	// 한 명의 사용자가 작성한 모든 독서 기록 출력
	@GetMapping("/selectByUser")
	public List<Ask> selectByUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[AskController/selectByUser] 요청");
			List<Ask> result = askService.selectByUser(memberId);
			System.out.println("[AskController/selectByUser] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// 특정 기록 내용 출력
	@GetMapping("/selectByNum")
	public Ask selectByNum(@RequestParam(name = "askId") String askId) {
		try {
			System.out.println("[AskController/selectByNum] 요청");
			Ask result = askService.selectByNum(askId);
			System.out.println("[AskController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 사용자의 독서기록 입력
	@PostMapping("/write")
	public Integer write(@RequestParam(name = "asks") Ask dto) {
		try {
			System.out.println("[AskController/write] 요청");
			Integer result = askService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** UPDATE ***********************************************************
	// 사용자의 독서기록 수정
	@PostMapping("/update")
	public Integer update(@RequestParam(name = "asks") Ask dto) {
		try{
			System.out.println("[AskController/update] 요청");
			Integer result = askService.update(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** DELETE ***********************************************************
	// 사용자의 독서기록 삭제
	@GetMapping("/delete")
	public Integer delete(@RequestParam(name = "askId") String askId) {
		try {
			System.out.println("[AskController/delete] 요청");
			Integer result = askService.delete(askId);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
