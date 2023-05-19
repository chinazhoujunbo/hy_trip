import dayjs from 'dayjs';

export function formatDate(date) {
  return dayjs(date).format('MM月DD日')
}

export function getDaysBetweenDates(date1, date2) {
  const ONE_DAY = 1000 * 60 * 60 * 24; // 一天的毫秒数
  const time1 = new Date(date1).getTime();
  const time2 = new Date(date2).getTime();
  const timeDiff = Math.abs(time2 - time1); // 取绝对值
  return Math.round(timeDiff / ONE_DAY);
}

export function addDay(num) {
  const day = new Date();
  day.setDate(new Date().getDate() + num);
  return day;
}