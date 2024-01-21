package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.Liked;
import com.example.userservice.UserLikedServiceImpl;

@RestController
@RequestMapping("liked")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class LikedController {

    @Autowired
    private UserLikedServiceImpl likedService;

    // *** SELECT ***********************************************************
    // 좋아요 많은 순으로 출력
    @GetMapping("/selectByLiked")
    public List<Liked> selectByLiked() {
		try {
			System.out.println("[LikedController/selectByLiked] 요청");
			List<Liked> result = likedService.selectByLiked();
			System.out.println("[LikedController/selectByLiked] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

    // 한 명의 사용자가 등록한 사용자 좋아요 출력
	@GetMapping("/selectByUserUser")
	public List<Liked> selectByUserUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[LikedController/selectByUserUser] 요청");
			List<Liked> result = likedService.selectByUserUser(memberId);
			System.out.println("[LikedController/selectByUserUser] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

    // 한 명의 사용자가 등록한 도서 좋아요 출력
	@GetMapping("/selectByUserBook")
	public List<Liked> selectByUserBook(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[LikedController/selectByUserBook] 요청");
			List<Liked> result = likedService.selectByUserBook(memberId);
			System.out.println("[LikedController/selectByUserBook] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

    // 한 명의 사용자가 등록한 게시글 좋아요 출력
	@GetMapping("/selectByUserBoard")
	public List<Liked> selectByUserBoard(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[LikedController/selectByUserBoard] 요청");
			List<Liked> result = likedService.selectByUserBoard(memberId);
			System.out.println("[LikedController/selectByUserBoard] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

    // 한 명의 사용자가 등록한 댓글 좋아요 출력
	@GetMapping("/selectByUserComment")
	public List<Liked> selectByUserComment(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[LikedController/selectByUserComment] 요청");
			List<Liked> result = likedService.selectByUserComment(memberId);
			System.out.println("[LikedController/selectByUserComment] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

    // *** INSERT ***********************************************************
	// 좋아요 등록
	@PostMapping("/write")
	public Integer write(@RequestParam(name = "likes") Liked dto) {
		try {
			System.out.println("[LikedController/write] 요청");
			Integer result = likedService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

    // *** DELETE ***********************************************************
	// 게시글 삭제
	@GetMapping("/delete")
	public Integer delete(@RequestParam(name = "likedNum") String likedNum) {
		try {
			System.out.println("[LikedController/delete] 요청");
			Integer result = likedService.delete(likedNum);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
    
}
