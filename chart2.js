Highcharts.chart('container2', {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Plataformas Principales',
        x: -80
    },

    pane: {
        size: '100%'
    },

    xAxis: {
        categories: ['Laravel', 'Angular', 'vuejs', 'Drupal', 'ASP.NET Core', 'Spring-mvc'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'Conocimiento Teorico',
        data: [90, 70, 80, 70, 60, 80],
        pointPlacement: 'off'
    }, {
        name: 'Conocimiento Practico',
        data: [95, 60, 90, 85, 50, 45],
        pointPlacement: 'off'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});
