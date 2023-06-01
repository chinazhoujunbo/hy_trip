import {onActivated, onDeactivated, onMounted, onUnmounted, ref} from 'vue';
import {throttle} from 'underscore';

export function useScroll() {
  const reachBottom = ref(false);

  const scrollListenerHandler = throttle(() =>  {
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight) reachBottom.value = true;
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

  return { reachBottom };
}