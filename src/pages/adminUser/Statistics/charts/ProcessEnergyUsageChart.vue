<template>
    <div class="w-full">

        <canvas style="width: 100%; height: 300px; min-width: 150px;" ref="MyChart" />
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    data: () => ({
        type: 'bar',
        data: {
            labels: ["공조실", "사무동", "합성실", "주입실", "클린룸", "기타"],
            datasets: [
                {
                    label: 'khw',
                    data: [2700, 2300, 5500, 3500, 2450, 2600],
                    backgroundColor: [
                        "#E5E7EB",
                        "#E5E7EB",
                        "#E5E7EB",
                        "#E5E7EB",
                        "#6950E8",
                        "#E5E7EB",
                    ],
                    borderColor: [
                        "#E5E7EB",
                        "#E5E7EB",
                        "#E5E7EB",
                        "#E5E7EB",
                        "#6950E8",
                        "#E5E7EB",
                    ],
                    borderWidth: 1,
                    borderRadius: 30
                },



            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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