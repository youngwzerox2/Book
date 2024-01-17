<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>커뮤니티 관리</title>
    <!-- CSS 및 기타 스타일 시트 등을 추가하세요 -->
</head>

<body>
    <!-- 사이드바 -->
    <%@ include file="sidebar.jsp" %>

    <!-- Right Panel -->
    <div id="right-panel" class="right-panel">

        <!-- 헤더 -->
        <%@ include file="header.jsp" %>

        <div class="content">
            <div class="col-md-10 mx-auto">
                <div class="card">
                    <div class="card-header">
                        <strong class="card-title">커뮤니티 신고 리스트</strong>
                    </div>
                    <div class="card-body">
                        <table id="bootstrap-data-table" class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>회원아이디</th>
                                    <th>신고글 번호</th>
                                    <th>신고항목</th>
                                    <th>신고받은 글 번호</th>
                                    <th>신고내용</th>
                                    <th>신고글 작성시간</th>
                                    <th>신고글 처리여부</th>
                                    <th>신고글 답변</th>
                                    <th>신고글 답변 작성시간</th>
                                    <th>신고받은 글 작성자</th>
                                    <th>처리담당자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <c:forEach items="${communityList}" var="community">
                                    <tr>
                                        <td> <span class="name">${community.memberId}</span>
                                        </td>
                                        <td> <span class="name"><a href="communityDetail?complainId=${community.complainId}">${community.complainId}</a></span>
                                        </td>
                                        <td> <span class="name">${community.complainType}</span>
                                        </td>
                                        <td> <span class="name">${community.complainTargetId}</span>
                                        </td>
                                        <td> <span class="name">${community.complainContent}</span>
                                        </td>
                                        <td> <span class="name">${community.complainDate}</span>
                                        </td>
                                        <td> <span class="name">${community.complainDone}</span>
                                        </td>
                                        <td> <span class="name">${community.complainReply}</span>
                                        </td>
                                        <td> <span class="name">${community.complainReplyDate}</span>
                                        </td>
                                        <td> <span class="name">${community.complainTargetUser}</span>
                                        </td>
                                        <td> <span class="name">${community.complainReplyAdmin}</span>
                                        </td>
                                    </tr>
                                </c:forEach>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div><!-- .content -->

        <div class="clearfix"></div>

        <!-- 푸터 -->
        <%@ include file="footer.jsp" %>
    </div><!-- /#right-panel -->

    <!-- Right Panel -->

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
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

</body>
</html>
