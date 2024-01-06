 // 막대 바 그래프
 // Canvas 요소 가져오기
 const ctx = document.getElementById('myChart').getContext('2d');

 // 데이터 설정
 const data = {
     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
     datasets: [{
         label: '문의 건수',
         data: [12, 19, 3, 5, 2, 3],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
             'rgba(255, 99, 132, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
     }]
 };

 // 차트 생성
 const myChart = new Chart(ctx, {
     type: 'bar', // 차트 유형 설정
     data: data,   // 데이터 설정
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });


 // 막대 바 그래프2
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
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
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [168,170,178,190,203,276,408,547,675,734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [40,20,10,16,24,38,74,167,508,784],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        }, { 
          data: [6,3,2,2,7,26,82,172,312,433],
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
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
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
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
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


 //실시간 그래프
// Chart 설정
var realtimeCtx = document.getElementById('realtimeChart').getContext('2d');
var realtimeData = {
    labels: [],
    datasets: [{
        label: 'Realtime Data',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        data: [],
    }]
};

var realtimeConfig = {
    type: 'line',
    data: realtimeData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            },
            y: {
                min: 0,
                max: 100
            }
        }
    }
};

var myRealtimeChart = new Chart(realtimeCtx, realtimeConfig);

// 데이터 업데이트
function updateRealtimeData() {
    // 매 초마다 무작위 데이터 생성 및 업데이트
    var newDataPoint = Math.floor(Math.random() * 100);
    realtimeData.labels.push(realtimeData.labels.length);
    realtimeData.datasets[0].data.push(newDataPoint);

    // 데이터의 길이를 제한하여 너무 많은 데이터가 쌓이지 않도록 함
    var maxDataLength = 20;
    if (realtimeData.labels.length > maxDataLength) {
        realtimeData.labels.shift();
        realtimeData.datasets[0].data.shift();
    }

    // 그래프 업데이트
    myRealtimeChart.update();

    // 1초마다 업데이트
    setTimeout(updateRealtimeData, 1000);
}

// 초기 데이터 업데이트 시작
updateRealtimeData();