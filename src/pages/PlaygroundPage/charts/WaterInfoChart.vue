<template>

    <div class="w-full">
        <canvas ref="MyChart" />
    </div>

</template>

<script>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    data: () => ({
        type: 'line',

        data: {
            labels: [
                '00:00',
                '04:00',
                '08:00',
                '12:00',
                '16:00',
                '20:00',
                '24:00',

            ],
            datasets: [
                {




                    label: 'BOD',
                    data: [25, 32.5, 15, 15, 10, 28, 12],
                    borderColor: '#11B886',
                    backgroundColor: '#11B886',
                    pointRadius: 0,
                    tension: 0.3,
                },
                {

                    label: 'COD',
                    data: [9, 8, 12, 15, 12, 12, 15],
                    borderColor: '#FEBF06',
                    backgroundColor: '#FEBF06',
                    pointRadius: 0,
                    tension: 0.3,
                },
                {

                    label: 'DO',
                    data: [8, 3, 18, 45, 15, 6, 22],
                    borderColor: '#6950E8',
                    backgroundColor: '#6950E8',
                    pointRadius: 0,
                    tension: 0.3,

                },
            ]
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
                type: 'line',
                data: this.data,
                options: this.options,
                // plugins: [myPlugin]
            })

        }
    }

}
</script>

<style></style>