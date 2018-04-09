var myChart = echarts.init(document.getElementById('main'));

var option = {
    backgroundColor:'#eef1f5',
    title: {
        text: '压力指数表',
        padding: [280, 0],
        x: 'center',
        textStyle: {
            color: '#768494',
            fontWeight: 'normal',
            fontSize: 16
        }
    },
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        name: '速度',
        type: 'gauge',
        max: 100,
        radius: '70%', // 半径
        startAngle: 215, //起始位置
        endAngle: -35, //终点位置
        detail: {
            formatter: '{value}Km/h',
            textStyle: {
                fontSize: 8
            }
        },
        title: {
            textStyle: {
                fontSize: 10
            }
        },
        data: [{
            value: 50,
            name: '小组时速表'
        }]
    }]
};

myChart.setOption(option);