const ctx = document.getElementById('myChart');

  let chart=new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Deposit', 'Withdraw','Total' ],
      datasets: [{
        label: 'TK',
        data: [0, 0, 0],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Deposite

const depoBtn = document.getElementById("depositBtn");

depoBtn.addEventListener("click", function () {
  
  const depositAmount = parseFloat(document.getElementById("depositAmount").innerText);
  const balance = parseFloat(document.getElementById("balance").innerText);
  
  let chartData = chart.data.datasets[0].data;
  chartData[0] = depositAmount;
  chartData[2] = balance;
  
  chart.update();

})

// Withdraw

const withdBtn = document.getElementById("withdrowBtn");

withdBtn.addEventListener("click", function () {

  
  const withdrowAmount = Math.floor(document.getElementById("withdrowAmount").innerText);
  const withBalance = Math.floor(document.getElementById("balance").innerText);
  
  let chartData = chart.data.datasets[0].data;
  chartData[1] = withdrowAmount;
  chartData[2] = withBalance;
  chart.update();

})


