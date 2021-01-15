<script>
import { Doughnut } from 'vue-chartjs'
import { mapGetters, mapActions } from 'vuex'

export default {
  extends: Doughnut,

  computed : mapGetters(['getUserStats']),

  data(){
      return {
        chartdata: {
            labels: [],

            datasets: [
            {
                backgroundColor: [],
                data: []
            }
            ]
        }
      }
  },

  methods : {

      ...mapActions(["fetchUserStats"]),

      setup(){
        
        let user_category = this.getUserStats['user_category']
        console.log(Object.keys(user_category));
        this.chartdata.labels = Object.keys(user_category)
        this.chartdata.datasets[0].data = Object.values(user_category)
        this.chartdata.datasets[0].backgroundColor = this.getRandomColorsList(this.chartdata.labels.length)
      },

      getRandomColorsList(n=5){
          let colorList = []
            for (let j = 0; j < n + 1; j++){
                let letters = '0123456789ABCDEF'.split('');
                let color = '#';
                for (let i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                colorList.push(color)
            }
          return colorList
        },
  },

async mounted () {
    await this.fetchUserStats()
    await this.setup()
    await this.renderChart(this.chartdata, this.options)
  }
};
</script>
