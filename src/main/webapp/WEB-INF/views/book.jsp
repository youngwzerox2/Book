<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

            <!doctype html>
            <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
            <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
            <!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
            <!--[if gt IE 8]><!-->
            <html class="no-js" lang=""> <!--<![endif]-->

            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title>도서 관리</title>
                <meta name="description" content="Ela Admin - HTML5 Admin Template">
                <meta name="viewport" content="width=device-width, initial-scale=1">

                <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png">
                <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png">

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
                <link rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
                <link rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css">
                <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css">
                <link rel="stylesheet" href="assets/css/cs-skin-elastic.css">
                <link rel="stylesheet" href="assets/css/lib/datatable/dataTables.bootstrap.min.css">
                <link rel="stylesheet" href="assets/css/style.css">

                <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet'
                    type='text/css'>

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
                                <h1>도서관리</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

                            <div class="content">
                                <div class="animated fadeIn">
                                    <div class="row">

                                        <div class="col-md-8 mx-auto">
                                            <div class="card">
                                                <div class="card-header">
                                                    <strong class="card-title">도서리스트</strong>
                                                </div>
                                                <div class="card-body">
                                                    <div class="table-responsive table-responsive-sm">
                                                        <table id="bootstrap-data-table"
                                                            class="table table-striped table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <!-- <th>번호</th> -->
                                                                    <th>랭킹</th>
                                                                    <th>책 제목</th>
                                                                    <!-- <th>책 저자</th> -->
                                                                    <!-- <th>출판사</th> -->
                                                                    <!-- <th>발행년도</th> -->
                                                                    <th>청구기호 13자리</th>
                                                                    <th>청구기호 5자리</th>
                                                                    <!-- <th>권수</th> -->
                                                                    <!-- <th>분류번호</th> -->
                                                                    <!-- <th>책 분류</th> -->
                                                                    <!-- <th>대출권수</th> -->
                                                                    <th>책 이미지 링크</th>
                                                                    <th>책 데이터 링크</th>
                                                                    <th>책 소개</th>
                                                                </tr>
                                                            </thead style="background-color: rgb(25, 216, 121);">
                                                            <tbody>
                                                                <c:forEach items="${bookList }" var="book">
                                                                    <tr>
                                                                        <!-- <td>${book.no}</td> -->
                                                                        <td>${book.ranking}</td>
                                                                        <td>
                                                                            <c:choose>
                                                                                <c:when
                                                                                    test="${fn:length(book.bookname) > 15}">
                                                                                    ${fn:substring(book.bookname, 0,
                                                                                    15)}...
                                                                                </c:when>
                                                                                <c:otherwise>
                                                                                    ${book.bookname}
                                                                                </c:otherwise>
                                                                            </c:choose>
                                                                        </td>
                                                                        <!-- <td>${book.authors}</td> -->
                                                                        <!-- <td>${book.publisher}</td> -->
                                                                        <!-- <td>${book.publicationYear}</td> -->
                                                                        <td><a href="bookDetail?bookIsbn13=${book.bookIsbn13}">${book.bookIsbn13}</a></td>
                                                                        <td>${book.additionSymbol}</td>
                                                                        <!-- <td>${book.vol}</td> -->
                                                                        <!-- <td>${book.classNo}</td> -->
                                                                        <!-- <td>${book.classNm}</td> -->
                                                                        <!-- <td>${book.loanCount}</td> -->
                                                                        <td><a href="${book.bookImageUrl}" target="_blank">책 이미지 링크</a></td>
                                                                        <td><a href="${book.bookDtlUrl}" target="_blank">책 데이터 링크</a></td>
                                                                        <td>
                                                                            <c:choose>
                                                                                <c:when
                                                                                    test="${fn:length(book.description) > 30}"> ${fn:substring(book.description, 0, 30)}...
                                                                                </c:when>
                                                                                <c:otherwise>
                                                                                    ${book.description}
                                                                                </c:otherwise>
                                                                            </c:choose>
                                                                        </td>
                                                                    </tr>
                                                                </c:forEach>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="btn btn-outline-primary btn-sm float-right" onclick="writeAction()">도서 등록</button>
                                        </div>
                                    </div><!-- .animated -->
                                       
                                </div><!-- .content -->



                                <div class="clearfix"></div>

                                <!-- 푸터 -->
                                <%@ include file="footer.jsp" %>

                            </div><!-- /#right-panel -->

                            <!-- Right Panel -->

                            <!-- Scripts -->
                            <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
                            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
                            <script
                                src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
                            <script
                                src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
                            <script src="assets/js/main.js"></script>


                            <script src="assets/js/lib/data-table/datatables.min.js"></script>
                            <script src="assets/js/lib/data-table/dataTables.bootstrap.min.js"></script>
                            <script src="assets/js/lib/data-table/dataTables.buttons.min.js"></script>
                            <script src="assets/js/lib/data-table/buttons.bootstrap.min.js"></script>
                            <script src="assets/js/lib/data-table/jszip.min.js"></script>
                            <script src="assets/js/lib/data-table/vfs_fonts.js"></script>
                            <script src="assets/js/lib/data-table/buttons.html5.min.js"></script>
                            <script src="assets/js/lib/data-table/buttons.print.min.js"></script>
                            <script src="assets/js/lib/data-table/buttons.colVis.min.js"></script>
                            <script src="assets/js/init/datatables-init.js"></script>


                            <script type="text/javascript">
                                $(document).ready(function () {
                                    $('#bootstrap-data-table-export').DataTable();
                                });
                            </script>

                            <script>
                                function writeAction() {
                                    // AJAX를 사용하여 서버에 요청을 보냄
                                    $.ajax({
                                        type: "POST",
                                        url: "/pythonController/executePythonScript",  // PythonController의 매핑 주소
                                        success: function(response) {
                                            console.log("서버 응답:", response);  // 서버에서 받은 응답을 콘솔에 출력 (optional)
                                        },
                                        error: function(error) {
                                            console.error(error);  // 에러 처리 (optional)
                                        }
                                    });
                                }
                            </script>


            </body>

            </html>