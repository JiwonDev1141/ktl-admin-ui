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
                'AUG',
                'SEP',
                'OCT',


            ],
            datasets: [
            {

                label: '이번주',
                data: [16, 6, 36, 90, 30, 12, 44,60,56,30],
                borderColor: '#6950E8',
                backgroundColor: '#6950E8',
                pointRadius: 0,
                tension: 0.3,

            },
                {




                    label: '지난주',
                    data: [50, 65, 30, 30, 20, 56, 24,42,10,60],
                    borderColor: '#11B886',
                    backgroundColor: '#11B886',
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