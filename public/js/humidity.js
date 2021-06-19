    Highcharts.chart('chart1', {
        title: {
            text: 'This is my Temperature chart',
        },
        xAxis: {
            categories: ['12min', '11min', '10min', '9min', '8min', '7min',
                '6min', '5min', '4min', '3min', '2min', '1min']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            data: [28.1,29.7 , 24.5, 27.5, 30.5, 29.5, 33.2, 26.5, 30, 34, 32, 37]
        }]
    });
