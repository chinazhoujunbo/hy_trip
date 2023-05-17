<script setup>

  import {useRouter} from 'vue-router';

  const rooter = useRouter();

  function positionClick() {
    navigator.geolocation.getCurrentPosition((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }
  function cityClick() {
    rooter.push('/city');
  }
</script>

<template>
  <div class="search-box">
      <div class="location">
          <div class="city" @click="cityClick">广州</div>
          <div class="position" @click="positionClick">
              <span class="text">我的位置</span>
              <img src="@/assets/img/home/icon_location.png" alt=""/>
          </div>
      </div>
  </div>
</template>

<style scoped lang="less">
.location {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333
  }

  .position {
    display: flex;
    align-items: center;
    color: #666;
    width: 80px;

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>