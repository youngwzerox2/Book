<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>공지사항</title>
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
                <h2>공지사항</h2>
                <hr>

                <div class="card">
                    <div class="card-body">
                        <c:forEach items="${noticeList}" var="notice">
                            <h5 class="card-title">${notice.noticeDate}</h5>
                            <h3 class="card-title"><a href="noticeDetail?noticeNumber=${notice.noticeNumber}">${notice.noticeTitle}</a></h3>
                            <p class="card-text">${notice.noticeContent}</p>
                            <hr/>
                        </c:forEach>
                    </div>
                </div>

                <button class="btn btn-outline-primary btn-sm float-right" onclick="writeAction()">글등록</button>

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
        function writeAction() {
            window.location.href = 'insertNotice';
        }
    </script>
</body>
</html>
