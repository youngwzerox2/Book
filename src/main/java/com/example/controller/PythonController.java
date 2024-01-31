package com.example.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;

@RestController
@RequestMapping("/pythonController")
public class PythonController {

    @PostMapping("/executePythonScript")
    public String executePythonScript() {
        try {
            // 파이썬 파일 실행
            String pythonFile = "src\\main\\resources\\static\\python\\yes24.py";
            ProcessBuilder pb = new ProcessBuilder("python.exe", pythonFile);
            pb.directory(new File(System.getProperty("user.dir")));

            // 프로세스 실행 및 출력 처리
            Process process = pb.start();
            System.out.println("process시작"+ process);

            // // 프로세스의 출력을 확인
            // BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            // String line;
            // while ((line = reader.readLine()) != null) {
            //     System.out.println(line);
            // }

            // // 프로세스의 에러 출력을 확인
            // BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            // String errorLine;
            // while ((errorLine = errorReader.readLine()) != null) {
            //     System.err.println("[Error] " + errorLine);
            // }

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

            return output;

            // // 성공적으로 실행된 경우 응답
            // return "Python 스크립트가 성공적으로 실행되었습니다.";

        } catch (Exception e) {
            e.printStackTrace();
            // 에러 발생 시 응답
            return "Python 스크립트 실행 중 오류가 발생했습니다.";
        }
    }
}
