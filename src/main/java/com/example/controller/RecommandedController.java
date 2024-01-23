package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.Recommanded;
import com.example.userservice.UserRecommandedServiceImpl;

@RestController
@RequestMapping("recommanded")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class RecommandedController {

    @Autowired
    private UserRecommandedServiceImpl recommandedService;

    // *** SELECT ***********************************************************
    // 한 명의 사용자가 받은 모든 추천 기록 출력
    @GetMapping("/selectByUser")
	public List<Recommanded> selectByUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[RecommandedController/selectByUser] 요청");
			List<Recommanded> result = recommandedService.selectByUser(memberId);
			System.out.println("[RecommandedController/selectByUser] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

    // 특정 추천 기록 출력
	@GetMapping("/selectByNum")
	public Recommanded selectByNum(@RequestParam(name = "recommandedId") String recommandedId) {
		try {
			System.out.println("[RecommandedController/selectByNum] 요청");
			Recommanded result = recommandedService.selectByNum(recommandedId);
			System.out.println("[RecommandedController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 사용자의 추천 기록 입력
	@PostMapping("/write")
	public Integer write(Recommanded dto) {
		try {
			System.out.println("[RecommandedController/write] 요청");
			Integer result = recommandedService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** DELETE ***********************************************************
	// 사용자의 추천 기록 삭제
	@GetMapping("/delete")
	public Integer delete(@RequestParam(name = "recommandedId") String recommandedId) {
		try {
			System.out.println("[RecommandedController/delete] 요청");
			Integer result = recommandedService.delete(recommandedId);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
