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

                'JAN',
                'FEB',
                'MAR',
                'APR',
                'MAY',
                'JUN',
                'JUL',

            ],
            datasets: [

                {

                    label: 'Waste',
                    data: [20, 5, 20, 7, 28, 7, 12.5],
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