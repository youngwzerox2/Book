<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

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
                    <form id="updateAskForm" action="updateAsk" method="post">
                        <input name="askId" type="hidden" value="${ask.askId}" />
                        <!-- <input name="askReplyTime" type="hidden" value="<fmt:formatDate value='${ask.askReplyTime}' pattern='yyyy-MM-dd' />" /> -->
                        <input name="askReplyTime" type="hidden" value="${ask.askReplyTime}" />
                        <div class="card-body card-block">
                            <div class="form-group">
                                <label for="company" class="form-control-label">문의</label>
                                <input type="text" value="${ask.askContent}" class="form-control" name="askContent" readonly>
                            </div>
                            <!-- <div class="form-group">
                                <label for="company" class="form-control-label">문의날짜</label>
                                <input type="text" value="${ask.askDate}" class="form-control" name="askDate" readonly>
                            </div> -->

                            <div class="form-group"><label for="company"
                                class=" form-control-label">문의날짜</label><input type="text"
                                value="<fmt:formatDate value='${ask.askDate}' pattern='yyyy-MM-dd' />" class="form-control" readonly>
                            </div>

                            <div class="form-group">
                                <label for="company" class="form-control-label">답변</label>
                                <textarea class="form-control" name="askReplyContent" style="height: 200px;">${ask.askReplyContent}</textarea>
                            </div>
                            <div class="form-group">
                                <label for="company" class="form-control-label">처리여부</label>
                                <select class="form-control" name="askReplyDone">
                                    <option value="yes" <c:if test="${ask.askReplyDone eq 'yes'}">selected</c:if>>yes</option>
                                    <option value="no" <c:if test="${ask.askReplyDone eq 'no'}">selected</c:if>>no</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="company" class="form-control-label">답변담당자</label>
                                <input type="text" value="${ask.askReplyAdmin}" class="form-control" name="askReplyAdmin">
                            </div>
                        </div>
                        <div class="form-group row justify-content-end">
                            <div class="col-sm-3">
                            <button type="submit" class="btn btn-outline-primary">수정</button>
                            <a href="deleteAsk?askId=${ask.askId}"
                                class="btn btn-outline-danger"
                                onclick="return confirm('정말로 삭제하시겠습니까?')">삭제</a>
                            <a href="ask" class="btn btn-outline-secondary">뒤로가기</a>
                            </div>
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

    <script>
        // 폼 제출 함수
        function submitForm() {
            // askReplyTime을 가공하여 hidden 필드에 설정
            var formattedDate = formatDate($('#askReplyTime').val());
            $('#askReplyTime').val(formattedDate);

            // 폼 제출
            $('#updateAskForm').submit();
        }

        // 날짜 형식 가공 함수
        function formatDate(inputDate) {
            var date = new Date(inputDate);
            var year = date.getFullYear();
            var month = ('0' + (date.getMonth() + 1)).slice(-2);
            var day = ('0' + date.getDate()).slice(-2);
            return year + '-' + month + '-' + day;
        }
    </script>

</body>

</html>
