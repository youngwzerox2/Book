<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>회원 상세 정보</title>
    <!-- 필요한 경우 추가 스타일 또는 스크립트 포함 -->
</head>
<body>

<h2>회원 상세 정보</h2>

<table border="1">
    <thead>
        <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>닉네임</th>
            <th>프로필사진</th>
            <th>성별</th>
            <th>생년월일</th>
            <th>전화번호</th>
            <th>책장방문허용여부</th>
            <th>등급</th>
            <th>프리미엄 결제 여부</th>
            <th>프리미엄 결제 일자</th>
            <th>프리미엄 종료 일자</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach var="member" items="${memberList}">
            <tr>
                <td>${member.id}1</td>
                <td>${member.name}2</td>
                <td>${member.nickname}3</td>
                <td><img src="${member.profilePicture}" alt="프로필 사진" height="50"></td>
                <td>${member.gender}4</td>
                <td>${member.birthdate}5</td>
                <td>${member.phoneNumber}6</td>
                <td>${member.allowBookshelfVisit}7</td>
                <td>${member.grade}8</td>
                <td>${member.premiumPaymentStatus}9</td>
                <td>${member.premiumPaymentDate}10</td>
                <td>${member.premiumEndDate}11</td>
            </tr>
        </c:forEach>
    </tbody>
</table>

</body>
</html>
