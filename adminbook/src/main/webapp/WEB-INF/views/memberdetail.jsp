<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

    <!doctype html>
    <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
    <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
    <!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
    <!--[if gt IE 8]><!-->
    <html class="no-js" lang=""> <!--<![endif]-->

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>회원상세정보</title>
        <meta name="description" content="Ela Admin - HTML5 Admin Template">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png">
        <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css">
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

                    <div class="breadcrumbs">
                        <div class="breadcrumbs-inner">
                            <div class="row m-0">
                                <div class="col-sm-4">
                                    <div class="page-header float-left">
                                        <div class="page-title">
                                            <h1>회원상세정보</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <div class="animated fadeIn">

                            <div class="row">

                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-header"><strong>회원상세정보</strong></div>
                                        <form action="updateMember" method="post">
                                            <div class="card-body card-block">
                                                <!-- <input type="hidden" name="member_id" value="${member.member_id}"> -->
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">회원아이디</label><input
                                                        value="${member.member_id}" class="form-control"
                                                        name="member_id"></div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">이름</label><input type="text"
                                                        value="${member.member_name}" class="form-control"></div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">이메일</label><input type="text"
                                                        value="${member.member_email}" class="form-control"></div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">닉네임</label><input type="text"
                                                        value="${member.member_nickname}" class="form-control"></div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">성별</label><input type="text"
                                                        value="${member.member_gender}" class="form-control"></div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">생년월일</label><input type="text"
                                                        value="${member.member_birthday}" class="form-control"></div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">전화번호</label><input type="text"
                                                        value="${member.member_tel}" class="form-control"></div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">가입일</label><input type="text"
                                                        value="${member.join_date}" class="form-control"></div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">탈퇴일</label><input type="text"
                                                        value="${member.quit_date}" class="form-control"></div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">책장방문허용여부</label><input
                                                        value="${member.member_visit_agree}" class="form-control"></div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">회원상태</label>
                                                        <select class="form-control" name="member_grade">
                                                            <option value="admin" <c:if test="${member.member_grade eq 'admin'}">selected</c:if>>admin</option>
                                                            <option value="basic" <c:if test="${member.member_grade eq 'basic'}">selected</c:if>>basic</option>
                                                            <option value="withdrawal" <c:if test="${member.member_grade eq 'withdrawal'}">selected</c:if>>withdrawal</option>
                                                            <option value="blacklist" <c:if test="${member.member_grade eq 'blacklist'}">selected</c:if>>blacklist</option>
                                                        </select>
                                                </div>  
                                                <div class="form-group"><label for="company"
                                                    class=" form-control-label">신고건수</label><input
                                                    value="${member.member_visit_agree}" class="form-control"></div>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-outline-primary">수정</button>
                                                <a href="deleteMember?member_id=${member.member_id}"
                                                    class="btn btn-outline-danger" onclick="return confirm('정말로 삭제하시겠습니까?')">삭제</a>
                                                <a href="member" class="btn btn-outline-secondary">뒤로가기</a>
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
            <script
                src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
            <script src="assets/js/main.js"></script>


    </body>

    </html>