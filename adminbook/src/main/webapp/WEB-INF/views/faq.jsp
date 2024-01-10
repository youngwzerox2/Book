<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>FAQ 페이지</title>
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
                            <h2>자주 묻는 질문 (FAQ)</h2>

                            <div class="accordion" id="faqAccordion">

                                <div class="card">
                                    <c:forEach items="${faqList }" var="faq">
                                    <div class="card-header" id="question1">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse"
                                                data-target="#answer1" aria-expanded="true" aria-controls="answer1">
                                                <a href="faqDetail?notice_number=${faq.notice_number}">${notice.notice_title}</a>
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="answer1" class="collapse show" aria-labelledby="question1"
                                        data-parent="#faqAccordion">
                                        <div class="card-body">
                                            ${notice.notice_content}
                                        </div>
                                    </div>
                                    </c:forEach>
                                </div>

                              
                            </div>
                        </div>

                        <!-- <button class="btn btn-outline-danger btn-sm float-right" onclick="deleteAction()">삭제</button>
                        <button class="btn btn-outline-warning btn-sm float-right" onclick="editAction()">수정</button> -->
                        <button class="btn btn-outline-primary btn-sm float-right" onclick="writeAction()">글쓰기</button>

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
            </script>

    </body>

    </html>