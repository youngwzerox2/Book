package com.example.controller;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.ChatData;
import com.example.domain.ChatLog;
import com.example.userservice.UserChatDataServiceImpl;
import com.example.userservice.UserChatLogServiceImpl;

@RestController
@RequestMapping("chatLog")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class ChatLogController {
    
    @Autowired
    private UserChatLogServiceImpl chatLogService;

	@Autowired
	private UserChatDataServiceImpl chatDataService;

	List<String> userInput = new ArrayList<String>();

	// 전송 버튼을 누를 때마다 list에 추가됨
	@PostMapping("/chating")
	public void chating(ChatLog dto) {
		// String memberId = dto.getMemberId();
		// String sentence = dto.getSentence();
		// String terminate = dto.getTerminate();

		String sentence = dto.getSentence().replaceAll("^(\\s+)|(\\s+)$", "");

		// DB에 채팅 내용 저장
		chatLogService.write(dto);
		userInput.add(sentence);

		// if(terminate.equals("N")) {
		// 	userInput.add(sentence);
		// }
	}

	// *** INSERT ***********************************************************
	// 사용자의 채팅 내역 입력
	@PostMapping("/write")
	public Integer write() {
		try {
			System.out.println("[ChatLogController/write] 요청");
			// String id = "test1";
			// userInput.add("너무 행복해서 집 가고 싶다.");

			String id = chatLogService.getMemberId();

			// 문장 만들기...ㅠㅡㅠ
			String sentences = String.join(" ", userInput);
			System.out.println("요청된 문장: " + sentences);

			// .py 파일 실행
			String pythonFile = "C:\\Users\\ict0312\\Desktop\\ReadMe\\Book-6\\src\\main\\resources\\static\\python\\client_test.py";
			ProcessBuilder pb = new ProcessBuilder("python.exe", pythonFile, id, sentences);
			pb.directory(new File(System.getProperty("user.dir")));
			Process process = pb.start();

			// .py로 문자열 전달
			OutputStream outputStream = process.getOutputStream();
			BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(outputStream));
			System.out.println("python으로 전달 > " + sentences);
			writer.write("msg=" + sentences + "\n");
			writer.close();

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

			while ((line = reader.readLine()) != null) {
				sb.append(line).append("\n");
			}

			while ((errorLine = error.readLine()) != null) {
				System.err.println("[Error from Python] > " + errorLine);
			}

			reader.close();
			error.close();

			String output = sb.toString();
			System.out.println(output);
			System.out.println("[From Python] > " + output);

			String[] pythonOutput = output.split("\n");
			String emotion = pythonOutput[0];
			String recommended1 = getIsbn(pythonOutput[1]);
			String recommended2 = getIsbn(pythonOutput[2]);
			String recommended3 = getIsbn(pythonOutput[3]);


			// System.out.println(recommended1);

			ChatData ddto = new ChatData();
			ddto.setMemberId(id);
			ddto.setEmotion(emotion);
			ddto.setRecommandedBook1(recommended1);
			ddto.setRecommandedBook2(recommended2);
			ddto.setRecommandedBook3(recommended3);

			// 가장 최근에 입력한 chat_number 받아와서 저장
			Integer chatNum = chatLogService.getChatNum();
			// System.out.println(chatNum);
			ddto.setChatNumber(chatNum);
			// System.out.println("ddto>" + ddto);
			
			// DB에 채팅 데이터 저장
			Integer result = chatDataService.write(ddto);

			// 초기화
			userInput.clear();

			return result;
			// return 17;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	public String getIsbn(String result) {
		// "[]"", " ", "'"를 전부 없애고 ","를 기준으로 자름
		String[] parsedResult = result.replaceAll("[\\[\\]\\s']", "").split(",");
		// 맨 뒤 요소(ISBN)만 return
		return parsedResult[parsedResult.length - 1];
	}

}
