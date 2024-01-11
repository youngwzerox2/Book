<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>이용약관</title>
        <!-- 부트스트랩 CDN 사용 -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body {
                padding: 20px;
            }

            pre {
                white-space: pre-wrap;
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

                        <div class="card-body">
                            <h3>이용 약관</h3>

                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <c:forEach items="${termsList}" var="terms" varStatus="loop">
                                    <li class="nav-item">
                                        <a class="nav-link ${loop.first ? 'active' : ''}" id="pills-${loop.index + 1}-tab"
                                            data-toggle="pill" href="#pills-${loop.index + 1}" role="tab"
                                            aria-controls="pills-${loop.index + 1}" aria-selected="${loop.first}">
                                            ${terms.notice_title}
                                        </a>
                                    </li>
                                </c:forEach>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <c:forEach items="${termsList}" var="terms" varStatus="loop">
                                    <div class="tab-pane fade ${loop.first ? 'show active' : ''}" id="pills-${loop.index + 1}"
                                        role="tabpanel" aria-labelledby="pills-${loop.index + 1}-tab">
                                        <p><a href="termsDetail?notice_number=${terms.notice_number}">${terms.notice_content}</a></p>
                                    </div>
                                </c:forEach>
                            </div>
                        </div>
                        <!-- <button class="btn btn-outline-danger btn-sm float-right" onclick="deleteAction()">삭제</button>
                        <button class="btn btn-outline-warning btn-sm float-right" onclick="editAction()">수정</button> -->
                        <button class="btn btn-outline-primary btn-sm float-right" onclick="writeAction()">글등록</button>
                    </div><!-- .content -->

                    <!-- 푸터 -->
                    <%@ include file="footer.jsp" %>

            </div><!-- /#right-panel -->

             <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
             <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

             <script>
                function writeAction() {
                    // 글쓰기 버튼 클릭 시 동작
                    alert("글을 작성합니다.");
                }
        
                // function editAction() {
                //     // 수정 버튼 클릭 시 동작
                //     alert("글을 수정합니다.");
                // }
        
                // function deleteAction() {
                //     // 삭제 버튼 클릭 시 동작
                //     alert("글을 삭제합니다.");
                // }
            </script>
    </body>

    </html>