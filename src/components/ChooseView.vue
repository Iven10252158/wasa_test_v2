<template>
<div v-if="area.Name">
    <div class="card main-text-color mb-3" v-for="item in filterArea" :key="item.Id">
        <img :src="item.Picture1" class="card-img-top" :alt="item.Name">
        <div class="card-body">
            <h5 class="card-title">{{ item.Name }}</h5>
            <h6>
                <span class="text-danger pe-2"><i class="fas fa-map-marker-alt"></i></span>
                {{ item.Add }}
            </h6>
            <h6>
                <span class="text-danger pe-2"><i class="far fa-clock"></i></span>
                開放時間：{{ item.Opentime }}
            </h6>
            <p class="card-text">{{ item.Description }}</p>
        </div>
    </div>
</div>
<div v-else class="card main-text-color w-md-50">
    <div class="card-body">
        <h5>請選擇景點</h5>
    </div>
</div>
</template>

<script>
export default {
  props: ['sendData', 'area'],
  data () {
    return {
      tempArea: {}
    }
  },
  computed: {
    filterArea () {
      return this.sendData.filter(item => {
        return this.area.Name === item.Name
      })
    }
  }
}
</script>
