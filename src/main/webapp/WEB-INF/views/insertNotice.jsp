<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>공지사항 등록 페이지</title>
        <!-- 부트스트랩 CDN 사용 -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">

        <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png">
        <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png">

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
                            <h2>공지사항 등록 페이지</h2>
                            <hr>

                            <div class="card">
                                <form action="insertNotice" method="post">
                                    <input name="noticeNumber" type="hidden" value="${notice.noticeNumber}" />
                                    <input name="noticeDate" type="hidden" value="${notice.noticeDate}" />
                                    <input name="noticeDisplay" type="hidden" value="${notice.noticeDisplay}" />

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
                                            <textarea class="form-control" name="noticeContent" style="height: 200px;">${notice.noticeContent}</textarea>
                                        </div>
                                        <div class="form-group"><label for="company"
                                            class=" form-control-label">담당자아이디</label><input type="text"
                                            class="form-control" name="memberId">
                                        </div>
                                    </div>
                                    <div class="row justify-content-end">
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-outline-primary">등록</button>
                                                <a href="notice" class="btn btn-outline-secondary">뒤로가기</a>
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

                 
    </body>

    </html>