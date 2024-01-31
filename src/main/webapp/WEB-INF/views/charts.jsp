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
          src="http://34.64.182.9:5601/app/dashboards#/view/edf84fe0-e1a0-11e7-b6d5-4dc382ef7f5b?embed=true&_g=(filters:!(),refreshInterval:(pause:!f,value:900000),time:(from:now-7d,to:now))&_a=(description:'Analyze%20mock%20web%20traffic%20log%20data%20for%20Elastic!'s%20website',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:(),vis:(colors:('Avg.%20Bytes':%236ED0E0,'Unique%20Visitors':%230A437C),legendOpen:!f)),gridData:(h:13,i:'2',w:21,x:27,y:11),id:e1d0f010-9ee7-11e7-8711-e7a007dcef99,panelIndex:'2',type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:(),hiddenLayers:!(),isLayerTOCOpen:!f,mapCenter:(lat:42.16337,lon:-88.92107,zoom:3.64),openTOCDetails:!()),gridData:(h:18,i:'4',w:24,x:0,y:49),id:de71f4f0-1902-11e9-919b-ffe5949a18d2,panelIndex:'4',type:map,version:'7.11.1'),(embeddableConfig:(enhancements:(),vis:(defaultColors:('0%20-%2022':'rgb(247,251,255)','22%20-%2044':'rgb(208,225,242)','44%20-%2066':'rgb(148,196,223)','66%20-%2088':'rgb(74,152,201)','88%20-%20110':'rgb(23,100,171)'),legendOpen:!f)),gridData:(h:13,i:'7',w:24,x:0,y:36),id:'935afa20-e0cd-11e7-9d07-1398ccfcefa3',panelIndex:'7',type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:(),mapCenter:!(36.8092847020594,-96.94335937500001),vis:(params:(sort:(columnIndex:!n,direction:!n)))),gridData:(h:12,i:'9',w:21,x:27,y:24),id:'4eb6e500-e1c7-11e7-b6d5-4dc382ef7f5b',panelIndex:'9',type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:(),vis:(colors:('0%20-%20500':%23BF1B00,'1000%20-%201500':%237EB26D,'500%20-%201000':%23F2C96D),defaultColors:('0%20-%20500':'rgb(165,0,38)','1000%20-%201500':'rgb(0,104,55)','500%20-%201000':'rgb(255,255,190)'),legendOpen:!f)),gridData:(h:11,i:'11',w:9,x:10,y:0),id:'69a34b00-9ee8-11e7-8711-e7a007dcef99',panelIndex:'11',type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:()),gridData:(h:12,i:'13',w:27,x:0,y:24),id:'42b997f0-0c26-11e8-b0ec-3bb475f6b6ff',panelIndex:'13',type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:()),gridData:(h:31,i:'14',w:24,x:24,y:36),id:'7cbd2350-2223-11e8-b802-5bcf64c2cfb4',panelIndex:'14',type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:()),gridData:(h:13,i:'15',w:27,x:0,y:11),id:'314c6f60-2224-11e8-b802-5bcf64c2cfb4',panelIndex:'15',type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:()),gridData:(h:11,i:'16',w:15,x:19,y:0),id:'24a3e970-4257-11e8-b3aa-73fdaf54bfc9',panelIndex:'16',type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:(),vis:(legendOpen:!f)),gridData:(h:11,i:'17',w:14,x:34,y:0),id:'14e2e710-4258-11e8-b3aa-73fdaf54bfc9',panelIndex:'17',type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:()),gridData:(h:11,i:'18',w:10,x:0,y:0),id:'47f2c680-a6e3-11e8-94b4-c30c0228351b',panelIndex:'18',type:visualization,version:'7.11.1')),query:(language:kuery,query:''),tags:!(),timeRestore:!t,title:'%5BLogs%5D%20Web%20Traffic',viewMode:view)&hide-filter-bar=true"
          height="600"
          width="800"
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
