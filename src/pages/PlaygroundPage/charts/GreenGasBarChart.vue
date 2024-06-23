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
        type: 'bar',
        data: {
            labels: ["클린룸", "공조실", "사무동", "급조실", "공정외부"],
            datasets: [
                {
                    label: 'CH4',
                    data: [2700, 2300, 5500, 3500, 2450, 2600],
                    backgroundColor: [
                        "#6950E8"
                    ],
                    borderColor: [
                        "#6950E8"
                    ],
                    borderWidth: 1,
                    borderRadius: 30
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