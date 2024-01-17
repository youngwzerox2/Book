<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>커뮤니티상세정보</title>
    <!-- CSS 및 기타 스타일 시트 등을 추가하세요 -->
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
                                <h1>커뮤니티상세정보</h1>
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
                            <div class="card-header"><strong>커뮤니티상세정보</strong></div>
                            <form action="updateCommunity" method="post">
                                <div class="card-body card-block">
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">회원아이디</label>
                                        <input type="text" value="${community.memberId}" class="form-control" name="memberId">
                                    </div>
                                    <div class="form-group">
                                        <label for="company" class="form-control-label">신고글 번호</label>
                                        <input type="text" value="${community.complainId}" class="form-control" name="complainId">
                                    </div>
                                    <!-- 나머지 필드도 동일한 방식으로 수정 -->
                                    <!-- ... -->
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-outline-primary">수정</button>
                                    <a href="deleteCommunity?complain_id=${community.complainId}" class="btn btn-outline-danger"
                                        onclick="return confirm('정말로 삭제하시겠습니까?')">삭제</a>
                                    <a href="community" class="btn btn-outline-secondary">뒤로가기</a>
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
