// ************************************** 막대 그래프 ***********************************************
// 일별 문의건수
document.addEventListener("DOMContentLoaded", function () {
  // HTML 요소에서 일별 문의건수 데이터 가져오기
  var dailyAsk = $('#dailyAsk').val();

  // 정규식을 사용하여 원하는 형식으로 변환
  var dailyData = dailyAsk.replace(/(\w+)=([\w-]+)/g, '"$1":"$2"');

  // dailyAsk 문자열을 JSON 객체로 파싱하고 배열의 첫 번째 요소를 가져옴
  var dailyAskDataList = JSON.parse("[" + dailyData + "]")[0];

  // 'count' 속성 값을 정수로 변환하여 추출
  const countData = dailyAskDataList.map(item => parseInt(item.count)); 
  // 'ask_date' 속성 값을 추출
  const askData = dailyAskDataList.map(item => item.ask_date);

  // Chart.js를 사용하여 그래프 생성
  var ctx = document.getElementById("myChart").getContext('2d'); 
  new Chart(ctx, {
    type: 'bar', 
    data: {
      labels: askData,
      datasets: [{
        label: '문의건수',
        data: countData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});


// *************************** 수평 바 그래프 ***************************************
// 도서인기 순위
document.addEventListener("DOMContentLoaded", function () {
  // HTML 요소에서 도서 추천수 랭킹 데이터 가져오기
  var bookRank = $('#bookRank').val();

  // 정규식을 사용하여 원하는 형식으로 변환
  var BookData = bookRank.replace(/(\w+)=(.*?)(?=[,}])/g, '"$1":"$2"');

  // bookRank 문자열을 JSON 객체로 파싱하고 배열의 첫 번째 요소를 가져옴
  var bookDataList = JSON.parse('[' + BookData + ']')[0];

  // 'recommanded_book1_count' 속성 값을 정수로 변환하여 추출
  const rankingData = bookDataList.map(item => parseInt(item.recommanded_book1_count));
  // 'bookname' 속성 값을 추출
  const nameData = bookDataList.map(item => item.bookname);

  new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: nameData,
      datasets: [
        {
          label: "추천수",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          data: rankingData
        }
      ]
    },
    options: {
      indexAxis: 'y',
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
  });

});


// *********************************** 파이차트 ******************************************
// 연령대 분석
document.addEventListener("DOMContentLoaded", function () {
  // HTML 요소에서 연령대 분석 데이터 가져오기
  var getAge = $('#getAge').val();

  // 정규식을 사용하여 원하는 형식으로 변환
  var ageData = getAge.replace(/(\w+)=(\w+[^,}]*)/g, '"$1":"$2"');

  // getAge 문자열을 JSON 객체로 파싱하고 배열의 첫 번째 요소를 가져옴
  var getAgeDataList = JSON.parse("[" + ageData + "]")[0];

  // 'age_group' 속성 값을 추출
  var ageGroupData = getAgeDataList.map(item => item.age_group);
  // 'count' 속성 값을 정수로 변환하여 추출
  var countData = getAgeDataList.map(item => parseInt(item.count)); // 'count'를 정수로 변환

  // Chart.js를 사용하여 파이 차트 생성
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ageGroupData,
      datasets: [{
        label: "인원수:",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: countData
      }]
    },
    options: {
      title: {
        display: true,
        text: '연령대별 회원 분포'
      }
    }
  });
});