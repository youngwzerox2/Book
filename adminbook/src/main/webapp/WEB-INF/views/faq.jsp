<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>FAQ 페이지</title>
        <!-- 부트스트랩 CDN 링크 (선택적으로 사용) -->
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
                                <!-- 질문과 답변 아이템 -->
                                <div class="card">
                                    <div class="card-header" id="question1">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse"
                                                data-target="#answer1" aria-expanded="true" aria-controls="answer1">
                                                질문 1: 집에 가고 싶나요?
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="answer1" class="collapse show" aria-labelledby="question1"
                                        data-parent="#faqAccordion">
                                        <div class="card-body">
                                            네, 가고 싶어요
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="question2">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse"
                                                data-target="#answer2" aria-expanded="false" aria-controls="answer2">
                                                질문 2: 취업할 수 있을까요?
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="answer2" class="collapse" aria-labelledby="question2"
                                        data-parent="#faqAccordion">
                                        <div class="card-body">
                                            ...나는 할 수 있다
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-danger btn-sm float-right" onclick="deleteAction()">삭제</button>
                        <button class="btn btn-warning btn-sm float-right" onclick="editAction()">수정</button>
                        <button class="btn btn-primary btn-sm float-right" onclick="writeAction()">글쓰기</button>

                    </div><!-- .content -->
                    <!-- 푸터 -->
                    <%@ include file="footer.jsp" %>

            </div><!-- /#right-panel -->

            <!-- 부트스트랩 JS 및 jQuery CDN 링크 (선택적으로 사용) -->
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

            <script>
                function writeAction() {
                    // 글쓰기 버튼 클릭 시 동작
                    alert("글을 작성합니다.");
                }
        
                function editAction() {
                    // 수정 버튼 클릭 시 동작
                    alert("글을 수정합니다.");
                }
        
                function deleteAction() {
                    // 삭제 버튼 클릭 시 동작
                    alert("글을 삭제합니다.");
                }
            </script>

    </body>

    </html>