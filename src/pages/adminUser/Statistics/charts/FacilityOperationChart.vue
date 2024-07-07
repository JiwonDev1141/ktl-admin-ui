<template>


    <canvas  ref="MyChart" />

</template>

<script>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)



export default {
    data: () => ({
        type: 'doughnut',
     
        data: {
            labels: [
                "운영중",
                "운영중지",
                "고정"
            ],
            datasets: [{

                data: [30, 55, 15],
                backgroundColor: [
                    '#2ae8c9',
                    '#cacaca',
                    '#999999',
                 
                ],
                // cutout: "80%",

                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
      thickness: {
        thickness: [
            [90, 160],
            [100, 140],
            [100, 140],
       
        ],
      },
    },
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

            var thickness = {
                id: "thickness",
                beforeDraw: function (chart, options) {
                    let thickness = chart.options.plugins.thickness.thickness;
                    thickness.forEach((item, index) => {
                    chart.getDatasetMeta(0).data[index].innerRadius = item[0];
                    chart.getDatasetMeta(0).data[index].outerRadius = item[1];
                    });
                },
            };

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
                plugins: [
                    // myPlugin, 
                    thickness
                ]
            })

        }
    }

}
</script>

<style></style>