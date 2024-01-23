<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>커뮤니티상세정보</title>
    <meta name="description" content="Ela Admin - HTML5 Admin Template">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png">
    <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css">
    <link rel="stylesheet" href="assets/css/cs-skin-elastic.css">
    <link rel="stylesheet" href="assets/css/style.css">

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>

    <!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script> -->

</head>

<body>
    <!-- 사이드바 -->
    <%@ include file="sidebar.jsp" %>

    <!-- Right Panel -->
    <div id="right-panel" class="right-panel">

        <!-- 헤더 -->
        <%@ include file="header.jsp" %>

        <!-- <div class="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                        <div class="page-header float-left">
                            <div class="page-title">
                                <h1>커뮤니티상세정보</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="content">
            <div class="animated fadeIn">

                <div class="row justify-content-center">

                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-header"><strong>컴플레인 상세정보</strong></div>
                            <form action="updateComplain" method="post">
                                <div class="card-body card-block">
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">회원아이디</label>
                                        <input value="${complain.memberId}" class="form-control"
                                            name="memberId">
                                    </div>
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">신고글 번호</label>
                                        <input value="${complain.complainId}" class="form-control"
                                            name="complainId">
                                    </div>
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">신고항목</label>
                                        <input value="${complain.complainType}" class="form-control"
                                            name="complainType">
                                    </div>
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">신고받은 글 번호</label>
                                        <input value="${complain.complainTargetId}" class="form-control"
                                            name="complainTargetId">
                                    </div>
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">신고 내용</label>
                                        <input value="${complain.complainContent}" class="form-control"
                                            name="complainContent">
                                    </div>
                                    <!-- <div class="form-group">
                                        <label for="company" class="form-control-label">신고글 작성시간</label>
                                        <input type="text" value="${complain.complainDate}" class="form-control" name="complainDate">
                                    </div> -->
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">신고글 작성시간</label>
                                        <input value="<fmt:formatDate value='${complain.complainDate}' pattern='yyyy-MM-dd' />" class="form-control"
                                            name="complainDate">
                                    </div>
                                    <!-- <div class="form-group">
                                        <label for="company" class="form-control-label">신고글 작성시간</label>
                                        <span class="form-control"> 
                                            <fmt:formatDate value='${complain.complainDate}' pattern='yyyy-MM-dd' />
                                        </span>
                                    </div> -->
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">신고글 처리여부</label>
                                        <select class="form-control" name="complainDone">
                                            <option value="no" <c:if test="${complain.complainDone eq 'no'}">selected</c:if>>no</option>
                                            <option value="yes" <c:if test="${complain.complainDone eq 'yes'}">selected</c:if>>yes</option>
                                        </select>
                                        <!-- <input type="text" value="${complain.complainDone}" class="form-control" name="complainDone"> -->
                                    </div>
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">신고글 답변</label>
                                        <input value="${complain.complainReply}" class="form-control"
                                            name="complainReply">
                                    </div>
                                    <!-- <div class="form-group">
                                        <label for="company" class="form-control-label">신고글 답변 작성시간</label>
                                        <input type="text" value="${complain.complainReplyDate}" class="form-control" name="complainReplyDate">
                                    </div> -->
                                    <div class="form-group"><label for="company"
                                        class=" form-control-label">신고글 답변
                                         작성시간</label><input type="text"
                                        value="<fmt:formatDate value='${complain.complainReplyDate}' pattern='yyyy-MM-dd' />" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">신고받은 글 작성자</label>
                                        <input type="text" value="${complain.complainTargetUser}" class="form-control" name="complainTargetUser">
                                    </div>
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">처리담당자</label>
                                        <input type="text" value="${complain.complainReplyAdmin}" class="form-control" name="complainReplyAdmin">
                                    </div>
                                    <!-- <div class="form-group">
                                        <label for="company" class="form-control-label">처리담당자</label>
                                        <select class="form-control" name="complainReplyAdmin">
                                            <c:forEach items="${memberList}" var="member">
                                                <c:if test="${member.memberGrade eq 'admin'}">
                                                    <option value="${member.memberId}" <c:if test="${complain.complainReplyAdmin eq member.memberId}">selected</c:if>>${member.memberId}</option>
                                                </c:if>
                                            </c:forEach>
                                        </select>
                                    </div> -->
                                    <div class="form-group row justify-content-end">
                                        <div class="col-sm-3">
                                            <button type="submit" class="btn btn-outline-primary">수정</button>
                                            <!-- <a href="deleteComplain?complain_id=${complain.complainId}" class="btn btn-outline-danger"
                                                onclick="return confirm('정말로 삭제하시겠습니까?')">삭제</a> -->
                                            <a href="complain" class="btn btn-outline-secondary">뒤로가기</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div><!-- .animated -->
            </div><!-- .content -->

        <div class="clearfix"></div>

        <%@ include file="footer.jsp" %>

    </div><!-- /#right-panel -->

    <!-- Right Panel -->

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
    <script src="assets/js/main.js"></script>

</body>
</html>
