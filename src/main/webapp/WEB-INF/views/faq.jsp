<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>FAQ 페이지</title>
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
    <style>
        .center-button {
            text-align: center;
        }
        .content {
            padding: 20px; /* 컨텐츠 주변의 간격 조절 */
        }

        .first-card {
            width: 100%; /* 초기 크기 설정 */
            margin: 0 auto; /* 수평 가운데 정렬 */
        }

        @media (min-width: 768px) {
            /* 창의 최소 너비가 768px 이상일 때의 스타일 */
            .first-card {
                width: 80%; /* 창의 크기에 따라 동적으로 조정 */
            }
        }

        @media (min-width: 992px) {
            /* 창의 최소 너비가 992px 이상일 때의 스타일 */
            .first-card {
                width: 68%; /* 창의 크기에 따라 동적으로 조정 */
            }
        }

        .accordion .card-body.show, .accordion .card-header {
            background-color: white !important; /* 펼쳐진 아코디언의 배경 색을 원하는 색상으로 지정 */
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
            <!-- <div class="card first-card"> -->
                <div class="container mt-5">
                    <h2 style="margin-bottom: 20px; margin-left: 20px;">자주 묻는 질문 (FAQ)</h2>
                        <div class="card">
                            <div class="accordion" id="faqAccordion">
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
                                    <div id="answer${loop.index}" class="collapse" aria-labelledby="question${loop.index}" data-parent="#faqAccordion">
                                        <div class="card-body">
                                            <p style="padding-left: 15px;">${faq.noticeContent}</p> 
                                            <button class="btn btn-outline-success btn-sm float-right" onclick="writeAction('${faq.noticeNumber}')">글 수정</button>
                                        </div>
                                    </div>
                                </c:forEach>
                            </div>
                        </div>
                        <button class="btn btn-outline-primary btn-sm float-right" onclick="insertAction()" style="margin-bottom: 20px;">글등록</button>
                </div>
            <!-- </div> -->
        </div>
        <%@ include file="footer.jsp" %>
           
        </div><!-- .content -->
        <!-- 푸터 -->

    </div><!-- /#right-panel -->

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script>
        function insertAction() {
            window.location.href = 'insertFaq';
        }

        function writeAction(noticeNumber) {
            // 글 수정 버튼을 클릭했을 때 noticeNumber 값을 가져와 URL을 생성
            var url = "faqDetail?noticeNumber=" + noticeNumber;
    
            // 수정 페이지로 리다이렉션
            window.location.href = url;
        }
    </script>

</body>

</html>
