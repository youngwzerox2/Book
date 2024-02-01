package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.Recommanding;
import com.example.userservice.UserRecommandingServiceImpl;

@RestController
@RequestMapping("recommanding")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class RecommandingController {

    @Autowired
    private UserRecommandingServiceImpl recommandingService;

    // *** SELECT ***********************************************************
    // 한 명의 사용자가 작성한 모든 추천 기록 출력
    @GetMapping("/selectByUser")
	public List<Recommanding> selectByUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[RecommandingController/selectByUser] 요청" + memberId);
			List<Recommanding> result = recommandingService.selectByUser(memberId);
			System.out.println("[RecommandingController/selectByUser] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

    // 특정 기록 내용 출력
	@GetMapping("/selectByNum")
	public Recommanding selectByNum(@RequestParam(name = "recommandingId") String recommandingId) {
		try {
			System.out.println("[RecommandingController/selectByNum] 요청");
			Recommanding result = recommandingService.selectByNum(recommandingId);
			System.out.println("[RecommandingController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 사용자의 추천 기록 입력
	@PostMapping("/write")
	public Integer write(Recommanding dto) {
		try {
			System.out.println("[RecommandingController/write] 요청");
			Integer result = recommandingService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** UPDATE ***********************************************************
	// 사용자의 추천 기록 수정
	@PostMapping("/update")
	public Integer update(Recommanding dto) {
		try{
			System.out.println("[RecommandingController/update] 요청");
			Integer result = recommandingService.update(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** DELETE ***********************************************************
	// 사용자의 추천 기록 삭제
	@GetMapping("/delete")
	public Integer delete(@RequestParam(name = "recommandingId") String recommandingId) {
		try {
			System.out.println("[RecommandingController/delete] 요청");
			Integer result = recommandingService.delete(recommandingId);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
