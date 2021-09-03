<template>
  <div class="main-bg-color">
      <div class="bg-cover mb-5 banner-picture" style="background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1630651590696.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hMIpWRPewFeQqCre0a0t93vVJtYpyA21JkBvpmkc7hOpjFM2SennuO2lE%2FYXzyu%2BTZGo9%2FHHcIQvLqkUXd9bHRocV4d1IE2wDzuaM6LwGcfwAPzbxVq9EDXbBOSIyCDC4qkNBRWmNOGT%2BuPqWH2ZHDBlC6cazewxy9zif5a%2FjFsdHyko2VCiyUM%2F5eJHBJip21EAD09tH7cgC6jFT02Appp0sHwGqEliAEA9FdrWQ9YIcgASgV1Ski89c99N2z%2BE2EzRNaedl7RPu3dG3T3S%2FgKkVZLHrSllV5qPENmibNlXq5H%2FekhG6mG18dj%2BExFKM7DbswmcFO2njmcENfCwCA%3D%3D')"></div>
      <div class="container pb-5 innerHeight">
        <h2 class="text-navy">推薦景點</h2>
        <div class="row">
          <div class="col-md-8 col-lg-7">
            <div class="bg-cover card-img" style="background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1630565292571.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CJbJjxWfvVm0ErjxdXaU9EiPKr2PXJi%2BgVQaFMXRKdPsSMOCWrg5iGHx9pdsPO4ls1DEAmZllJveN0oBwI6aN%2BXJajvr4h6f4cbulQXNV1i71JpU428MOxwtfzdVfdMqZ2%2FV%2FmIIl8LRSZbkTbxt3Y4Vfl1hrwkPWGi%2B65eWlmuW1OE2qSEGbGkA3BqPyyyya67E1fuZz4KCVqNxlBxvOepoRpQqQS9lui%2Fd%2Bto%2FfLIbSfQekH3s36vr%2Fr3bemmykT%2F%2BtlA3SPJi64Aui7lyxpO%2BTNze7MiqC%2Fks5gH4nYNG%2FBXAC9v4libUeVgo7DY%2FVebGTz5%2F%2F0cQShNW9tZbRQ%3D%3D')">
              <div class="card-img-name main-text-mobile-color d-flex justify-content-center align-items-center font-bold d-block d-md-none">
                <router-link to="/home"  class="text-link">
                  <i class="fas fa-tree"></i><i class="ps-2">田寮月世界</i>
                </router-link>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-lg-5 d-flex align-items-center justify-content-center">
            <div class="font-bold d-none d-md-block">
              <router-link to="/home"  class="text-pc-link">
                <i class="fas fa-tree"></i><i class="ps-2">田寮月世界</i>
              </router-link>
            </div>
          </div>
        </div>

        <div class="row my-4">
          <div class="col-md-4 col-lg-5 d-flex align-items-center justify-content-center">
            <div class="font-bold d-none d-md-block">
              <router-link to="/home"  class="text-pc-link">
                <i class="fas fa-mountain"></i><i class="ps-2">佛光山</i>
              </router-link>
            </div>
          </div>
          <div class="col-md-8 col-lg-7">
            <div class="bg-cover card-img" style="background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1630565901946.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AwIXIZrZsu3fJW5QMLVZVMxGmP1x%2BC0Yy%2BIDI1XTHNd4uBfyQlmeDEOwy%2FqK5VWg0yJ31d9KT2OKmhfVCBVoEYqMEfCJZdkYD0AUTNQDEC2YMo6nIAHumL5IDz15bKgq%2FWev8HlH6PMu3yCu9M4nbe7%2BWbemKXALAwd%2FQigqtNf6QSVGV1yIgqtFoe1hJ16ciQLx1ctxcgWqE95Yp8MPM3T7r2b0lB74SlhlxniG2CzYqtJ7KXpFqsXlxRHPGYU53POt7wBrnUS%2FWPLW7HMzyK5md3nU6E%2BiiKEWHJcb65%2FHNCvQGuijLngi9ev8kzrxCYlzHS57mNrtOv2HIjfLgQ%3D%3D')">
              <div class="card-img-name main-text-mobile-color d-flex justify-content-center align-items-center font-bold d-block d-md-none">
                <router-link to="/home"  class="text-link">
                  <i class="fas fa-tree"></i><i class="ps-2">佛光山</i>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 col-lg-7">
            <div class="bg-cover card-img" style="background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1630566086567.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Qa3MLCKrekBNR2U1CIHzTUcqTuzAv37Noc8sg02tP%2B%2B1iiV3qirtff0KLWsifKR%2BoygpwhHcuhnZH9ectBrL73YqkoWL6nfieChzn%2BOwPq7sCFD%2FJ9f6pzTE8k8DvXApOoPSOa65DgR34xRs%2FpR6ADvr6v32G99IyvpA2YvUfmSWHhB4ii5wWVgX%2FnFFvQf6065xhFIxd4oVaCXr9apKTIm2d7sMJMJwrGPAIvYz86Ur0ZQDCM26VYDLCiWytcjQiOAqTvYsFumAXtV3yd4%2FVeeHW8y3BVF%2Bava9C%2FGtbCqa69cSee0dNHoIF7r8O4wVNnm5oo5MQG7QKoXe231iBg%3D%3D')">
              <div class="card-img-name main-text-mobile-color d-flex justify-content-center align-items-center font-bold d-block d-md-none">
                <router-link to="/home"  class="text-link">
                  <i class="fas fa-seedling"></i><i class="ps-2">九番埤濕地公園</i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-5 d-flex align-items-center justify-content-center">
            <div class="fs-1 main-text-color font-bold">
              <div class="font-bold d-none d-md-block">
              <router-link to="/home"  class="text-pc-link">
                <i class="fas fa-seedling"></i><i class="ps-2">九番埤濕地公園</i>
              </router-link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  }

}
</script>

<style lang="scss">
.innerHeight{
  min-height: calc( 100vh - 72px );
  }
.footer{
  height: 72px;
}
</style>
