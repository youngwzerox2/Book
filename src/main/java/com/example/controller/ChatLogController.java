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

	// *** INSERT ***********************************************************
	// 사용자의 채팅 내역 입력
	@PostMapping("/write")
	public Integer write(ChatLog dto) {
		try {
			System.out.println("[ChatLogController/write] 요청");
			String terminate = dto.getTerminate();
			String id = dto.getMemberId();
			// System.out.println(dto.getMemberId());
			// System.out.println(terminate);

			// 문장 만들기...ㅠㅡㅠ
			List<String> sentence = new ArrayList<String>();
			String userInput = dto.getSentence().replaceAll("^(\\s+)|(\\s+)$", "");
			System.out.println(userInput);
			sentence.add(userInput);
			String sentences = String.join(" ", sentence);

			// .py 파일 실행
			String pythonFile = "C:\\Users\\ict0312\\Desktop\\ReadMe\\Book-5\\src\\main\\resources\\static\\python\\client_test.py";
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
			ddto.setEmotion(emotion);
			ddto.setRecommandedBook1(recommended1);
			ddto.setRecommandedBook2(recommended2);
			ddto.setRecommandedBook3(recommended3);

			// DB에 채팅 내용 저장
			chatLogService.write(dto);

			// 가장 최근에 입력한 chat_number 받아와서 저장
			Integer chatNum = chatLogService.getChatNum();
			System.out.println(chatNum);
			ddto.setChatNumber(chatNum);
			
			// DB에 채팅 데이터 저장
			Integer result = chatDataService.write(ddto);
			// 이게 안됨

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
		// 2번째 요소(ISBN)만 return
		return parsedResult[2];
	}

}
