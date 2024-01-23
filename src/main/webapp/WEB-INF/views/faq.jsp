<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>FAQ 페이지</title>
    <!-- <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"> -->
    <style>
        .center-button {
            text-align: center;
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
                <h2 style="margin-bottom: 20px;">자주 묻는 질문 (FAQ)</h2>

                <div class="accordion" id="faqAccordion">

                    <div class="card">
                        <c:forEach items="${faqList}" var="faq" varStatus="loop">
                            <div class="card-header" id="question${loop.index}">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse"
                                        data-target="#answer${loop.index}" aria-expanded="true"
                                        aria-controls="answer${loop.index}">
                                        ${faq.noticeTitle}
                                    </button>
                                </h5>
                            </div>

                            <div id="answer${loop.index}" class="collapse"
                                aria-labelledby="question${loop.index}" data-parent="#faqAccordion">
                                <div class="card-body">
                                    <a href="faqDetail?noticeNumber=${faq.noticeNumber}">${faq.noticeContent}</a>
                                </div>
                            </div>
                        </c:forEach>
                    </div>
                </div>
            </div>
            <div class="center-button mt-3">
                <button class="btn btn-outline-primary btn-sm float-right" onclick="writeAction()">글등록</button>
            </div>
        </div><!-- .content -->
        <!-- 푸터 -->
        <%@ include file="footer.jsp" %>

    </div><!-- /#right-panel -->

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script>
        function writeAction() {
            window.location.href = 'insertFaq';
        }
    </script>

</body>

</html>
