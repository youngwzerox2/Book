package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class User {

	private String	memberId;			// 고객아이디
	private String	memberPassword;		// 고객비밀번호
	private String	memberName;			// 이름
	private String	memberEmail;		// 이메일
	private String	memberNickname;		// 닉네임
	private String	memberGender;		// 성별
	private String	memberBirthday;		// 생년월일
	private String	memberTel;			// 전화번호
	private Date	joinDate;			// 가입일
	private Date	quitDate;			// 탈퇴일
	private Integer	memberVisitAgree;	// 책장방문허용여부
	private String	memberGrade;		// 회원등급
	private String	cardNumber;			// 카드번호
	private Integer	cardCvc;			// 카드cvc
	private Date	cardDate;			// 카드유효기간
	private Integer	cardPassword;		// 카드비밀번호 앞 2자리
	
}
