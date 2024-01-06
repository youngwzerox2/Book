<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>공지사항 상세 페이지</title>
    <!-- 부트스트랩 CDN 사용 -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
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
                <h2>공지사항 상세 페이지</h2>
                <hr>

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">2024년 1월 1일 공지</h5>
                        <p class="card-text">새해 복 많이 받으세요</p>
                    </div>
                </div>

                <button class="btn btn-outline-danger btn-sm float-right" onclick="deleteAction()">삭제</button>
                <button class="btn btn-outline-warning btn-sm float-right" onclick="editAction()">수정</button>

            </div><!-- .content -->

            <div class="clearfix"></div>

            <!-- 푸터 -->
            <%@ include file="footer.jsp" %>

        </div><!-- /#right-panel -->

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

        <script>
            function editAction() {
                alert("글을 수정합니다.");
            }

            function deleteAction() {
                alert("글을 삭제합니다.");
            }
        </script>

    </body>
</html>
