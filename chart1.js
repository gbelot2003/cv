Highcharts.chart('container', {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Graficos de Habilidades',
        x: -80
    },

    pane: {
        size: '100%'
    },

    xAxis: {
        categories: ['Java', 'javascript', 'php', 'Python', 'C#'],
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
        data: [80, 85, 95, 60, 65],
        pointPlacement: 'off'
    }, {
        name: 'Conocimiento Practico',
        data: [70, 90, 95, 40, 40],
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
