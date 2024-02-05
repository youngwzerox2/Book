package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.CommunityComment;
import com.example.userservice.UserCommunityCommentServiceImpl;

@RestController
@RequestMapping("communityComment")
// @CrossOrigin(origins = "http://118.217.203.37:3000")
@CrossOrigin(origins = "http://114.207.167.82:3000")
public class CommunityCommentController {

    @Autowired
    private UserCommunityCommentServiceImpl communityCommentService;

    // *** SELECT ***********************************************************
	// 한 명의 사용자가 작성한 모든 댓글 출력
	@GetMapping("/selectByUser")
	public List<CommunityComment> selectByUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[CommunityCommentController/selectByUser] 요청");
			List<CommunityComment> result = communityCommentService.selectByUser(memberId);
			System.out.println("[CommunityCommentController/selectByUser] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// 특정 게시글의 댓글 출력
	@GetMapping("/selectByNum")
	public CommunityComment selectByNum(@RequestParam(name = "communityBoardId") String communityBoardId) {
		try {
			System.out.println("[CommunityCommentController/selectByNum] 요청");
			CommunityComment result = communityCommentService.selectByNum(communityBoardId);
			System.out.println("[CommunityCommentController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 댓글 입력
	@PostMapping("/write")
	public Integer write(CommunityComment dto) {
		try {
			System.out.println("[CommunityCommentController/write] 요청");
			Integer result = communityCommentService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** UPDATE ***********************************************************
	// 댓글 수정
	@PostMapping("/update")
	public Integer update(CommunityComment dto) {
		try{
			System.out.println("[CommunityCommentController/update] 요청");
			Integer result = communityCommentService.update(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** DELETE ***********************************************************
	// 댓글 삭제
	@GetMapping("/delete")
	public Integer delete(@RequestParam(name = "communityCommentId") String communityCommentId) {
		try {
			System.out.println("[RecordController/delete] 요청");
			Integer result = communityCommentService.delete(communityCommentId);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
