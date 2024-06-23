<template>
    <div class="flex">

        <canvas ref="MyChart" />
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    data: () => ({
        type: 'bar',
        data: {
            labels: ["0 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"],
            datasets: [
                {
                    label: '에너지 사용량',
                    data: [2700, 2300, 5500, 3500, 2450, 2600],
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
                    data: [2300, 200, 6700, 2600, 4700, 7300],
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
                    data: [6200, 8000, 2700, 8000, 1000, 8000],
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