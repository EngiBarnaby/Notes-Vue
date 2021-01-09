<script>
import { Bar } from 'vue-chartjs'
import { mapActions, mapGetters } from "vuex"

export default {
  extends: Bar,

  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          label: 'Выполненые задания',
          backgroundColor: '#f87979',
          data: [],
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
          yAxes: [{
              ticks: {
                  
                  beginAtZero: true,
                  stepSize: 1,
              },
              gridLines: {
                display: true
              },
          }],

          xAxes: [ {
              gridLines: {
                display: false
              }
          }]
      }
    }
  }),

  methods : {
    ...mapActions(["fetchUserStats"]),

    setup(){
      this.chartdata.labels = Object.keys(this.getUserStats)
      this.chartdata.datasets[0].data = Object.values(this.getUserStats)
    }

  },
  computed : mapGetters(["getUserStats"]),

  async mounted () {
    await this.fetchUserStats()
    await this.setup()
    await this.renderChart(this.chartdata, this.options)
  }
}
</script>