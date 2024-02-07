<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>공지사항</title>
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
    <!-- 부트스트랩 CDN 사용 -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">

    <style>
        .notice-date {
            margin-bottom: 10px; /* 원하는 간격 값으로 조절 */
            font-size: 14px; /* 날짜 폰트 크기 조절 */
            color: #333; /* 진한 회색 색상 설정 */
        }

        .notice-title {
            font-size: 22px; /* 제목 폰트 크기 조절 */
        }
    </style>
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
                <h2>공지사항</h2>
                <hr>

                <div class="card">
                    <div class="card-body">
                        <c:forEach items="${noticeList}" var="notice">
                            <h5 class="notice-date"><fmt:formatDate value="${notice.noticeDate}" pattern="yyyy-MM-dd" /></h5>
                            <button class="btn btn-outline-success btn-sm float-right" onclick="writeAction('${notice.noticeNumber}')">글 수정</button>
                            <h3 class="card-title notice-title">${notice.noticeTitle}</h3>
                            <p class="card-text">${notice.noticeContent}</p>
                            <hr/>
                        </c:forEach>
                    </div>
                </div>

                <button class="btn btn-outline-primary btn-sm float-right" onclick="insertAction()">글등록</button>

            </div><!-- .content -->

            <div class="clearfix"></div>

            <!-- 푸터 -->
            <%@ include file="footer.jsp" %>

        </div><!-- /#right-panel -->

        <!-- 공지사항 추가 가능 -->

    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script>
        function insertAction() {
            window.location.href = 'insertNotice';
        }

        function writeAction(noticeNumber) {
            // 글 수정 버튼을 클릭했을 때 noticeNumber 값을 가져와 URL을 생성
            var url = "noticeDetail?noticeNumber=" + noticeNumber;
    
            // 수정 페이지로 리다이렉션
            window.location.href = url;
        }
    </script>
</body>
</html>
