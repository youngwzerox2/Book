package com.example.controller;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.User;
import com.example.userservice.UserUserServiceImpl;

import jakarta.mail.internet.MimeMessage;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class UserController {

    @Autowired
    private UserUserServiceImpl userService;

	@Autowired
	private JavaMailSender javaMailSender;

    // *** SELECT ***********************************************************
	// 특정 회원 정보 출력
	@GetMapping("/selectByNum")
	public User selectByNum(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[UserController/selectByNum] 요청");
			User result = userService.selectByNum(memberId);
			System.out.println("[UserController/selectByNum] " + result);
			if(result.getMemberNickname().equals(null) | result.getMemberNickname().equals("")) {
				result.setMemberNickname("닉네임이 없습니다.");
			}
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 사용자 정보 입력
	@PostMapping("/write")
	public Integer write(User dto) {
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
	public Integer update(User dto) {
		try{
			System.out.println("[UserController/update] 요청");
			Integer result = userService.update(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// *** 로그인 ************************************************************
	// 2024.01.21 이시은
	@PostMapping("/login")
	public Integer login(@RequestParam(name= "memberId") String memberId){
		try{
			System.out.println("userController login 요청 받음");
			System.out.println(memberId);
			return 1;
		}catch (Exception e){
			e.printStackTrace();
			return null;
		}
	}

	// *** Email 인증 ************************************************************
    @PostMapping("/sendEmail")
    public void sendEmail(@RequestParam(name = "memberEmail") String email) {
		MimeMessage msg = javaMailSender.createMimeMessage();
        try {
            System.out.println("[UserController/sendEmail] 요청");

            MimeMessageHelper helper = new MimeMessageHelper(msg, false, "UTF-8");
			helper.setFrom("dzzg3@naver.com", "리드미");
            helper.setTo(email);
            helper.setSubject("ReadMe 회원가입 인증번호");
            helper.setText("아래 보이는 숫자 6자리를 입력해 주세요.\n인증번호: " + getCode());

            javaMailSender.send(msg);

        } catch (MailException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

	public static String getCode(){
		
		String str = "";

		// 문자 배열 길이의 값을 랜덤으로 10개를 뽑아 구문을 작성함
		for (int i = 0; i < 6; i++) {
			int idx = (int) (Math.random() * 10);
			str += String.valueOf(idx);
		}
		return str;
	}
}

	class MyAuthentication extends Authenticator {

		PasswordAuthentication pa;
		public MyAuthentication(){
	
			String id = "dzzg3@naver.com";		// 이메일 아이디 ( 위에 발신자 이메일 )
			String pw = "dzzg31234@@@";			// 비밀번호
	
			// ID와 비밀번호를 입력한다.
			pa = new PasswordAuthentication(id, pw);
		}
	
		// 시스템에서 사용하는 인증정보
		public PasswordAuthentication getPasswordAuthentication() {
			return pa;
		}
	}

