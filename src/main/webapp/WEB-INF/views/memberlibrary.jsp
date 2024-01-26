<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>공공도서관 위치(회원페이지)</title>
    <style>
        #map {
            width: 90%;
            height: 80vh;
            margin: auto;
            margin-top: 10vh;
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <button id="showPositionButton">현재 위치 표시</button>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=48ce9248aa11f6b0e1b6054fdeaa1e8c&libraries=services"></script>
    
    <script>
        // 서버에서 전달한 도서관 위치 데이터
        const libraryLocationsString = '${libraryLocations}'; // 싱글 쿼테이션으로 감싸도록 수정

        // JSON 문자열에서 순수한 JSON 부분만 추출
        const startIndex = libraryLocationsString.indexOf('[');
        const endIndex = libraryLocationsString.lastIndexOf(']');
        const pureJsonString = libraryLocationsString.substring(startIndex, endIndex + 1).trim();

        // JSON 문자열을 JavaScript 객체로 변환
        const parsedLibraryLocations = JSON.parse(pureJsonString);
    
        $(document).ready(function() {
            // Kakao Maps SDK 로드
            kakao.maps.load(() => {
                // 지도 초기화
                const container = document.getElementById('map');
                const options = {
                    center: new kakao.maps.LatLng(37.5665, 126.9780), // 지도의 초기 중심 좌표 설정
                    level: 5, // 초기 줌 레벨 설정
                };
                const map = new kakao.maps.Map(container, options);

                // 사용자의 현재 위치 표시
                const showPositionButton = document.getElementById('showPositionButton');
                showPositionButton.addEventListener('click', function() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function(position) {
                            const userPosition = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);

                            // 사용자 위치에 마커 추가
                            const userMarker = new kakao.maps.Marker({
                                position: userPosition,
                                map: map,
                                title: '현재 위치',
                                image: new kakao.maps.MarkerImage(
                                    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
                                    new kakao.maps.Size(30, 37),
                                    { offset: new kakao.maps.Point(15, 37) }
                                ),
                            });

                            // 사용자 위치로 지도 이동
                            map.panTo(userPosition);
                        });
                    } else {
                        alert('이 브라우저는 geolocation을 사용할 수 없어요..');
                    }
                });

                // 인포윈도우를 생성하고 표시하는 함수
                const infowindow = new kakao.maps.InfoWindow({
                    zIndex: 1,
                });

                function showInfowindow(marker, location) {
                    const content = `<div style="padding:5px;">도서관 이름: ${location.libraryName}</div>`;
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                }

                // 각 도서관 위치에 마커 추가
                parsedLibraryLocations.forEach(location => {
                    const markerPosition = new kakao.maps.LatLng(location.libraryLa, location.libraryLo);

                    // 마커 생성
                    const marker = new kakao.maps.Marker({
                        position: markerPosition,
                        map: map,
                        title: location.libraryName,
                    });

                    
                    // 마커에 마우스 오버 이벤트 추가
                    // kakao.maps.event.addListener(marker, 'mouseover', function () {
                    //     const content = `<div style="padding:5px;">도서관 이름: ${location.libraryName}</div>`;
                    //     showInfowindow(marker, content); // 마우스 오버 시 인포윈도우 표시 함수 호출
                    // });
                    // console.log(location.libraryName);

                    // 마커에 마우스 아웃 이벤트 추가
                    kakao.maps.event.addListener(marker, 'mouseout', function() {
                        infowindow.close();
                    });
                });
            });
        });
    </script>
</body>
</html>
