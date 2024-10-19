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
                'Day 1',
                'Day 2',
                'Day 3',
                'Day 4',
                'Day 5',
                'Day 6',



            ],
            datasets: [
                {

                    label: '이번주',
                    data: [200, 100, 600, 600, 100, 600, 600],
                    borderColor: '#3357BD',
                    backgroundColor: '#3357BD',
                    stepped: 'after',
                    tension: 0,


                },
                {




                    label: '지난주',
                    data: [100, 200, 300, 300, 500, 600],
                    borderColor: '#febf06',
                    backgroundColor: '#febf06',

                    stepped: 'after',

                    tension: 0
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