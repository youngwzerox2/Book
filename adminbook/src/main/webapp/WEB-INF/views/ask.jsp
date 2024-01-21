<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="UTF-8">
            <title>1:1문의 페이지</title>
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

                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <strong class="card-title">1:1 문의</strong>
                                    </div>
                                    <div class="card-body" style="display: flex;">

                                        <div class="mr-3">
                                            <button class="btn btn-outline-primary btn-sm" id="showAll">전체 글보기</button>
                                            <hr />
                                            <button class="btn btn-outline-primary btn-sm" id="showUnanswered">답변 미완료 글
                                                보기</button>
                                            <hr />
                                            <button class="btn btn-outline-primary btn-sm" id="showAnswered">답변 완료한 글
                                                보기</button>
                                        </div>

                                        <div style="max-height: 400px; overflow-y: auto;">
                                            <table id="asktable" class="table table-striped"
                                                style="width: 100%; max-width: none;">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">문의 날짜</th>
                                                        <th scope="col">문의아이디</th>
                                                        <th scope="col">문의 내용</th>
                                                        <th scope="col">문의 처리여부</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <c:forEach items="${askList}" var="ask">
                                                        <tr class="${ask.ask_reply_done eq 'yes' ? 'answered' : 'unanswered'}">
                                                            <td>${ask.ask_id}</td>
                                                            <td>${ask.ask_date}</td>
                                                            <td><a
                                                                    href="askDetail?ask_id=${ask.ask_id}">${ask.member_id}</a>
                                                            </td>
                                                            <td>${ask.ask_content}</td>
                                                            <td>${ask.ask_reply_done}</td>
                                                        </tr>
                                                    </c:forEach>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- <button class="btn btn-outline-primary btn-sm float-right"
                                onclick="writeAction()">글등록</button> -->

                        </div><!-- .content -->
                        <!-- 푸터 -->
                        <%@ include file="footer.jsp" %>

                </div><!-- /#right-panel -->

                <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

                <script>
                    $(document).ready(function() {
                        // 전체 행 표시
                        $("#showAll").click(function() {
                            $("#asktable tbody tr").show();
                        });
                
                        // 답변 미완료 행만 표시
                        $("#showUnanswered").click(function() {
                            $("#asktable tbody tr.answered").hide();
                            $("#asktable tbody tr.unanswered").show();
                        });
                
                        // 답변 완료 행만 표시
                        $("#showAnswered").click(function() {
                            $("#asktable tbody tr.unanswered").hide();
                            $("#asktable tbody tr.answered").show();
                        });
                    });
                </script>
                

        </body>

        </html>