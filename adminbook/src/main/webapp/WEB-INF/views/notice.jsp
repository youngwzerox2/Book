<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
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
                                    <h5 class="card-title">2024년 1월 1일 공지</h5>
                                    <p class="card-text">새해 복 많이 받으세요</p>
                                </div>
                            </div>

                            <div class="card mt-3">
                                <div class="card-body">
                                    <h5 class="card-title">2023년 12월 1일 공지</h5>
                                    <p class="card-text">12월이 되었습니다</p>
                                </div>
                            </div>

                            <button class="btn btn-danger btn-sm float-right" onclick="deleteAction()">삭제</button>
                            <button class="btn btn-warning btn-sm float-right" onclick="editAction()">수정</button>
                            <button class="btn btn-primary btn-sm float-right" onclick="writeAction()">글쓰기</button>

                        </div><!-- .content -->


                        <div class="clearfix"></div>

                        <!-- 푸터 -->
                        <%@ include file="footer.jsp" %>

                    </div><!-- /#right-panel -->


                    <!-- 공지사항 추가 가능 -->

            </div>

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