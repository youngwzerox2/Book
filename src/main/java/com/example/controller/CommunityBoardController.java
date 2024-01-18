package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.CommunityBoard;
import com.example.userservice.CommunityBoardServiceImpl;

@RestController
@RequestMapping("communityBoard")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class CommunityBoardController {

    @Autowired
    private CommunityBoardServiceImpl communityBoardService;

    // *** SELECT ***********************************************************
    // 모든 게시글 출력
    @GetMapping("/selectAll")
    public List<CommunityBoard> selectAll() {
		try {
			System.out.println("[CommunityBoardController/selectAll] 요청");
			List<CommunityBoard> result = communityBoardService.selectAll();
			System.out.println("[CommunityBoardController/selectAll] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}


	// 한 명의 사용자가 작성한 모든 게시글 출력
	@GetMapping("/selectByUser")
	public List<CommunityBoard> selectByUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[CommunityBoardController/selectByUser] 요청");
			List<CommunityBoard> result = communityBoardService.selectByUser(memberId);
			System.out.println("[CommunityBoardController/selectByUser] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// 특정 게시글 출력
	@GetMapping("/selectByNum")
	public CommunityBoard selectByNum(@RequestParam(name = "communityBoardId") String communityBoardId) {
		try {
			System.out.println("[CommunityBoardController/selectByNum] 요청");
			CommunityBoard result = communityBoardService.selectByNum(communityBoardId);
			System.out.println("[CommunityBoardController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 게시글 입력
	@PostMapping("/write")
	public Integer write(@RequestParam(name = "communityBoards") CommunityBoard dto) {
		try {
			System.out.println("[CommunityBoardController/write] 요청");
			Integer result = communityBoardService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** UPDATE ***********************************************************
	// 게시글 수정
	@PostMapping("/update")
	public Integer update(@RequestParam(name = "communityBoards") CommunityBoard dto) {
		try{
			System.out.println("[CommunityBoardController/update] 요청");
			Integer result = communityBoardService.update(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** DELETE ***********************************************************
	// 게시글 삭제
	@GetMapping("/delete")
	public Integer delete(@RequestParam(name = "communityBoardId") String communityBoardId) {
		try {
			System.out.println("[RecordController/delete] 요청");
			Integer result = communityBoardService.delete(communityBoardId);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
