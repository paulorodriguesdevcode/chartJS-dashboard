
//Monta os graficos
    $(function () {

      var donutChartCanvas = $('#donutChart').get(0).getContext('2d')
      var donutData = {
        labels: [
          'CC 005',
          'CC 001',
          'CC 002',
          'CC 007',
          'CC 008',
          'CC 004',
        ],
        datasets: [
          {
            data: [2700, 500, 400, 600, 300, 100],
            backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
          }
        ]
      }
      var donutOptions = {
        maintainAspectRatio: false,
        responsive: true,
      }
      //Create pie or douhnut chart
      // You can switch between pie and douhnut using the method below.
      var donutChart = new Chart(donutChartCanvas, {
        type: 'doughnut',
        data: donutData,
        options: donutOptions
      })



      //-------------
      //- BAR CHART -
      //-------------
      var barChartCanvas = $('#barChart').get(0).getContext('2d')
      var barChartData = {
        labels: ['01/10/2019', '02/10/2019', '03/10/2019', '04/10/2019', '05/10/2019', '06/10/2019', '07/10/2019', '08/10/2019', '09/10/2019', '10/10/2019', '11/10/2019', '12/10/2019', '13/10/2019', '14/10/2019', '15/10/2019'],
        datasets: [
          {
            label: 'Total $ Vendas / Dia',
            backgroundColor: 'rgba(60,141,188,0.9)',
            borderColor: 'rgba(60,141,188,0.8)',
            pointRadius: false,
            pointColor: '#3b8bba',
            pointStrokeColor: 'rgba(60,141,188,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data: [2000.00, 1480.00, 900.00, 1190.00, 860.50, 1570.20, 1900.00]
          }
        ]
      }
      var temp0 = barChartData.datasets[0]

      var barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        datasetFill: false
      }

      var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: barChartData,
        options: barChartOptions
      })
    })