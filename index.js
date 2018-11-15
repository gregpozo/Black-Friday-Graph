let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    //Chart.defaults.global.scaleFontSize = 30;
    Chart.defaults.global.defaultFontSize = 14;
    Chart.defaults.global.defaultFontColor = '#777';
    Chart.defaults.global.responsive = true;

    let massPopChart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['2012', '2013', '2014', '2015', '2016', '2017'],
        datasets:[{
          label:'Gasto',
          data:[
            752.24,
            767.24,
            802.45,
            805.65,
            935.58,
            967.13
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        maintainAspectRatio: false,
        title:{
          display:true,
          text:'Consumo promedio (en dolares) de un Estadounidense durante el "Holiday Season"',
          //fontSize:25
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        //layout:{
          //padding:{
            //left:50,
            //right:0,
            //bottom:0,
            //top:0
          //}
        //},
        tooltips:{
          enabled:true
        }
      }
});
