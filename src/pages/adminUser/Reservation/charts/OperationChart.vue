<template>


    <canvas ref="MyChart" />

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

                data: [2, 111, 11],
                backgroundColor: [
                    '#FEBF06',
                    '#6950E8',
                    '#11B886'
                ],
                cutout: "90%",

                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
                    const yCoor = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;
                    ctx.save();
                    ctx.font = 'bold 24px Courier';
                    ctx.fillStyle = 'black';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`124대`, xCoor, yCoor);
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