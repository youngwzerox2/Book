package com.example.controller;

import java.util.HashMap;

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

import com.example.domain.Email;
import com.example.domain.User;
import com.example.userservice.UserUserServiceImpl;

import jakarta.mail.internet.MimeMessage;

@RestController
@RequestMapping("user")
// @CrossOrigin(origins = "http://118.217.203.37:3000")
@CrossOrigin(origins = "http://114.207.167.82:3000")
public class UserController {

	public static HashMap<String, String> codeStorage = new HashMap<String, String>();

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
			System.out.println(result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// 등급 조회
	@GetMapping("/getGrade")
	public Integer getGrade(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[UserController/getGrade] 요청");
			User result = userService.selectByNum(memberId);
			String grade = result.getMemberGrade();

			if(grade.equals("plus") || grade.equals("admin")) {
				return 1;
			} else {
				return 0;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 회원가입
	@PostMapping("/write")
	public Integer write(User dto) {
		Integer result;
		String memberEmail = dto.getMemberEmail();
		try {
			System.out.println("[UserController/write] 요청");
			if(codeStorage.get(memberEmail) != null && codeStorage.get(memberEmail).equals("Y")) {
				// 코드 인증을 완료했다면
				result = userService.write(dto);
				codeStorage.remove(memberEmail);
			} else if(codeStorage.get(memberEmail) == null || codeStorage.get(memberEmail).equals("N")) {
				// 코드 인증을 완료하지 않았다면
				result = 0;
			} else {
				result = 0;
			}
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

	// 프로필 사진 변경
	@PostMapping("/updateImg")
	public Integer updateImg(User dto) {
		try {
			System.out.println("[UserController/updateImg] 요청");
			User user = userService.selectByNum(dto.getMemberId());
			String memberGrade = user.getMemberGrade();
			if(memberGrade.equals("admin") || memberGrade.equals("plus")) {
				userService.updateImg(dto);
				return 1;
			} else {
				return 0;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// *** 로그인 ************************************************************
	// 2024.01.21 이시은
	@PostMapping("/login")
	public Integer login(@RequestParam(name= "memberId") String memberId,
						 @RequestParam(name = "memberPassword") String memberPassword){
		try{
			System.out.println("[UserController/login] 요청");
			User user = userService.selectByNum(memberId);
			if(memberPassword.equals(user.getMemberPassword())) {
				// 로그인 성공
				System.out.println("로그인 성공");
				return 1;
			} else {
				// 로그인 실패
				return 0;
			}
			
		}catch (Exception e){
			e.printStackTrace();
			return null;
		}
	}

	// *** 아이디 찾기 (Email로 아이디 전송) ************************************************************
	// 이름, 전화번호 일치하면 Email로 memberId 전송
	@PostMapping("/findId")
	public Integer findId(User dto) {

		User user = userService.selectForFind(dto);
		if(user != null
			&& dto.getMemberName().equals(user.getMemberName())
			&& dto.getMemberTel().equals(user.getMemberTel()))
		{
			String memberEmail = user.getMemberEmail();
			String memberId = user.getMemberId();

			MimeMessage msg = javaMailSender.createMimeMessage();
			try {
				MimeMessageHelper helper = new MimeMessageHelper(msg, false, "UTF-8");
				helper.setFrom("dzzg3@naver.com", "리드미");
				helper.setTo(memberEmail);
				helper.setSubject("ReadMe 아이디 찾기");
				helper.setText("가입하신 ReadMe 아이디입니다.\n아이디: " + memberId);

				javaMailSender.send(msg);

			} catch (MailException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}

			return 1;
		} else {
			return 0;
		}
	}

	// *** 비밀번호 찾기 (발급된 임시 비밀번호 Email로 전송) ************************************************************
	// 아이디, 이름, 전화번호 일치하면 이메일로 임시 비밀번호 전송
	@PostMapping("/findPw")
	public Integer findPw(User dto) {

		User user = userService.selectForFind(dto);

		// 입력한 정보와 등록된 정보가 일치하면
		if(user != null
			&& dto.getMemberId().equals(user.getMemberId())
			&& dto.getMemberName().equals(user.getMemberName())
			&& dto.getMemberTel().equals(user.getMemberTel()))
		{
			// 코드 발급
			String tempPw = getCode();

			// 임시 비밀번호로 비밀번호 변경
			String memberId = user.getMemberId();
			userService.changeToTempPw(memberId, tempPw);

			// 임시 비밀번호 메일로 발송
			String memberEmail = user.getMemberEmail();

			MimeMessage msg = javaMailSender.createMimeMessage();
			try {
				MimeMessageHelper helper = new MimeMessageHelper(msg, false, "UTF-8");
				helper.setFrom("dzzg3@naver.com", "리드미");
				helper.setTo(memberEmail);
				helper.setSubject("ReadMe 임시 비밀번호 발급");
				helper.setText("ReadMe 임시 비밀번호를 발급해 드립니다.\n"
								+ "로그인 후 비밀번호를 변경해 주세요.\n\n"
								+ "임시 비밀번호: " + tempPw);

				javaMailSender.send(msg);

			} catch (MailException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}
			return 1;
		} else {
			return 0;
		}
	}

	// *** 회원가입 아이디 중복체크 ************************************************************
	@PostMapping("/checkId")
	public Integer checkId(@RequestParam(name = "memberId") String memberId) {
		System.out.println("[UserController/checkId] 요청");
		Integer result = userService.checkId(memberId);
		if(result == 0) {
			// 해당 아이디를 가진 사용자가 없다면
			return 1;
		} else {
			// 해당 아이디를 가진 사용자가 있다면
			return 0;
		}		
	}

	// *** 회원가입 Email 인증 ************************************************************
	// 인증번호 검사
	@PostMapping("/checkNum")
	public Integer checkNum(Email dto) {
		String memberEmail = dto.getMemberEmail();
		String code = dto.getCode();
		try {
			// System.out.println("이거 인증하는 메일@@@@@@@ " + memberEmail);
			// System.out.println("이거 인증하는 코드@@@@@@@@@@@@@@@@ " + dto.getCode());
			// System.out.println("어라 이게 다른가@@@@@ " + codeStorage.get(memberEmail));
			if(code.equals(codeStorage.get(memberEmail))) {
				// 인증번호가 일치하면
				codeStorage.remove(memberEmail);
				codeStorage.put(memberEmail, "Y");
				return 1;
			} else {
				// 인증번호가 불일치하면
				return 0;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// 인증 메일 전송
    @PostMapping("/sendCodeEmail")
    public void sendEmail(@RequestParam(name = "memberEmail") String memberEmail) {
		MimeMessage msg = javaMailSender.createMimeMessage();
        try {
            System.out.println("[UserController/sendEmail] 요청");

			Email dto = new Email();
			dto.setMemberEmail(memberEmail);
			String code = getCode();
			dto.setCode(code);
			codeStorage.put(memberEmail, code);
			// System.out.println("이거 이메일!!!!!!!!!!!!!!!! " + dto.getMemberEmail());
			// System.out.println("이거 코드!!!!!!!!!!!!!!!!!!! " + dto.getCode());

            MimeMessageHelper helper = new MimeMessageHelper(msg, false, "UTF-8");
			helper.setFrom("dzzg3@naver.com", "리드미");
            helper.setTo(memberEmail);
            helper.setSubject("ReadMe 회원가입 인증번호");
            helper.setText("아래 보이는 숫자 6자리를 입력해 주세요.\n인증번호: " + code);

            javaMailSender.send(msg);

        } catch (MailException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

	// 6자리 인증 번호 제작
	public static String getCode(){
		
		char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
									'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
									'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
									'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
									'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

		String str = "";

		// 배열에서 무작위로 6개의 char 골라 문자열 str을 만듦
		int idx = 0;
		for (int i = 0; i < 6; i++) {
			idx = (int) (charSet.length * Math.random());
			str += charSet[idx];
		}
		return str;
	}
}

	// 인증 정보 (메일 보내는 아이디, 비밀번호)
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

