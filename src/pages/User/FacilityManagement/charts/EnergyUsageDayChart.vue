<template>
    <div class="flex">

        <canvas style="width: 100%; height: 30vh;" ref="MyChart" />
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    data: () => ({
        type: 'bar',
        data: {
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP"],
            datasets: [
                {
                    label: '금일',
                    data: [30, 25, 30, 15, 32, 45, 35, 40, 35],
                    backgroundColor: [
                        "#E5E7EB"
                    ],
                    borderColor: [
                        "#6950E8"
                    ],
                    borderWidth: 0.1
                },

                {
                    label: '전일',
                    data: [35, 18, 22, 40, 22, 27.5, 40, 35, 30],
                    backgroundColor: [
                        "#6950E8",
                    ],
                    borderColor: [
                        'black',
                    ],
                    borderWidth: 1
                },

          

            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    categoryPercentage: 0.3

                }],
                y: {
                    beginAtZero: true
                }
            }
        }
    }),
    mounted() {
        this.createChart()
    },
    methods: {
        createChart() {
            new Chart(this.$refs.MyChart, {
                type: 'bar',
                data: this.data,
                options: this.options
            })

        }
    }

}
</script>

<style></style>