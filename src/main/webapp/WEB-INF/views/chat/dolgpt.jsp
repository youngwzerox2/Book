<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OpenAI를 이용한 챗봇</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .message {
            border-top: 1px solid #ccc;
            padding: 10px;
            margin-top: 5px;
            background-color: #e6e6e6;
        }
        #chat-container {
            width: 400px;
            height: 600px;
            display: flex;
            flex-direction: column;
            border: 1px solid #ccc;
        }
        #chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 10px;
            display: flex;
            flex-direction: column-reverse;
        }
        #user-input {
            display: flex;
            padding: 10px;
 
        }
        #user-input input {
            flex: 1;
            padding: 10px;
            outline: none;
        }
        #user-input button {
            border: none;
            background-color: #1e88e5;
            color: white;
            padding: 10px 15px;
            cursor: pointer;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
    <script src="../assets/js/dolgpt.js"></script>
</head>
<body>
    <div id="chat-container">
        <div id="chat-messages"></div>
        <div id="user-input">
            <input id="userInput" name="userInput" type="text" placeholder="메시지를 입력하세요..." />
            <button id="dolbtn">전송</button>
        </div>
    </div>
</body>
</html>