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
          src="http://34.64.182.9:5601/app/dashboards#/view/38840fe0-c011-11ee-9ede-8b4f3ce6d616?embed=true&_g=(filters:!(),refreshInterval:(pause:!f,value:900000),time:(from:now-1w,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:()),gridData:(h:15,i:a8b1d46e-404e-4e60-ba36-7447f1029985,w:16,x:1,y:0),id:'05c31350-c019-11ee-9ede-8b4f3ce6d616',panelIndex:a8b1d46e-404e-4e60-ba36-7447f1029985,type:lens,version:'7.11.1'),(embeddableConfig:(enhancements:(),vis:!n),gridData:(h:15,i:'2a68b341-8593-4574-bb42-0cea438d71fc',w:15,x:17,y:0),id:'3cb8ad50-c01b-11ee-9ede-8b4f3ce6d616',panelIndex:'2a68b341-8593-4574-bb42-0cea438d71fc',type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:'0dfc1820-12dc-46b9-b152-4367628c068a',w:16,x:32,y:0),id:ddbf3fa0-c027-11ee-9ede-8b4f3ce6d616,panelIndex:'0dfc1820-12dc-46b9-b152-4367628c068a',type:lens,version:'7.11.1'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:'379ca24c-3ccc-4538-99c4-905931b23226',w:23,x:1,y:15),id:cc0064b0-c018-11ee-9ede-8b4f3ce6d616,panelIndex:'379ca24c-3ccc-4538-99c4-905931b23226',type:lens,version:'7.11.1'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:a5579e8f-f4bd-4745-b7ab-1243032c979b,w:24,x:24,y:15),id:'7a23e700-c01a-11ee-9ede-8b4f3ce6d616',panelIndex:a5579e8f-f4bd-4745-b7ab-1243032c979b,type:lens,version:'7.11.1'),(embeddableConfig:(),gridData:(h:18,i:'7125a1fd-ccb0-4b23-b555-87c7634f212e',w:47,x:1,y:30),id:'4c25baf0-c028-11ee-9ede-8b4f3ce6d616',panelIndex:'7125a1fd-ccb0-4b23-b555-87c7634f212e',type:lens,version:'7.11.1'),(embeddableConfig:(),gridData:(h:16,i:'552b3920-8a64-4ecb-b2b6-0a2857b3cfda',w:14,x:1,y:48),id:'94a7e500-c028-11ee-9ede-8b4f3ce6d616',panelIndex:'552b3920-8a64-4ecb-b2b6-0a2857b3cfda',type:lens,version:'7.11.1'),(embeddableConfig:(enhancements:()),gridData:(h:16,i:'052bcbc9-daa3-48a9-8c3d-ee5baf0be96f',w:33,x:15,y:48),id:'0f669630-c01d-11ee-9ede-8b4f3ce6d616',panelIndex:'052bcbc9-daa3-48a9-8c3d-ee5baf0be96f',type:lens,version:'7.11.1')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:ReadMe,viewMode:view)&hide-filter-bar=true"
          height="1900"
          width="100%"
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
