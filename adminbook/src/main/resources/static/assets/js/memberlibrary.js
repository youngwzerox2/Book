// DOMContentLoaded 이벤트가 발생하면 실행
document.addEventListener('DOMContentLoaded', function () {
    // 지도를 표시할 div 요소를 가져옴
    const mapContainer = document.getElementById('map');
    // 사용할 CSV 파일의 이름을 정의
    const CSVFileName = 'library.csv'; 

    // 카카오맵 초기화를 위한 옵션 설정
    const options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 지도의 중심 좌표
        level: 5 // 지도의 확대 레벨
    };
    // 옵션을 사용하여 지도를 생성
    const map = new kakao.maps.Map(mapContainer, options);

    // CSV 파일에서 데이터를 읽어오는 함수
    function readCSV() {
        fetch('assets/csvfile/library.csv')  // CSV 파일을 가져옴
            .then(response => response.text())  // 텍스트 형태로 변환
            .then(csv => processData(csv))  // 데이터 처리 함수를 호출
            .catch(error => console.error('CSV 읽기 오류:', error)); // 오류가 발생하면 콘솔에 오류 메시지를 출력
    }

    // CSV 데이터를 처리하고 지도에 마커를 표시하는 함수
    function processData(csv) {
        const data = csv.split('\n');   // 개행을 기준으로 데이터를 분리
        const header = data[0].split(','); // 헤더를 쉼표를 기준으로 분리

        // 각 열의 인덱스를 찾기
        const latitudeIndex = header.indexOf('LBRRY_LA');
        const longitudeIndex = header.indexOf('LBRRY_LO');
        const nameIndex = header.indexOf('LBRRY_NM');

        // 각 행에 대해 반복문을 사용하여 마커를 지도에 표시하고 해당 마커에 이벤트 리스너를 추가
        for (let i = 1; i < data.length; i++) { // 헤더가 있는 경우 1부터 시작
            const row = data[i].split(','); // 각 행의 데이터를 쉼표를 기준으로 분리
            const latitude = parseFloat(row[latitudeIndex]);
            const longitude = parseFloat(row[longitudeIndex]);
            const name = row[nameIndex];

            // 마커 생성
            const markerPosition = new kakao.maps.LatLng(latitude, longitude);
            const marker = new kakao.maps.Marker({
                position: markerPosition,
                map: map,
                title: name
            });

            // 마커에 이벤트 리스너 추가 (클릭 이벤트와 마우스 오버 이벤트)
            kakao.maps.event.addListener(marker, 'click', function () {
                alert(name); // 클릭 시 이름을 알림으로 표시
            });

            kakao.maps.event.addListener(marker, 'mouseover', function () {
                showInfowindow(marker, name); // 마우스 오버 시 인포윈도우 표시 함수 호출
            });

            kakao.maps.event.addListener(marker, 'mouseout', function () {
                infowindow.close(); // 마우스 아웃 시 인포윈도우 닫기
            });
        }
    }

    // 사용자의 현재 위치를 가져와서 지도에 표시하는 함수
    function showCurrentPosition() {
        if (navigator.geolocation) { // 브라우저가 위치 정보 지원 여부 확인
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    // 사용자의 현재 위치에 빨간색 마커 생성
                    const currentPosition = new kakao.maps.LatLng(latitude, longitude);
                    const markerImage = new kakao.maps.MarkerImage(
                        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
                        new kakao.maps.Size(24, 35),
                        {
                            offset: new kakao.maps.Point(13, 35),
                            alt: '현재 위치 마커'
                        }
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

    // 페이지 로드 시에 기본 CSV 파일을 로드
    readCSV();

    // 사용자의 현재 위치 표시 버튼에 이벤트 리스너 추가
    const showPositionButton = document.getElementById('showPositionButton');
    showPositionButton.addEventListener('click', showCurrentPosition);

});
