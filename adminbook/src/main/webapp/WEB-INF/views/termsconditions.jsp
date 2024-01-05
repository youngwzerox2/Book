<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
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
                        <div class="container">
                            <h2 class="mt-4 mb-4">이용약관</h2>

                            <div class="card">
                                <div class="card-body">
                                    <pre>
                                        이용약관 내용
                                    </pre>
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