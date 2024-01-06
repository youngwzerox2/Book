<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>FAQ 상세 페이지</title>
    <!-- <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"> -->
</head>

<body>

    <!-- 사이드바 -->
    <%@ include file="sidebar.jsp" %>

    <!-- Right Panel -->
    <div id="right-panel" class="right-panel">

        <!-- 헤더 -->
        <%@ include file="header.jsp" %>

        <div class="content">
            <div class="container mt-5">
                <h2>FAQ 상세 페이지</h2>

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0">
                           자주 묻는 질문 (FAQ)
                        </h5>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">질문1: 오늘은 무슨 요일?</h5>
                        <p class="card-text">답변: 토요일</p>
                    </div>
                </div>

            </div>
        </div>

        <button class="btn btn-outline-danger btn-sm float-right" onclick="deleteAction()">삭제</button>
        <button class="btn btn-outline-warning btn-sm float-right" onclick="editAction()">수정</button>

        <!-- 푸터 -->
        <%@ include file="footer.jsp" %>

    </div><!-- /#right-panel -->

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script>
        function editAction() {
            // 수정 버튼 클릭 시 동작
            alert("FAQ를 수정합니다.");
        }

        function deleteAction() {
            // 삭제 버튼 클릭 시 동작
            alert("FAQ를 삭제합니다.");
        }
    </script>

</body>

</html>
