package com.example.domain;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class User {

    // ****************************** 회원정보 *******************************
	private String	memberId;			// 고객아이디
	private String	memberPassword;		// 고객비밀번호
	private String	memberName;			// 이름
	private String	memberEmail;		// 이메일
	private String	memberNickname;		// 닉네임
	private String	memberGender;		// 성별
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date	memberBirthday;		// 생년월일
	private String	memberTel;			// 전화번호
	private Date	joinDate;			// 가입일
	private Date	quitDate;			// 탈퇴일
	private Integer	memberVisitAgree;	// 책장방문허용여부
	private String	memberGrade;		// 회원등급
	private String	cardNumber;			// 카드번호
	private Integer	cardCvc;			// 카드cvc
	private String	cardDate;			// 카드유효기간
	private Integer	cardPassword;		// 카드비밀번호 앞 2자리
	private Integer memberImg;			// 프로필사진

	// **************************** 통계 *****************************
	private String ageGroup;			// 연령대분석-나이대 
	private Integer count; 

	// **************************** 책장 *****************************
	private String	recommandingId;		// 추천 책장 번호
	private String	recommandingTitle;	// 추천 책장 제목
	private String	recommandingTag;	// 추천 책장 태그
	private String	bookIsbn1;			// 추천 책 1
	private String	bookname;			// 책 제목
	private String	bookImageURL;		// 책 이미지
}
