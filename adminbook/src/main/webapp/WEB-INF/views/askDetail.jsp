<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>문의 상세 페이지</title>
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
                <h2>문의 상세 페이지</h2>

                <div class="card">
                    <form action="updateAsk" method="post">
                        <input name="ask_id" type="hidden" value="${ask.ask_id}" />
                        <input name="ask_reply_time" type="hidden" value="${ask.ask_reply_time}" />
                        <div class="card-body card-block">
                            <div class="form-group"><label for="company"
                                    class=" form-control-label">문의</label><input type="text"
                                    value="${ask.ask_content}" class="form-control" name="ask_content" readonly>
                            </div>
                            <div class="form-group"><label for="company"
                                class=" form-control-label">문의날짜</label><input type="text"
                                value="${ask.ask_date}" class="form-control" name="ask_date" readonly>
                            </div>
                            <div class="form-group">
                                <label for="company" class="form-control-label">답변</label>
                                <textarea class="form-control" name="ask_reply_content" style="height: 200px;">${ask.ask_reply_content}</textarea>
                            </div>
                            <div class="form-group"><label for="company"
                                class=" form-control-label">처리여부</label>
                                <select class="form-control" name="ask_reply_done">
                                    <option value="yes" <c:if test="${ask.ask_reply_done eq 'yes'}">selected</c:if>>yes</option>
                                    <option value="no" <c:if test="${ask.ask_reply_done eq 'no'}">selected</c:if>>no</option>
                                </select>
                            </div>
                            <div class="form-group"><label for="company"
                                class=" form-control-label">답변담당자</label><input type="text"
                                value="${ask.ask_reply_admin}" class="form-control" name="ask_reply_admin">
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-outline-primary">수정</button>
                            <a href="deleteAsk?ask_id=${ask.ask_id}"
                                class="btn btn-outline-danger"
                                onclick="return confirm('정말로 삭제하시겠습니까?')">삭제</a>
                            <a href="ask" class="btn btn-outline-secondary">뒤로가기</a>
                        </div>
                    </form>
                </div>

            </div>
        </div>

        <!-- 푸터 -->
        <%@ include file="footer.jsp" %>

    </div><!-- /#right-panel -->

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

</body>

</html>
