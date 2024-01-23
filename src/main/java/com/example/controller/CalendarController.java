package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.Calendar;
import com.example.userservice.UserCalendarServiceImpl;

@RestController
@RequestMapping("calendar")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class CalendarController {

    @Autowired
    private UserCalendarServiceImpl calendarService;

    // *** SELECT ***********************************************************
	// 한 명의 사용자가 작성한 모든 독서 기록 출력
	@GetMapping("/selectByUser")
	public List<Calendar> selectByUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[CalendarController/selectByUser] 요청");
			List<Calendar> result = calendarService.selectByUser(memberId);
			System.out.println("[CalendarController/selectByUser] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// 특정 기록 내용 출력
	@GetMapping("/selectByNum")
	public Calendar selectByNum(@RequestParam(name = "calendarNum") String calendarNum) {
		try {
			System.out.println("[CalendarController/selectByNum] 요청");
			Calendar result = calendarService.selectByNum(calendarNum);
			System.out.println("[CalendarController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 사용자의 독서기록 입력
	@PostMapping("/write")
	public Integer write(Calendar dto) {
		try {
			System.out.println("[CalendarController/write] 요청");
			Integer result = calendarService.write(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** UPDATE ***********************************************************
	// 사용자의 독서기록 수정
	@PostMapping("/update")
	public Integer update(Calendar dto) {
		try{
			System.out.println("[CalendarController/update] 요청");
			Integer result = calendarService.update(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** DELETE ***********************************************************
	// 사용자의 독서기록 삭제
	@GetMapping("/delete")
	public Integer delete(@RequestParam(name = "calendarNum") String calendarNum) {
		try {
			System.out.println("[CalendarController/delete] 요청");
			Integer result = calendarService.delete(calendarNum);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
