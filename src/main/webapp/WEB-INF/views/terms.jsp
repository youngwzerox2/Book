<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>이용약관</title>
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
    <!-- 부트스트랩 CDN 사용 -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            padding: 20px;
        }

        .card-body {
            max-width: 800px; /* 가로 폭을 조절하려는 값으로 변경 */
            margin: 0 auto; /* 가운데 정렬 */
        }

        pre {
            white-space: pre-wrap;
        }

        .notice-content {
            white-space: pre-line; /* pre-line 값은 줄 바꿈은 유지하되 여러 공백은 하나로 처리 */
            padding-left: 1em; /* 또는 다른 적절한 단위를 선택하세요 */
        }

        .nav-pills {
            display: flex;
            justify-content: space-between; /* 탭들을 좌우에 고르게 배치 */
        }

        .nav-item {
            flex: 1; /* 각 탭이 동일한 너비를 가지도록 설정 */
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
                <h3 style="margin-bottom: 10px;">이용 약관</h3>
                    <div class="card">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <c:forEach items="${termsList}" var="terms" varStatus="loop">
                                <li class="nav-item">
                                    <a class="nav-link ${loop.first ? 'active' : ''}  text-center" id="pills-${loop.index + 1}-tab"
                                        data-toggle="pill" href="#pills-${loop.index + 1}" role="tab"
                                        aria-controls="pills-${loop.index + 1}" aria-selected="${loop.first}">
                                        ${terms.noticeTitle}
                                        <hr class="border-bottom">
                                    </a>
                                </li>
                                
                            </c:forEach>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <c:forEach items="${termsList}" var="terms" varStatus="loop">
                                <div class="tab-pane fade ${loop.first ? 'show active' : ''}" id="pills-${loop.index + 1}" role="tabpanel" aria-labelledby="pills-${loop.index + 1}-tab">
                                    <p class="notice-content">
                                        ${terms.noticeContent}
                                    </p>
                                    <button class="btn btn-outline-success btn-sm float-right" onclick="writeAction('${terms.noticeNumber}')" style="margin-right: 20px; margin-bottom: 20px;">글 수정</button>
                                </div>
                            </c:forEach>
                        </div>
                    </div>
            </div>
            <!-- <button class="btn btn-outline-danger btn-sm float-right" onclick="deleteAction()">삭제</button>
                        <button class="btn btn-outline-warning btn-sm float-right" onclick="editAction()">수정</button> -->
        </div><!-- .content -->

        <!-- 푸터 -->
        <%@ include file="footer.jsp" %>

    </div><!-- /#right-panel -->

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script>
        function writeAction(noticeNumber) {
            // 글 수정 버튼을 클릭했을 때 noticeNumber 값을 가져와 URL을 생성
            var url = "termsDetail?noticeNumber=" + noticeNumber;
    
            // 수정 페이지로 리다이렉션
            window.location.href = url;
        }
    </script>

</body>

</html>
