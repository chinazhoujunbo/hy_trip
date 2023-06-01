import {onActivated, onDeactivated, onMounted, onUnmounted, ref} from 'vue';
import {throttle} from 'underscore';

export function useScroll() {
  const reachBottom = ref(false);
  const scrollTop = ref(0);
  const scrollListenerHandler = throttle(() =>  {
    const clientHeight = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop.value + clientHeight >= scrollHeight) reachBottom.value = true;
  })
  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })
  onActivated(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })
  onDeactivated(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })

  return { reachBottom, scrollTop };
}