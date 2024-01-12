<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>1:1문의 페이지</title>
        <!-- <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"> -->
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
                            <h2>1:1문의 관리</h2>

                            <div class="accordion" id="faqAccordion">

                                <div class="card">
                                    <c:forEach items="${askList }" var="ask"  varStatus="loop">
                                    <div class="card-header" id="question${loop.index}">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse"
                                                data-target="#answer${loop.index}" aria-expanded="true" aria-controls="answer${loop.index}">
                                               문의날짜 : ${ask.ask_date} / 문의아이디 : ${ask.member_id} / ${ask.ask_content} 
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="answer${loop.index}" class="collapse show" aria-labelledby="question${loop.index}"
                                        data-parent="#faqAccordion">
                                        <div class="card-body">
                                            <a href="askDetail?ask_id=${ask.ask_id}">답변날짜 : ${ask.ask_reply_time} / 답변담당자 : ${ask.ask_reply_admin} / ${ask.ask_reply_content}</a>
                                        </div>
                                    </div>
                                    </c:forEach>
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-outline-primary btn-sm float-right" onclick="writeAction()">글등록</button>

                    </div><!-- .content -->
                    <!-- 푸터 -->
                    <%@ include file="footer.jsp" %>

            </div><!-- /#right-panel -->

            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

            <script>
                function writeAction() {
                    window.location.href = 'insertAsk';
                }
            </script>

    </body>

    </html>