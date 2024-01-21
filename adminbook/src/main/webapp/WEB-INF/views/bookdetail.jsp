<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

    <!doctype html>
    <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
    <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
    <!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
    <!--[if gt IE 8]><!-->
    <html class="no-js" lang=""> <!--<![endif]-->

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>도서상세정보</title>
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
                                            <h1>도서상세정보</h1>
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
                                        <div class="card-header"><strong>도서상세정보</strong></div>
                                        <form action="updateBook" method="post">
                                            <div class="card-body card-block">
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">번호</label><input type="text"
                                                        value="${book.NO}" class="form-control" name="NO">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">랭킹</label><input type="text"
                                                        value="${book.ranking}" class="form-control" name="ranking">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">책
                                                        제목</label><input type="text" value="${book.bookname}"
                                                        class="form-control" name="bookname">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">책
                                                        저자</label><input type="text" value="${book.authors}"
                                                        class="form-control">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">출판사</label><input type="text"
                                                        value="${book.publisher}" class="form-control">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">발행년도</label><input type="text"
                                                        value="${book.publication_year}" class="form-control">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">청구기호 13자리</label><input type="text"
                                                        value="${book.book_isbn13}" class="form-control">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">청구기호 5자리</label><input type="text"
                                                        value="${book.addition_symbol}" class="form-control">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">권수</label><input type="text"
                                                        value="${book.vol}" class="form-control" name="vol">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">분류번호</label><input type="text"
                                                        value="${book.class_no}" class="form-control">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">책
                                                        분류</label><input type="text" value="${book.class_nm}"
                                                        class="form-control">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">대출권수</label><input type="text"
                                                        value="${book.loan_count}" class="form-control">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">책
                                                        이미지 링크</label><input type="text" value="${book.bookImageURL}"
                                                        class="form-control">
                                                </div>
                                                <div class="form-group"><label for="company"
                                                        class=" form-control-label">책
                                                        데이터 링크</label><input type="text" value="${book.bookDtlUrl}"
                                                        class="form-control">
                                                </div>
                                                <div class="form-group">
                                                    <label for="company" class="form-control-label">책 소개</label>
                                                    <textarea class="form-control">${book.description}</textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-outline-primary">수정</button>
                                                <a href="deleteBook?NO=${book.NO}" class="btn btn-outline-danger"
                                                    onclick="return confirm('정말로 삭제하시겠습니까?')">삭제</a>
                                                <a href="book" class="btn btn-outline-secondary">뒤로가기</a>
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