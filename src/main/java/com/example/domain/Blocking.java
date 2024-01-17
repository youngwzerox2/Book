package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Blocking {
	
	private Integer blockedNumber;		// 차단번호
	private String	blockedMember;		// 차단당한사용자
	private String	bloackedReason;		// 차단사유
	private Date	blockedDate;		// 차단날짜
	private String	memberId;			// 차단하는사용자
	
}
