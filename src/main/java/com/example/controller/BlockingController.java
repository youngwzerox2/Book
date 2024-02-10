package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.Blocking;
import com.example.userservice.UserBlockingServiceImpl;

@RestController
@RequestMapping("blocking")
// @CrossOrigin(origins = "http://118.217.203.37:3000")
@CrossOrigin(origins = "http://114.207.167.82:3000")
public class BlockingController {

    @Autowired
    private UserBlockingServiceImpl blockingService;

    // *** SELECT ***********************************************************
	// 한 명의 사용자가 등록한 모든 신고 내역 출력
	@GetMapping("/selectByUser")
	public List<Blocking> selectByUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[BlockingController/selectByUser] 요청");
			List<Blocking> result = blockingService.selectByUser(memberId);
			System.out.println("[BlockingController/selectByUser] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// 특정 신고 내역 출력
	@GetMapping("/selectByNum")
	public Blocking selectByNum(@RequestParam(name = "blockedNumber") String blockedNumber) {
		try {
			System.out.println("[BlockingController/selectByNum] 요청");
			Blocking result = blockingService.selectByNum(blockedNumber);
			System.out.println("[BlockingController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 사용자의 신고 내역 추가
	@PostMapping("/write")
	public Integer write(Blocking dto) {
		try {
			System.out.println("[BlockingController/write] 요청");
			Integer result = blockingService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** UPDATE ***********************************************************
	// 사용자의 신고 내역 수정
	@PostMapping("/update")
	public Integer update(Blocking dto) {
		try{
			System.out.println("[BlockingController/update] 요청");
			Integer result = blockingService.update(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** DELETE ***********************************************************
	// 사용자의 신고 내역 삭제
	@PostMapping("/delete")
	public Integer delete(@RequestParam(name = "blockedNumber") String blockedNumber) {
		try {
			System.out.println("[BlockingController/delete] 요청");
			Integer result = blockingService.delete(blockedNumber);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
