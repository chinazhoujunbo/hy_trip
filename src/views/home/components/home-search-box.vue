<script setup>

  import {useRouter} from 'vue-router';
  import useCityStore from '../../../stores/modules/city.js';
  import {computed, ref} from 'vue';
  import {storeToRefs} from 'pinia';
  import {useHome} from '@/stores/modules/home.js';
  import {formatDate} from '@/utils/format_date.js';

  const rooter = useRouter();
  defineProps({
    hotCity: {
      type: Object,
      default: () => ({})
    }
  });

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

  // 获取选中城市位置
  const currentCity = computed(() => useCityStore().currentCity.cityName);

  // 入住、离店日期
  const { startDay, endDay, startDate, endDate, interValDay } = storeToRefs(useHome());
  const startShowCalendar = ref(false);
  const endShowCalendar = ref(false);
  function startDayClick() {
    startShowCalendar.value = true;
  }
  function endDayClick() {
    endShowCalendar.value = true;
  }
  function startOnConfirm(date) {
    startShowCalendar.value = false;
    startDate.value = date;
    startDay.value = formatDate(date);
  }
  function endOnConfirm(date) {
    endShowCalendar.value = false;
    endDate.value = date;
    endDay.value = formatDate(date);
  }

  console.log(new Date(startDay.value));
</script>

<template>
  <div class="search-box">
<!--      位置信息-->
      <div class="item gray-bottom-line location">
          <div class="city" @click="cityClick">{{ currentCity }}</div>
          <div class="position" @click="positionClick">
              <span class="text">我的位置</span>
              <img src="@/assets/img/home/icon_location.png" alt=""/>
          </div>
      </div>

<!--      日期范围-->
      <div class="item gray-bottom-line data-range">
          <div class="data-item start-day">
<!--              <van-cell title="选择单个日期" :value="startDay" @click="show = true" />-->
              <van-calendar v-model:show="startShowCalendar"
                            :max-date="endDate"
                            color="#ff9854"
                            :round="false"
                            @confirm="startOnConfirm" />
              <div class="tip">入住</div>
              <div class="date" @click="startDayClick">{{ startDay }}</div>
          </div>
          <div class="data-item interval-day">共{{ interValDay }}晚</div>
          <div class="data-item end-day">
              <van-calendar v-model:show="endShowCalendar"
                            :min-date="startDate"
                            color="#ff9854"
                            :round="false"
                            @confirm="endOnConfirm" />
              <div class="tip">离店</div>
              <div class="date" @click="endDayClick">{{ endDay }}</div>
          </div>
      </div>

<!--      价格不限 人数不限-->
      <div class="item gray-bottom-line">
          <div class="price-number price">价格不限</div>
          <div class="price-number number">人数不限</div>
      </div>

<!--      关键字/位置/民宿名-->
      <div class="item gray-bottom-line">
          <div style="width: 100%; color: #969799">
              关键字/位置/民宿名
          </div>
      </div>

 <!--              热门建议-->
      <div class="hot-city">
          <template v-for="(item, index) in hotCity" :key="index">
              <div class="city"
                   :style="{
                             color:item?.tagText?.color,
                             background: item?.tagText?.background.color }"
              >
                  {{ item?.tagText?.text }}
              </div>
          </template>
      </div>
  </div>
</template>

<style scoped lang="less">

.search-box {
  padding: 0 20px 0 20px ;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    margin-top: 5px;

    .price {
      flex: 2;
      color: #969799;
    }

    .number {
      color: #969799;
    }
  }

  .price-number {
    flex: 1;
  }

  .location {
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

  .data-range {
    --van-calendar-popup-height: 100%;

    .data-item {
      flex: 1;
    }

    .date {
      padding-bottom: 3px;
      margin-top: 5px;
    }
  }

  .hot-city{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 10px;
    margin-left: -3px;

    .city {
      border-radius: 14px;
      text-align: center;
      font-size: 12px;
      line-height: 1;
      //line-height: 21.8px;
      //height: 21.8px;
      padding: 10px 8px;
      margin: 3px;
    }
  }

}


</style>