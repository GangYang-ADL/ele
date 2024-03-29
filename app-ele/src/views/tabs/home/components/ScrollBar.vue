<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { IScrollBarInfo } from '@/types'
import { useInterval } from '@/use/useInterval'
import { useTimeout } from '@/use/useTimeout'
interface IProps {
  intervalTime?: number
  transitionTime?: number
  height?: number
  data: IScrollBarInfo[]
}

const props = withDefaults(defineProps<IProps>(), {
  intervalTime: 3000,
  transitionTime: 1000,
  height: 40,
})

const heightPx = `${props.height}px`

const containerRef = ref()

onMounted(() => {
  const container = containerRef.value
  const count = container.children.length
  const firstSwipeItem = container.children[0]
  container.style.height = `${count * props.height}px`
  let index = 0
  useInterval(() => {
    index++
    if (index >= count) {
      firstSwipeItem.style.transform = `translateY(${index * props.height}px)`
      const clear = setTimeout(() => {
        firstSwipeItem.style.transform = ``
        container.style.transform = ``
        container.style.transition = ``
        clearTimeout(clear)
      }, props.transitionTime)
    }
    container.style.transform = `translateY(-${index * props.height}px)`
    container.style.transition = `all linear ${props.transitionTime}ms`
    index = index % count
  }, props.intervalTime)
})
</script>

<template>
  <div class="home-scroll-bar">
    <div class="home-scroll-bar__swipe">
      <div ref="containerRef">
        <div class="swipe-item" v-for="item in props.data" :key="item.type">
          <div class="scroll-bar__info" :class="`scroll-bar__info__${item.type}`">
            <span class="info-badge">{{ item.badge }}</span>
            <span class="info-detail" v-html="item.detail"></span>
            <span class="info-btn op-thin-border">{{ item.btn }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-scroll-bar {
  --coupon-color: rgb(252, 164, 40);
  --cashback-color: rgb(252, 68, 25);
  &__swipe {
    background: white;
    border-radius: 8px;
    margin: 5px 10px;
    font-size: 13px;
    position: relative;
    overflow: hidden;
    height: v-bind(heightPx);
    .swipe-item {
      height: v-bind(heightPx);
    }
  }
  .scroll-bar__info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    height: 100%;

    .info-badge {
      border-radius: 5px;
      padding: 2px 6px;
      color: white;
      margin-right: 6px;
      font-size: 12px;
    }
    .info-detail {
      flex: 1;
    }
    .info-btn {
      padding: 3px 14px;
      font-size: 12px;
      &.op-thin-border:before {
        border-radius: 50px;
      }
    }

    .info-num {
      font-weight: bold;
      margin: 0 2px;
    }

    &__coupon {
      .info-badge {
        background: var(--coupon-color);
      }
      .info-btn {
        color: var(--coupon-color);
        &:before {
          border-color: var(--coupon-color);
        }
      }
      .info-num {
        color: var(--coupon-color);
      }
    }

    &__cashback {
      .info-badge {
        background: var(--cashback-color);
      }
      .info-btn {
        color: var(--cashback-color);
        &:before {
          border-color: var(--cashback-color);
        }
      }
      .info-num {
        color: var(--cashback-color);
      }
    }
  }
}
</style>
