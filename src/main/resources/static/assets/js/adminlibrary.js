// 분리된 JavaScript 파일에서 사용할 전역 변수 선언
const mapContainer = document.getElementById('map');
const map = new kakao.maps.Map(mapContainer, {
    center: new kakao.maps.LatLng(37.5665, 126.9780),
    level: 5
});

// 파일을 처리하는 함수
function processData(csv) {
    const data = csv.split('\n');   // 개행을 기준으로 데이터를 분리
    const header = data[0].split(','); // 헤더를 쉼표를 기준으로 분리

    // 각 열의 인덱스를 찾기
    const latitudeIndex = header.indexOf('LBRRY_LA');
    const longitudeIndex = header.indexOf('LBRRY_LO');
    const nameIndex = header.indexOf('LBRRY_NM');
    const homepageIndex = header.indexOf('HMPG_VALUE');

    // 각 행에 대해 반복문을 사용하여 마커를 지도에 표시하고 해당 마커에 이벤트 리스너를 추가
    for (let i = 1; i < data.length; i++) { // 헤더가 있는 경우 1부터 시작
        const row = data[i].split(','); // 각 행의 데이터를 쉼표를 기준으로 분리
        const latitude = parseFloat(row[latitudeIndex]);
        const longitude = parseFloat(row[longitudeIndex]);
        const name = row[nameIndex];
        const homepage = row[homepageIndex];

        // 마커 생성
        const markerPosition = new kakao.maps.LatLng(latitude, longitude);
        const marker = new kakao.maps.Marker({
            position: markerPosition,
            map: map,
            title: name
        });

        // 마커에 이벤트 리스너 추가 (클릭, 마우스 오버, 마우스 아웃)
        kakao.maps.event.addListener(marker, 'click', function () {
            navigateToLibraryWebsite(homepage); // 클릭 시 해당 도서관 홈페이지로 이동
        });

        kakao.maps.event.addListener(marker, 'mouseover', function () {
            showInfowindow(marker, name); // 마우스 오버 시 인포윈도우 표시 함수 호출
        });

        kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close(); // 마우스 아웃 시 인포윈도우 닫기
        });
    }
}

// 현재 날짜를 기준으로 해당 월의 CSV 파일을 가져오는 함수
function fetchCurrentMonthCSV() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 +1 해줌

    // CSV 파일 경로 설정
    const csvFilePath = `/assets/csvfile/${currentMonth}.csv`;

    // Fetch API를 사용하여 해당 월의 CSV 파일을 가져오기
    fetch(csvFilePath)
        .then(response => response.text())
        .then(csv => {
            processData(csv);
        })
        .catch(error => console.error('CSV 파일을 가져오는 중 오류 발생:', error));
}

// 페이지 로드 시에 현재 월의 CSV 파일을 가져오도록 설정
document.addEventListener('DOMContentLoaded', fetchCurrentMonthCSV);

// 클릭된 마커의 홈페이지로 이동하는 함수
function navigateToLibraryWebsite(homepage) {
    // 홈페이지가 존재할 경우에만 이동
    if (homepage) {
        window.open(homepage, '_blank'); // 새 창에서 열기
    } else {
        alert('도서관 홈페이지 정보가 없습니다.');
    }
}


// 사용자의 현재 위치를 가져와서 지도에 표시하는 함수
function showCurrentPosition() {
    if (navigator.geolocation) { // 브라우저가 위치 정보 지원 여부 확인
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // 사용자의 현재 위치에 마커 생성
                const currentPosition = new kakao.maps.LatLng(latitude, longitude);
                const markerImage = new kakao.maps.MarkerImage(
                    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
                    new kakao.maps.Size(24, 35),
                    { offset: new kakao.maps.Point(13, 35), alt: '현재 위치 마커' }
                );
                const marker = new kakao.maps.Marker({
                    position: currentPosition,
                    map: map,
                    title: '현재 위치',
                    image: markerImage // 이미지 속성 추가
                });

                // 인포윈도우 표시
                showInfowindow(marker, '현재 위치');

                // 지도 중심을 현재 위치로 이동
                map.setCenter(currentPosition);
            },
            function (error) {
                console.error('위치 정보 가져오기 오류:', error);
            }
        );
    } else {
        alert('이 브라우저는 geolocation을 사용할수 없어요..');
    }
}

// 인포윈도우를 생성하고 표시하는 함수
const infowindow = new kakao.maps.InfoWindow({
    zIndex: 1
});

function showInfowindow(marker, name) {
    const content = `<div style="padding:5px;">${name}</div>`;
    infowindow.setContent(content);
    infowindow.open(map, marker);
}

// 사용자의 현재 위치 표시 버튼에 이벤트 리스너 추가
const showPositionButton = document.getElementById('showPositionButton');
showPositionButton.addEventListener('click', showCurrentPosition);
