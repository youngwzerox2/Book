package com.example.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class PythonController {
    
    @GetMapping("/api/runPythonScript")
    public String runPythonScript() throws IOException, InterruptedException {
        ProcessBuilder processBuilder = new ProcessBuilder("python", "src/main/resources/static/python/yes24.py");
        processBuilder.redirectErrorStream(true);
        
        Process process = processBuilder.start();

        // 프로세스가 완료될 때까지 대기
        int exitCode = process.waitFor();

        // 프로세스의 표준 출력 읽기
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
            StringBuilder result = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                result.append(line).append("\n");
            }

            return "Exit Code: " + exitCode + "\n" + result.toString();
        }
    }
}

