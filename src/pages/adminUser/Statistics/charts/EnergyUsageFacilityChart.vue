<template>

    <div >
        <canvas style="width: 60%;  height: 60%; min-width: 150px;" ref="MyChart" />
    </div>

</template>

<script>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    data: () => ({
        type: 'doughnut',

        data: {
            labels: [

            ],
            datasets: [{
//                
                data: [800, 1000, 1200, 1200, 1200],
                backgroundColor: [
                    '#6950E8',
                    '#11B886',
                    '#EF4770',
                    '#111827',
                    '#6B7280',
               

                ],
                cutout: "80%",

                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
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
                type: 'doughnut',
                data: this.data,
                options: this.options,
                // plugins: [myPlugin]
            })

        }
    }

}
</script>

<style></style>