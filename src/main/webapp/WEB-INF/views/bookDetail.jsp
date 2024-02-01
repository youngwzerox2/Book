<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<!DOCTYPE html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>도서상세정보</title>
    <meta name="description" content="Ela Admin - HTML5 Admin Template">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">

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

        <div class="content">
            <div class="animated fadeIn">
                <div class="row justify-content-center">

                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-header"><strong>도서상세정보</strong></div>
                            <form action="updateBook" method="post">
                                <div class="card-body card-block">
                                    <div class="form-group"><label for="no" class="form-control-label">번호</label><input
                                            type="text" value="${book.no}" class="form-control" name="no">
                                    </div>
                                    <div class="form-group"><label for="ranking" class="form-control-label">랭킹</label><input
                                            type="text" value="${book.ranking}" class="form-control" name="ranking">
                                    </div>
                                    <div class="form-group"><label for="bookname" class="form-control-label">책
                                            제목</label><input type="text" value="${book.bookname}"
                                            class="form-control" name="bookname">
                                    </div>
                                    <div class="form-group"><label for="authors" class="form-control-label">책
                                            저자</label><input type="text" value="${book.authors}"
                                            class="form-control" name="authors">
                                    </div>
                                    <div class="form-group"><label for="publisher" class="form-control-label">출판사</label><input
                                            type="text" value="${book.publisher}" class="form-control" name="publisher">
                                    </div>
                                    <div class="form-group"><label for="publicationYear"
                                            class="form-control-label">발행년도</label><input type="text"
                                            value="${book.publicationYear}" class="form-control"
                                            name="publicationYear">
                                    </div>
                                    <div class="form-group"><label for="bookIsbn13" class="form-control-label">청구기호
                                            13자리</label><input type="text" value="${book.bookIsbn13}"
                                            class="form-control" name="bookIsbn13">
                                    </div>
                                    <div class="form-group"><label for="additionSymbol"
                                            class="form-control-label">청구기호 5자리</label><input type="text"
                                            value="${book.additionSymbol}" class="form-control" name="additionSymbol">
                                    </div>
                                    <div class="form-group"><label for="vol" class="form-control-label">권수</label><input
                                            type="text" value="${book.vol}" class="form-control" name="vol">
                                    </div>
                                    <div class="form-group"><label for="classNo" class="form-control-label">분류번호</label><input
                                            type="text" value="${book.classNo}" class="form-control" name="classNo">
                                    </div>
                                    <div class="form-group"><label for="classNm" class="form-control-label">책
                                            분류</label><input type="text" value="${book.classNm}"
                                            class="form-control" name="classNm">
                                    </div>
                                    <div class="form-group"><label for="loanCount"
                                            class="form-control-label">대출권수</label><input type="text"
                                            value="${book.loanCount}" class="form-control" name="loanCount">
                                    </div>
                                    <div class="form-group"><label for="bookImageUrl"
                                            class="form-control-label">책 이미지 링크</label><input type="text"
                                            value="${book.bookImageUrl}" class="form-control" name="bookImageUrl">
                                    </div>
                                    <div class="form-group"><label for="bookDtlUrl"
                                            class="form-control-label">책 데이터 링크</label><input type="text"
                                            value="${book.bookDtlUrl}" class="form-control" name="bookDtlUrl">
                                    </div>
                                    <div class="form-group">
                                        <label for="description" class="form-control-label">책 소개</label>
                                        <textarea class="form-control" name="description">${book.description}</textarea>
                                    </div>
                                <div class="form-group row justify-content-end">
                                    <div class="col-sm-3">
                                        <a href="book" class="btn btn-outline-secondary">뒤로가기</a>
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
