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
import com.example.domain.Complain;
import com.example.domain.Notice;
import com.example.userservice.UserAskServiceImpl;
import com.example.userservice.UserComplainServiceImpl;
import com.example.userservice.UserNoticeServiceImpl;

@RestController
@RequestMapping("cs")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class CsController {

    @Autowired
    private UserAskServiceImpl askService;

	@Autowired
    private UserNoticeServiceImpl noticeService;

	@Autowired
	private UserComplainServiceImpl complainService;

	// --- Ask /문의 ---------------------------------------------------------------
    // *** SELECT ***********************************************************
	// 한 명의 사용자가 작성한 모든 문의 내역 출력
	@GetMapping("/selectByUser")
	public List<Ask> selectByUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[CsController/selectByUser] 요청");
			List<Ask> result = askService.selectByUser(memberId);
			System.out.println("[CsController/selectByUser] " + result);
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
			System.out.println("[CsController/selectByNum] 요청");
			Ask result = askService.selectByNum(askId);
			System.out.println("[CsController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// *** INSERT ***********************************************************
	// 사용자의 문의 입력
	@PostMapping("/write")
	public Integer write(Ask dto) {
		try {
			System.out.println("[CsController/write] 요청");
			System.out.println("[CsController/write] > " + dto);
			Integer result = askService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** UPDATE ***********************************************************
	// 사용자의 문의 수정
	@PostMapping("/update")
	public Integer update(Ask dto) {
		try{
			System.out.println("[CsController/update] 요청");
			Integer result = askService.update(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** DELETE ***********************************************************
	// 사용자의 문의 삭제
	@GetMapping("/delete")
	public Integer delete(@RequestParam(name = "askId") String askId) {
		try {
			System.out.println("[CsController/delete] 요청");
			Integer result = askService.delete(askId);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// --- Notice / 공지사항 ---------------------------------------------------------------
	// *** SELECT ***********************************************************
	// 공지사항 출력
    @GetMapping("/selectNotice")
    public List<Notice> selectNotice() {
		try {
			System.out.println("[CsController/selectNotice] 요청");
			List<Notice> result = noticeService.selectNotice();
			System.out.println("[CsController/selectNotice] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

    // 자주 묻는 질문 출력
    @GetMapping("/selectFAQ")
    public List<Notice> selectFAQ() {
		try {
			System.out.println("[CsController/selectFAQ] 요청");
			List<Notice> result = noticeService.selectFAQ();
			System.out.println("[CsController/selectFAQ] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// 앱 정보 출력
	@GetMapping("/selectInfo")
	public List<Notice> selectInfo() {
		try {
			System.out.println("[CsController/selectInfo] 요청");
			List<Notice> result = noticeService.selectInfo();
			System.out.println("[CsController/selectInfo] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// --- Complain / 신고 ---------------------------------------------------------------
	// *** SELECT ***********************************************************
	// 특정 사용자의 신고 내역 출력
	@GetMapping("/selectComplain")
	public List<Complain> selectComplain(@RequestParam(name = "memberId")String memberId) {
		try {
			System.out.println("[CsController/selectComplain] 요청");
			List<Complain> result = complainService.selectComplain(memberId);
			System.out.println("[CsController/selectComplain] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
