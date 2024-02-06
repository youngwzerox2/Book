<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>공공도서관 위치(회원페이지)</title>
    <style>
      #map {
        width: 90%;
        height: 80vh;
        margin: auto;
        margin-top: 10vh;
      }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=48ce9248aa11f6b0e1b6054fdeaa1e8c&libraries=services"></script>
    <script>
      // libraryLocations와 apiResponses를 JSP에서 읽음
      const libraryLocationsString = '${libraryLocations}';
      const parsedLibraryLocations = JSON.parse(libraryLocationsString);

      // API 응답 데이터를 문자열로 받아오기
      const apiResponsesString = '${apiresponses}';

      // apiResponsesString 문자열에서 첫 번째와 마지막 문자를 제거하고 쉼표와 공백을 기준으로 분할하여 배열 생성
      const apiResponsesArray = apiResponsesString.slice(1, -1).split(', ');

      // DOMParser 인스턴스 생성
      const parser = new DOMParser();

      // 각 XML 문자열을 개별적으로 파싱
      const xmlDocArray = apiResponsesArray.map((xmlString) => parser.parseFromString(xmlString, 'application/xml'));

      // 'loanAvailable' 값 얻기
      const loanAvailableValues = xmlDocArray.map((xmlDoc) => xmlDoc.getElementsByTagName('loanAvailable')[0].textContent);

      // 'loanAvailable' 값이 'Y'인 데이터 추출
      const availableData = xmlDocArray.filter((xmlDoc) => {
        const loanAvailable = xmlDoc.getElementsByTagName('loanAvailable')[0].textContent;
        return loanAvailable === 'Y';
      });

      // 'Y'인 도서관의 libCode를 가져오기
      const availableLibCodes = availableData.map((xmlDoc) => xmlDoc.getElementsByTagName('libCode')[0].textContent);

      // Kakao Maps SDK 비동기로 로드
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=48ce9248aa11f6b0e1b6054fdeaa1e8c&libraries=services';
      document.head.appendChild(script);

      script.onload = () => {
        // 스크립트 로드 완료 후 실행될 코드
        kakao.maps.load(() => {
          // 지도 초기화
          const container = document.getElementById('map');
          const options = {
            center: new kakao.maps.LatLng(37.5665, 126.978),
            level: 5
          };
          const map = new kakao.maps.Map(container, options);

          // 사용자의 현재 위치 표시
          const showPositionButton = document.getElementById('showPositionButton');
          showPositionButton.addEventListener('click', function () {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                function (position) {
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
                    )
                  });
                  // 사용자 위치로 지도 이동
                  map.panTo(userPosition);
                },
                function (error) {
                  console.error('사용자 위치 가져오기 오류:', error);
                }
              );
            } else {
              alert('이 브라우저는 geolocation을 사용할 수 없어요..');
            }
          });

          // 인포윈도우를 생성하고 표시하는 함수
          const infowindow = new kakao.maps.InfoWindow({
            zIndex: 1
          });

          // 'Y'인 도서관을 찾아서 지도에 마커 표시
          parsedLibraryLocations.forEach((location) => {
            const libCode = location.libraryNum;

            // 'Y'인 도서관만 처리
            if (availableLibCodes.includes(libCode)) {
              const index = availableLibCodes.indexOf(libCode);

              const markerPosition = new kakao.maps.LatLng(location.libraryLa, location.libraryLo);
              // 마커 생성
              const marker = new kakao.maps.Marker({
                position: markerPosition,
                map: map,
                title: location.libraryName
              });

              // 마커에 클릭 이벤트 추가
              kakao.maps.event.addListener(marker, 'click', function () {
                // 해당 도서관의 홈페이지 URL
                const libraryUrl = location.libraryHomepage;
                // 새 창으로 홈페이지 열기
                window.open(libraryUrl, '_blank');
              });

              // 마커에 마우스 오버 이벤트 추가
              kakao.maps.event.addListener(
                marker,
                'mouseover',
                (function (name) {
                  return function () {

                    const contents = '<div style="padding:5px;">' + name + '</div>';

                    infowindow.setContent(contents);

                    infowindow.open(map, marker);

                    // 알림창 띄우기
                    if (loanAvailableValues[index] === 'N') {
                      alert(name + '에서 해당 도서를 대출 가능하나 현재 도서관 영업 시간이 아닙니다.');
                    }
                  };
                })(location.libraryName)
              );

              // 마커에 마우스 아웃 이벤트 추가
              kakao.maps.event.addListener(marker, 'mouseout', function () {
                infowindow.close();
              });
            }
          });
        });
      };
    </script>
  </head>
  <body>
    <div id="map"></div>
    <button id="showPositionButton">현재 위치 표시</button>
  </body>
</html>
