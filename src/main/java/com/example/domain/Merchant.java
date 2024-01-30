package com.example.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Merchant {

	private Integer merchantId;			// 주문번호
	private Integer merchantCost;		// 금액
	private Date	startDate;			// 결제시간
	private Date	endDate;			// 유효기간
	private String	memberId;			// 고객아이디
	private String	merchantType;		// 결제권종류

	// ****************************** 통계 ************************************
	private Integer totalMerchantCost;	// 오늘 총 매출
}
