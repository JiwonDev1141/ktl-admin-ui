<template>


    <canvas style="max-width: 250px; max-height: 250px;" ref="MyChart" />

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

                data: [10, 13],
                backgroundColor: [
                    '#6B7280',
                    '#6950E8',
                 
                ],
                cutout: "80%",

                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            rotation: -90,
            circumference: 180,
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
            const myPlugin = {
                id: 'myPlugin',
                beforeDraw: (chart) => {
                    const ctx = chart.ctx;
                    const xCoor = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
                    const yCoor = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 1.4;
                    ctx.save();
                    ctx.font = ' 14px Inter';
                    ctx.fillStyle = 'gray';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`에너지 저감률`, xCoor, yCoor);

                    ctx.fillStyle = 'black';
                    ctx.font = ' 24px Inter';
                    ctx.fillText(`40%`, xCoor, yCoor + 20);

                    ctx.restore();
                },
            }
            new Chart(this.$refs.MyChart, {
                type: 'doughnut',
                data: this.data,
                options: this.options,
                plugins: [myPlugin]
            })

        }
    }

}
</script>

<style></style>