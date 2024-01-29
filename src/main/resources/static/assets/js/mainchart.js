// 일별 문의건수
document.addEventListener("DOMContentLoaded", function () {
  // alert('test');
  // dailyAsk 값을 읽어옴
  // var dailyAskDataString = $('#dailyAsk').val();
  // console.log("dailyAskDataString:", dailyAskDataString);

  // // 문자열을 직접 실행하여 배열로 변환 (비권장)
  // var dailyAskDataList = eval("(" + dailyAskDataString + ")");

  // // 결과 출력
  // console.log("dailyAskDataList:", dailyAskDataList);

  // // 문자열을 JavaScript 객체로 변환
  // var dailyAskDataArray = JSON.parse(dailyAskDataString);
  // console.log('dailyAskDataArray:', dailyAskDataArray);

  // var day0 = dailyAskDataArray[0];
  // // console.log('day0은??',day0);
  // console.log('day0의 타입:', typeof day0);
  var dailyAskDataString = $('#dailyAsk').val();

  // 문자열을 JavaScript 객체로 파싱
  var dailyAskDataList = JSON.parse(dailyAskDataString);

  // 결과 출력
  console.log("dailyAskDataList:", dailyAskDataList);

   
  

  // Chart.js를 사용하여 그래프 생성
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: dailyAskData.map(entry => entry.askDate), // askDate를 문자열로 변환
          datasets: [{
              label: '문의건수',
              data: dailyAskData.map(entry => entry.count),
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

// 막대 바 그래프2
new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: [2478, 5267, 734, 784, 433]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});

// 라인 차트
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datasets: [{
      data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
      label: "Africa",
      borderColor: "#3e95cd",
      fill: false
    }, {
      data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false
    }, {
      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
      label: "Europe",
      borderColor: "#3cba9f",
      fill: false
    }, {
      data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
      label: "Latin America",
      borderColor: "#e8c3b9",
      fill: false
    }, {
      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
      label: "North America",
      borderColor: "#c45850",
      fill: false
    }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});

// 파이차트
new Chart(document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: [2478, 5267, 734, 784, 433]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});

// 수평 바 차트
new Chart(document.getElementById("bar-chart-horizontal"), {
  type: 'horizontalBar',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: [2478, 5267, 734, 784, 433]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});
