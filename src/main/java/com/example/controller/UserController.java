package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.User;
import com.example.userservice.UserServiceImpl;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    // *** SELECT ***********************************************************
	// 특정 회원 정보 출력
	@GetMapping("/selectByNum")
	public User selectByNum(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[UserController/selectByNum] 요청");
			User result = userService.selectByNum(memberId);
			System.out.println("[UserController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 사용자 정보 입력
	@PostMapping("/write")
	public Integer write(@RequestParam(name = "users") User dto) {
		try {
			System.out.println("[UserController/write] 요청");
			Integer result = userService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** UPDATE ***********************************************************
	// 사용자 정보 수정
	@PostMapping("/update")
	public Integer update(@RequestParam(name = "users") User dto) {
		try{
			System.out.println("[UserController/update] 요청");
			Integer result = userService.update(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
