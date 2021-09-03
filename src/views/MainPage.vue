<template>
<div class="mainPageStyle main-bg-color pt-8">
  <div class="container innerHeight">
    <div class="row">
      <div class="col-md-4 col-lg-5">
          <input type="text" class="form-control mb-3" v-model="search" placeholder="search">

        <div class="list-group choose mb-4">
          <label v-for="item in filterData" :key="item.Id" class="list-group-item main-text-color">
            <input type="radio" class="form-check-input me-1" @click="area = item"
            :checked="area.Name === item.Name">{{ item.Name }}
          </label>
        </div>
      </div>
      <div class="col-md-8 col-lg-7">
        <select v-model="area" id="area" class="form-select w-md-50 mb-3" aria-label="select example">
          <option selected value="" disabled>瀏覽紀錄</option>
          <option v-for="(item, index) in browseLog" :key="index" :value="item"
          class="main-text-color">{{ index + 1 }}.{{ item.Name }}</option>
        </select>
        <ChooseView :send-data="data" :area="area"></ChooseView>
      </div>
    </div>
  </div>
  <Footer class="footer"></Footer>
</div>
</template>

<script>
import ChooseView from '@/components/ChooseView.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    ChooseView,
    Footer
  },
  data () {
    return {
      api: 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',
      data: [],
      search: '',
      area: '',
      browseLog: []
    }
  },
  methods: {
    getData () {
      this.$http.get(`${this.api}`)
        .then(res => {
          this.data = res.data.result.records
        })
    }
  },
  computed: {
    filterData () {
      return this.data.filter(item => {
        if (item.Name.match(this.search)) {
          return item.Name
        }
      })
    }
  },
  watch: {
    area () {
      if (this.browseLog.length < 10) {
        this.browseLog.push(this.area)
      } else {
        this.browseLog.shift()
        this.browseLog.push(this.area)
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss">
.innerHeight{
  min-height: calc( 100vh - 70px );
  }
.footer{
  height: 70px;
}
</style>
