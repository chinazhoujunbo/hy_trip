<script setup>

  import {useRouter} from 'vue-router';
  import useCityStore from '../../../stores/modules/city.js';
  import {computed, ref} from 'vue';
  import {storeToRefs} from 'pinia';
  import {useHome} from '@/stores/modules/home.js';
  import {formatDate} from '@/utils/format_date.js';

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
      <div class="location">
          <div class="city" @click="cityClick">{{ currentCity }}</div>
          <div class="position" @click="positionClick">
              <span class="text">我的位置</span>
              <img src="@/assets/img/home/icon_location.png" alt=""/>
          </div>
      </div>

<!--      日期范围-->
      <div class="data-range">
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
  </div>
</template>

<style scoped lang="less">

.search-box {
  padding: 0 20px 0 20px ;

  .location {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;

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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;

    .data-item {
      flex: 1;
    }

    .date {
      margin-top: 5px;
    }
  }
}


</style>