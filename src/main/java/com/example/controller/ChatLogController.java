package com.example.controller;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.ChatLog;
import com.example.userservice.UserChatLogServiceImpl;

@RestController
@RequestMapping("chatLog")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class ChatLogController {
    
    @Autowired
    private UserChatLogServiceImpl chatLogService;

	// *** INSERT ***********************************************************
	// 전송 버튼을 누를 때마다 대답 출력 및 DB 저장
	@PostMapping("/chating")
	public String chating(ChatLog dto) {
		try {
			// 문장 전처리
			String sentence = dto.getSentence().replaceAll("^(\\s+)|(\\s+)$", "");

			// .py 파일 실행
			String pythonFile = "src\\main\\resources\\static\\python\\client_chat.py";
			ProcessBuilder pb = new ProcessBuilder("python.exe", pythonFile, sentence);
			pb.directory(new File(System.getProperty("user.dir")));
			Process process = pb.start();

			// .py로 문자열 전달
			// OutputStream outputStream = process.getOutputStream();
			// BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(outputStream));
			// System.out.println("문장 전달 > " + sentence);
			// writer.write("msg=" + sentence + "\n");
			// writer.close();

			// 프로세스 종료 대기
            int exitCode = process.waitFor();
            System.out.println("Exit Code: " + exitCode);

			// .py 출력 읽어오기
			InputStream inputStream = process.getInputStream();
			InputStream errorStream = process.getErrorStream();
			BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
			BufferedReader error = new BufferedReader(new InputStreamReader(errorStream));
			String line; // 읽어온 각 줄의 내용을 담을 변수
			String errorLine;
			StringBuilder sb = new StringBuilder();

			// 정상 출력 - 한 줄이라 '\n' 붙이지 않음
			while ((line = reader.readLine()) != null) {
				sb.append(line);
			}

			// 에러 출력
			while ((errorLine = error.readLine()) != null) {
				System.err.println("[Error] > " + errorLine);
			}

			reader.close();
			error.close();

			String output = sb.toString();
			System.out.println(output);
			System.out.println("[Dolmeng] > " + output);
			
			// DB에 채팅 내용 저장
			dto.setSentence(sentence);
			// System.out.println("[dto] > " + dto);

			chatLogService.write(dto);

			return output;

		} catch (Exception e) {
			e.printStackTrace();
			return "";
		}

	}

}
