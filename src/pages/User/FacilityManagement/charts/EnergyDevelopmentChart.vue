<template>

    <div >
        <canvas style="width: 80%;  height: 80%; min-width: 150px;" ref="MyChart" />
    </div>

</template>

<script>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    data: () => ({
        type: 'pie',

        data: {
            labels: [
            "총 발전량",
            "재사용 에너지"
            ],
            datasets: [{
          
                data: [80000, 40000],
                backgroundColor: [
                    '#6950E8',
      
                    '#EF4770',
                
               

                ],
       

              
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
              plugins: {
   
    }
         
            // scales: {
            //     y: {
            //         beginAtZero: true
            //     }
            // },



        },

    }),
    mounted() {
        this.createChart()
    },
    methods: {
        createChart() {
            // const myPlugin = {
            //     id: 'myPlugin',
            //     beforeDraw: (chart) => {
            //         const ctx = chart.ctx;
            //         const xCoor = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
            //         const yCoor = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;
            //         ctx.save();
            //         ctx.font = 'bold 24px Courier';
            //         ctx.fillStyle = 'black';
            //         ctx.textAlign = 'center';
            //         ctx.textBaseline = 'middle';
            //         ctx.fillText(`124대`, xCoor, yCoor);
            //         ctx.restore();
            //     },
            // }
            new Chart(this.$refs.MyChart, {
                type: 'pie',
                data: this.data,
                options: this.options,
                // plugins: [myPlugin]
            })

        }
    }

}
</script>

<style></style>