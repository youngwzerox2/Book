// ************************************** 막대 그래프 ***********************************************
// 일별 문의건수
document.addEventListener("DOMContentLoaded", function () {
  var dailyAsk = $('#dailyAsk').val();

  // 데이터의 형식을 { "count": 1, "ask_date": "2024-01-23" } 형태로 변환
  var dailyData = dailyAsk.replace(/(\w+)=([\w-]+)/g, '"$1":"$2"');

  console.log("dailyData", dailyData);

  // 문자열을 JavaScript 객체로 변환
  var dailyAskDataList = JSON.parse("[" + dailyData + "]")[0];

  console.log("dailyAskDataList", dailyAskDataList);

  const countData = dailyAskDataList.map(item => parseInt(item.count)); // 'count'를 정수로 변환
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
  var bookRank = $('#bookRank').val();

  // 정규식을 사용하여 원하는 형식으로 변환
  var BookData = bookRank.replace(/(\w+)=(.*?)(?=[,}])/g, '"$1":"$2"');
  console.log("BookData", BookData);

  var bookDataList = JSON.parse('[' + BookData + ']')[0];

  console.log("bookDataList", bookDataList);
 
  const rankingData = bookDataList.map(item => parseInt(item.recommanded_book1_count));
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






// ***************************************** 라인 차트 *********************************************
// new Chart(document.getElementById("line-chart"), {
//   type: 'line',
//   data: {
//     labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
//     datasets: [{
//       data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
//       label: "Africa",
//       borderColor: "#3e95cd",
//       fill: false
//     }, {
//       data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
//       label: "Asia",
//       borderColor: "#8e5ea2",
//       fill: false
//     }, {
//       data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
//       label: "Europe",
//       borderColor: "#3cba9f",
//       fill: false
//     }, {
//       data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
//       label: "Latin America",
//       borderColor: "#e8c3b9",
//       fill: false
//     }, {
//       data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
//       label: "North America",
//       borderColor: "#c45850",
//       fill: false
//     }
//     ]
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'World population per region (in millions)'
//     }
//   }
// });



// *********************************** 파이차트 ******************************************
// 연령대 분석
document.addEventListener("DOMContentLoaded", function () {
  var getAge = $('#getAge').val();

  // 정규 표현식을 사용하여 데이터 형식을 수정
  var ageData = getAge.replace(/(\w+)=(\w+[^,}]*)/g, '"$1":"$2"');
  console.log("ageData", ageData);

  // 문자열을 JavaScript 객체로 변환
  var getAgeDataList = JSON.parse("[" + ageData + "]")[0];

  console.log("getAgeDataList", getAgeDataList);

  // labels와 data 추출
  var labels = getAgeDataList.map(item => item.age_group);
  var data = getAgeDataList.map(item => parseInt(item.count)); // 'count'를 정수로 변환

  // Chart.js를 사용하여 파이 차트 생성
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: "인원수:",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: data
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






// 수평 바 차트
// document.addEventListener("DOMContentLoaded", function () {
//   var dailyAsk = $('#dailyAsk').val();

//   // 데이터의 형식을 { "count": 1, "ask_date": "2024-01-23" } 형태로 변환
//   var correctedData = dailyAsk.replace(/(\w+)=([\w-]+)/g, '"$1":"$2"');

//   // 문자열을 JavaScript 객체로 변환
//   var dailyAskDataList = JSON.parse("[" + correctedData + "]")[0];

//   console.log("dailyAskDataList", dailyAskDataList);

//   const countData = dailyAskDataList.map(item => parseInt(item.count)); // 'count'를 정수로 변환
//   const askData = dailyAskDataList.map(item => item.ask_date);

// Chart.js를 사용하여 그래프 생성
// var ctx = document.getElementById("hoChart").getContext('2d');
// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['1', '2', '3', '4', '5'],
//     datasets: [{
//       label: '인기랭킹',
//       data: [1, 2, 3, 4, 5],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(255, 99, 132, 1)',
//         'rgba(255, 99, 132, 1)',
//         'rgba(255, 99, 132, 1)',
//         'rgba(255, 99, 132, 1)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     indexAxis: 'y',
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });
// });


// new Chart(document.getElementById("bar-chart-horizontal"), {
//   type: 'horizontalBar',
//   data: {
//     labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
//     datasets: [
//       {
//         label: "Population (millions)",
//         backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//         data: [2478,5267,734,784,433]
//       }
//     ]
//   },
//   options: {
//     legend: { display: false },
//     title: {
//       display: true,
//       text: 'Predicted world population (millions) in 2050'
//     }
//   }
// });