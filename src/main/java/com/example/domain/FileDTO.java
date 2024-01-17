package com.example.domain;

import lombok.Data;

@Data
public class FileDTO {
	
	private Integer fileNumber;			// 파일번호
	private String	originalName;		// 원본이름
	private String	fileName;			// 바뀐이름
	private String	filePath;			// 파일경로
	private String	memberId;			// 고객아이디(누구의 파일인가)

}
