<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>공공도서관 위치(관리자페이지)</title>
        <style>
            #map {
                width: 100%;
                height: 80vh;
            }
        </style>
    </head>

    <body>

        <!-- 사이드바 -->
        <%@ include file="sidebar.jsp" %>

            <!-- Right Panel -->

            <div id="right-panel" class="right-panel">

                <!-- 헤더 -->
                <%@ include file="header.jsp" %>
                    <div class="content">

                        <div id="map"></div>
                        <input type="file" id="fileInput" accept=".csv">
                        <button id="showPositionButton">현재 위치 표시</button>

                    </div><!-- .content -->
                    <!-- 푸터 -->
                <%@ include file="footer.jsp" %>

            </div><!-- /#right-panel -->

            <script
                src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=48ce9248aa11f6b0e1b6054fdeaa1e8c&libraries=services"></script>
            <script src="assets/js/adminlibrary.js"></script>
    </body>

    </html>