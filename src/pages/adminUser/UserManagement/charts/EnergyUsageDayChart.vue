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
            labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
            datasets: [
                {
                    label: '에너지 사용량',
                    data: [2700, 2300, 6250, 3500, 2450, 2500, 8500, 2300, 6500, 4000, 6500, 300],
                    backgroundColor: [
                        "#6950E8"
                    ],
                    borderColor: [
                        "#6950E8"
                    ],
                    borderWidth: 1
                },

                {
                    label: '에너지 발전량',
                    data: [2300, 200, 6700, 2600, 4700, 7300, 7000, 9500, 7500, 2600, 7000, 3000],
                    backgroundColor: [
                        '#11B886',
                    ],
                    borderColor: [
                        '#11B886',
                    ],
                    borderWidth: 1
                },

                {
                    label: '재사용 에너지',
                    data: [6200, 8000, 2700, 8000, 1000, 8000, 5000, 4500, 6000, 4500, 6000, 500],
                    backgroundColor: [
                        "#FEBF06"
                    ],
                    borderColor: [
                        "#FEBF06"
                    ],
                    borderWidth: 1
                },

            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            
            scales: {
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