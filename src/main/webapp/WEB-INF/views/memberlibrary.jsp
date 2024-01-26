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
    <script>
        const libraryLocationsString = '${libraryLocations}';
        const parsedLibraryLocations = JSON.parse(libraryLocationsString);

        console.log('도서관 위치:', parsedLibraryLocations);

        const apiResponsesString = '${apiresponses}';
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(apiResponsesString, 'text/xml');

        const apiResponses = xmlDoc.getElementsByTagName('result');

        console.log('API 응답:', apiResponses);

        // Kakao Maps SDK 비동기로 로드
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=48ce9248aa11f6b0e1b6054fdeaa1e8c&libraries=services';
        document.head.appendChild(script);

        script.onload = () => {
            // 스크립트 로드 완료 후 실행될 코드
            kakao.maps.load(() => {
                // 여기에 기존의 지도 초기화 및 마커 추가 코드를 넣으세요.

                // 지도 초기화
                const container = document.getElementById('map');
                const options = {
                    center: new kakao.maps.LatLng(37.5665, 126.9780),
                    level: 5,
                };
                const map = new kakao.maps.Map(container, options);

                // 사용자의 현재 위치 표시
                const showPositionButton = document.getElementById('showPositionButton');
                showPositionButton.addEventListener('click', function () {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
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

                // 각 도서관 위치에 마커 추가
                parsedLibraryLocations.forEach((location, index) => {
                    // 배열 길이 확인 추가
                    if (apiResponses.length > index) {
                        const apiResponse = apiResponses[index];

                        // API 응답에서 '<loanAvailable>' 엘리먼트 가져오기
                        const loanAvailableElement = apiResponse.getElementsByTagName('loanAvailable')[0];

                        // '<loanAvailable>' 엘리먼트가 존재하고 그 값이 'Y'인 경우 처리
                        if (loanAvailableElement && loanAvailableElement.textContent === 'Y') {
                            const markerPosition = new kakao.maps.LatLng(location.libraryLa, location.libraryLo);
                            // 마커 생성
                            const marker = new kakao.maps.Marker({
                                position: markerPosition,
                                map: map,
                                title: location.libraryName,
                            });

                            // 마커에 클릭 이벤트 추가
                            kakao.maps.event.addListener(marker, 'click', function () {
                                // 해당 도서관의 홈페이지 URL
                                const libraryUrl = location.libraryHomepage;
                                // 새 창으로 홈페이지 열기
                                window.open(libraryUrl, '_blank');
                            });

                            // 마커에 마우스 오버 이벤트 추가
                            kakao.maps.event.addListener(marker, 'mouseover', (function (name) {
                                return function () {
                                    const content = `<div style="padding:5px;">도서관 이름: ${name}</div>`;
                                    infowindow.setContent(content);
                                    infowindow.open(map, marker);
                                };
                            })(location.libraryName));

                            // 마커에 마우스 아웃 이벤트 추가
                            kakao.maps.event.addListener(marker, 'mouseout', function () {
                                infowindow.close();
                            });
                        }
                    }
                });

            });
        };

    </script>
</head>
<body>
    <div id="map"></div>
    <button id="showPositionButton">현재 위치 표시</button>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=48ce9248aa11f6b0e1b6054fdeaa1e8c&libraries=services"></script>
    
    <!-- <script>
        // 서버에서 전달한 도서관 위치 데이터
        console.log('Library Locations:', parsedLibraryLocations);
        console.log('API Responses:', apiResponses);
    
        // Kakao Maps SDK 로드
        kakao.maps.load(() => {
            // 지도 초기화
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(37.5665, 126.9780),
                level: 5,
            };
            const map = new kakao.maps.Map(container, options);
    
            // 사용자의 현재 위치 표시
            const showPositionButton = document.getElementById('showPositionButton');
            showPositionButton.addEventListener('click', function () {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
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
    
            // 각 도서관 위치에 마커 추가
            parsedLibraryLocations.forEach((location, index) => {
                const apiResponse = apiResponses[index];

                // API 응답에서 '<loanAvailable>' 엘리먼트 가져오기
                const loanAvailableElement = apiResponse.getElementsByTagName('loanAvailable')[0];

                // '<loanAvailable>' 엘리먼트가 존재하고 그 값이 'Y'인 경우 처리
                if (loanAvailableElement && loanAvailableElement.textContent === 'Y') {
                    const markerPosition = new kakao.maps.LatLng(location.libraryLa, location.libraryLo);
                    // 마커 생성
                    const marker = new kakao.maps.Marker({
                        position: markerPosition,
                        map: map,
                        title: location.libraryName,
                    });

                    // 마커에 클릭 이벤트 추가
                    kakao.maps.event.addListener(marker, 'click', function () {
                        // 해당 도서관의 홈페이지 URL
                        const libraryUrl = location.libraryHomepage;
                        // 새 창으로 홈페이지 열기
                        window.open(libraryUrl, '_blank');
                    });

                    // 마커에 마우스 오버 이벤트 추가
                    kakao.maps.event.addListener(marker, 'mouseover', (function (name) {
                        return function () {
                            const content = `<div style="padding:5px;">도서관 이름: ${name}</div>`;
                            infowindow.setContent(content);
                            infowindow.open(map, marker);
                        };
                    })(location.libraryName));

                    // 마커에 마우스 아웃 이벤트 추가
                    kakao.maps.event.addListener(marker, 'mouseout', function () {
                        infowindow.close();
                    });
                }
            });

        });
    </script> -->
    
</body>
</html>
