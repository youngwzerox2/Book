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
            <title>메인페이지</title>
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
            <link rel="stylesheet" href="assets/css/style.css">
            <!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script> -->
            <link href="https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.css" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/jqvmap@1.5.1/dist/jqvmap.min.css" rel="stylesheet">

            <link href="https://cdn.jsdelivr.net/npm/weathericons@2.1.0/css/weather-icons.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.css" rel="stylesheet" />



            <style>
                #weatherWidget .currentDesc {
                    color: #ffffff !important;
                }

                .traffic-chart {
                    min-height: 335px;
                }

                #flotPie1 {
                    height: 150px;
                }

                #flotPie1 td {
                    padding: 3px;
                }

                #flotPie1 table {
                    top: 20px !important;
                    right: -10px !important;
                }

                .chart-container {
                    display: table;
                    min-width: 270px;
                    text-align: left;
                    padding-top: 10px;
                    padding-bottom: 10px;
                }

                #flotLine5 {
                    height: 105px;
                }

                #flotBarChart {
                    height: 150px;
                }

                #cellPaiChart {
                    height: 160px;
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
                        <!-- Content -->
                        <div class="content">
                            <!-- Animated -->
                            <div class="animated fadeIn">
                                <!-- Widgets  -->
                                <div class="row">

                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="stat-widget-five">
                                                    <div class="stat-icon dib flat-color-3">
                                                        <i class="pe-7s-browser"></i>
                                                    </div>
                                                    <div class="stat-content">
                                                        <div class="text-left dib">
                                                            <div class="stat-heading">오늘 총 매출</div>
                                                            <div class="stat-text">390000 원</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="stat-widget-five">
                                                    <div class="stat-icon dib flat-color-4">
                                                        <i class="pe-7s-users"></i>
                                                    </div>
                                                    <div class="stat-content">
                                                        <div class="text-left dib">
                                                            <div class="stat-heading">오늘 접속자 수</div>
                                                            <div class="stat-text">2986</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="stat-widget-five">
                                                    <div class="stat-icon dib flat-color-4">
                                                        <i class="pe-7s-users"></i>
                                                    </div>
                                                    <div class="stat-content">
                                                        <div class="text-left dib">
                                                            <div class="stat-heading">신규 가입자 수</div>
                                                            <div class="stat-text">45</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /Widgets -->

                                <div class="row">


                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h3>문의 건수</h3>
                                                <canvas id="myChart"
                                                    style="max-height:35vh; max-width: 25vw; float: left;"></canvas>
                                            </div>
                                        </div><!-- /# card -->
                                    </div><!-- /# column -->


                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h3>연령대 분석</h3>
                                                <canvas id="pie-chart"
                                                    style="max-height:35vh; max-width:25vw; float: left;"></canvas>
                                            </div>
                                        </div><!-- /# card -->
                                    </div><!-- /# column -->

                                </div><!-- row -->

                                <div class="row">

                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h3>도서 인기 랭킹</h3>
                                                <canvas id="line-chart"
                                                    style="max-height:35vh; max-width:25vw; float: left;"></canvas>
                                            </div>
                                        </div><!-- /# card -->
                                    </div><!-- /# column -->

                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-header">
                                                <strong class="card-title">제재 회원 명단</strong>
                                            </div>
                                            <div class="card-body" style="max-height: 400px; overflow-y: auto;">
                                                <table class="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">아이디</th>
                                                            <th scope="col">이름</th>
                                                            <th scope="col">제재 날짜</th>
                                                            <th scope="col">신고건수</th>
                                                            <th scope="col">회원상태</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <c:forEach items="${memberList }" var="member" varStatus="loop">
                                                            <c:if test="${member.memberGrade eq 'blacklist'}">
                                                                <tr>
                                                                    <td>${loop.index + 1}</td>
                                                                    <td><a
                                                                            href="memberDetail?memberId=${member.memberId}">${member.memberId}</a>
                                                                    </td>
                                                                    <td>${member.memberName}</td>
                                                                    <td>${member.quitDate}</td>
                                                                    <td>${member.memberGrade}</td>
                                                                    <td>${member.memberGrade}</td>
                                                                </tr>
                                                            </c:if>
                                                        </c:forEach>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>


                                    <canvas id="bar-chart-horizontal" width="600" height="250"></canvas>

                                </div><!-- row -->


                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="mb-3">문의 건수</h4>
                                                <div class="flot-container">
                                                    <div id="flotBar" style="width:100%;height:275px;"></div>
                                                </div>
                                            </div>
                                        </div><!-- /# card -->
                                    </div><!-- /# column -->

                                    <div class="col-lg-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <table class="table">
                                                    <thead class="thead-dark">
                                                        <tr>
                                                            <th scope="col">제재 커뮤니티 리스트</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>58</td>
                                                        </tr>
                                                        <tr>
                                                            <td>58</td>
                                                        </tr>
                                                        <tr>
                                                            <td>58</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div><!-- /# card -->
                                    </div><!-- /# column -->

                                    <div class="col-lg-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="mb-3">연령대 분석</h4>
                                                <div class="flot-container">
                                                    <div id="flot-pie" class="flot-pie-container"></div>
                                                </div>
                                            </div>
                                        </div><!-- /# card -->
                                    </div><!-- /# column -->
                                </div><!-- /# row -->
                            </div><!-- .animated -->
                        </div>
                        <!-- /.content -->

                        <!-- Content -->
                        <div class="content" style="display:none;">
                            <!-- Animated -->
                            <div class="animated fadeIn">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="mb-3">Real Chart</h4>
                                                <div class="flot-container">
                                                    <div id="cpu-load" class="cpu-load"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- /# column -->

                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="mb-3">Line Chart</h4>
                                                <div class="flot-container">
                                                    <div id="flot-line" class="flot-line"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- /# column -->
                                </div><!-- /# row -->

                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="mb-3">Line Chart</h4>
                                                <div class="flot-container">
                                                    <div id="chart1" style="width:100%;height:275px;"></div>
                                                </div>
                                            </div>
                                        </div><!-- /# card -->
                                    </div><!-- /# column -->
                                </div><!-- /# row -->
                            </div><!-- .animated -->
                        </div>
                        <!-- /.content -->

                        <!-- Content -->
                        <div class="content">
                            <!-- Animated -->
                            <div class="animated fadeIn">

                                <div class="row">

                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-header">
                                                <strong class="card-title">제재 회원 명단</strong>
                                            </div>
                                            <div class="card-body">
                                                <table class="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">아이디</th>
                                                            <th scope="col">이름</th>
                                                            <th scope="col">제재 날짜</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>그해 우리는</td>
                                                            <td>고오 작가</td>
                                                            <td>24.1.21</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>스물다섯 스물하나</td>
                                                            <td>비비</td>
                                                            <td>23.12.21</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>마이 데몬</td>
                                                            <td>정구원</td>
                                                            <td>23.11.21</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>

                                </div><!-- /# row -->


                            </div><!-- .animated -->
                        </div><!-- /.content -->

                        <%@ include file="footer.jsp" %>

                </div>
                <!-- 푸터 -->

                <!-- /#right-panel -->
                <!-- Scripts -->
                <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
                <script src="assets/js/main.js"></script>

                <!-- flot 차트 -->
                <script src="https://cdn.jsdelivr.net/npm/flot-charts@0.8.3/excanvas.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/flot-charts@0.8.3/jquery.flot.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.pie.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.time.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.stack.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.resize.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.crosshair.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/flot.curvedlines@1.1.1/curvedLines.min.js"></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/jquery.flot.tooltip@0.9.0/js/jquery.flot.tooltip.min.js"></script>
                <script src="assets/js/init/flot-chart-init.js"></script>

                <!--  Chart js -->
                <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js@2.7.3/dist/Chart.bundle.min.js"></script> -->
                <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
                <script src="assets/js/mainchart.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


                <!--Chartist Chart-->
                <script src="https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.js"></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/chartist-plugin-legend@0.6.2/chartist-plugin-legend.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/flot-spline@0.0.1/js/jquery.flot.spline.min.js"></script>

                <script src="https://cdn.jsdelivr.net/npm/simpleweather@3.1.0/jquery.simpleWeather.min.js"></script>
                <script src="assets/js/init/weather-init.js"></script>

                <script src="https://cdn.jsdelivr.net/npm/moment@2.22.2/moment.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.js"></script>
                <script src="assets/js/init/fullcalendar-init.js"></script>

                <script>
                    new Chart(document.getElementById("bar-chart-horizontal"), {
                        type: 'horizontalBar',
                        data: {
                            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                            datasets: [
                                {
                                    label: "Population (millions)",
                                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                                    data: [2478, 5267, 734, 784, 433]
                                }
                            ]
                        },
                        options: {
                            legend: { display: false },
                            title: {
                                display: true,
                                text: 'Predicted world population (millions) in 2050'
                            }
                        }
                    });
                </script>

        </body>

        </html>