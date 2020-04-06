//Monta os graficos
$(function () {
    var donutChartCanvas = $('#donutChart').get(0).getContext('2d')
    var donutData = {
        labels: [
            'CIA 005',
            'CIA 001',
            'CIA 002',
            'CIA 007',
            'CIA 008',
            'CIA 004',
        ],
        datasets: [{
            data: [2700, 500, 400, 600, 300, 100],
            backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
        }]
    }
    var donutOptions = {
        legend: {
            position: 'top',

        },
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

    /////////////////////////////////////////////////////

    var donutChartCanvas1 = $('#donutChart1').get(0).getContext('2d')
    var donutData1 = {
        labels: [
            'Flights in time',
            'Delayed Flights',
        ],
        datasets: [{
            data: [2309, 891],
            backgroundColor: ['#00a65a', '#f56954'],
        }]
    }

    var donutOptions1 = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            position: 'top',

        },

    }
    var donutChart1 = new Chart(donutChartCanvas1, {
        type: 'doughnut',
        data: donutData1,
        options: donutOptions1,
    })
    console.log(donutChart1)
})