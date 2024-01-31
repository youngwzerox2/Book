<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
  <!--<![endif]-->
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>통계</title>
    <meta name="description" content="Ela Admin - HTML5 Admin Template" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png" />
    <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css" />
    <link rel="stylesheet" href="assets/css/cs-skin-elastic.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script> -->
    <link href="https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/jqvmap@1.5.1/dist/jqvmap.min.css" rel="stylesheet" />
  </head>

  <body>
    <!-- 사이드바 -->
    <%@ include file="sidebar.jsp" %>
    <!-- Right Panel -->
    <div id="right-panel" class="right-panel">
      <!-- 헤더 -->
      <%@ include file="header.jsp" %>
      <!-- Breadcrumbs-->
      <div class="breadcrumbs">
        <div class="breadcrumbs-inner">
          <div class="row m-0">
            <div class="col-sm-4">
              <div class="page-header float-left">
                <div class="page-title">
                  <h1>통계</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.breadcrumbs-->
      <!-- Content -->
      <div class="content">
        <iframe
          src="http://localhost:5601/app/dashboards#/view/11161b10-be95-11ee-ba2c-59b19abbc5d8?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now%2Fw,to:now%2Fw))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:''),timeRestore:!f,title:'first%20sidol-board',viewMode:view)&hide-filter-bar=true"
          height="2000"
          width="1600"
        ></iframe>
      </div>
      <!-- /.content -->
      <div class="clearfix"></div>
      <!-- Footer -->
      <%@ include file="footer.jsp" %>
      <!-- /.site-footer -->
    </div>
    <!-- /#right-panel -->

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flot-charts@0.8.3/excanvas.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flot-charts@0.8.3/jquery.flot.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.pie.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.time.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.stack.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.resize.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.crosshair.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flot.curvedlines@1.1.1/curvedLines.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery.flot.tooltip@0.9.0/js/jquery.flot.tooltip.min.js"></script>
    <script src="assets/js/init/flot-chart-init.js"></script>
    <!--  Chart js
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.7.3/dist/Chart.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flot-spline@0.0.1/js/jquery.flot.spline.min.js"></script>-->
  </body>
</html>
