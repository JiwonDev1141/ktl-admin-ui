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

                data: [210, 20, 33],
                backgroundColor: [
                    '#11B886',
                    '#EF4770',
                    '#FEBF06',

                ],
                cutout: "90%",

                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            // rotation: -90,
            // circumference: 180,
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

                    ctx.fillStyle = 'black';
                    ctx.font = ' 24px Inter';
                    ctx.textAlign = 'center';
                    ctx.fillText(`243대`, xCoor, yCoor);

                    ctx.font = ' 14px Inter';
                    ctx.fillStyle = 'gray';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`운영설비`, xCoor, yCoor + 24);


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