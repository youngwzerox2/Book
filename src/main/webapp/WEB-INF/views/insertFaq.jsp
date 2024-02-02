<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>FAQ 등록 페이지</title>
        <!-- 부트스트랩 CDN 사용 -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">

        <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdn.jsdeliv```r.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css">
        <link rel="stylesheet" href="assets/css/cs-skin-elastic.css">
        <link rel="stylesheet" href="assets/css/style.css">

        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>
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
                            <h2>FAQ 등록 페이지</h2>
                            <hr>

                            <div class="card">
                                <form id="noticeForm" action="insertFaq" method="post" onsubmit="return submitForm()">
                                    <input name="noticeNumber" type="hidden" value="${faq.noticeNumber}" />
                                    <input name="noticeDate" type="hidden" value="${faq.noticeDate}" />
                                    <input name="noticeDisplay" type="hidden" value="${faq.noticeDisplay}" />

                                    <div class="card-body card-block">
                                        <div class="form-group"><label for="company"
                                            class=" form-control-label">카테고리</label><input type="text"
                                             class="form-control" name="noticeType">
                                        </div>
                                        <div class="form-group"><label for="company"
                                            class=" form-control-label">제목</label><input type="text"
                                             class="form-control" name="noticeTitle">
                                        </div>
                                        <div class="form-group">
                                            <label for="company" class="form-control-label">내용</label>
                                            <textarea class="form-control" name="noticeContent" style="height: 200px;"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="company" class="form-control-label">처리담당자</label>
                                            <select class="form-control" name="memberId">
                                                <c:forEach var="adminId" items="${adminMemberIds}">
                                                    <option value="${adminId}" <c:if test="${adminId eq faq.memberId}">selected</c:if>>${adminId}</option>
                                                </c:forEach>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row justify-content-end">
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-outline-primary">등록</button>
                                                <a href="faq" class="btn btn-outline-secondary">뒤로가기</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div><!-- .content -->

                        <div class="clearfix"></div>

                        <!-- 푸터 -->
                        <%@ include file="footer.jsp" %>

                    </div><!-- /#right-panel -->

                    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

                    <script>
                        $(document).ready(function () {
                            // 폼 제출 시 처리
                            $('form').submit(function (e) {
                                e.preventDefault(); // 기본 제출 동작 방지
                                var form = $(this);
                    
                                // Ajax를 사용하여 폼 데이터를 서버로 전송
                                $.ajax({
                                    type: form.attr('method'),
                                    url: form.attr('action'),
                                    data: form.serialize(),
                                    success: function (data) {
                                        // 등록이 성공하면 notice 페이지로 이동
                                        window.location.href = 'faq';
                                    },
                                    error: function (error) {
                                        console.log('등록 실패', error);
                                        // 실패 시 필요한 처리를 여기에 추가
                                    }
                                });
                            });
                        });
                    </script>
    </body>

    </html>