<script setup lang="ts">
interface IProps {
  loading: boolean
  type: 'loading' | 'skeleton'
}

defineProps<IProps>()
</script>

<template>
  <div v-if="loading" class="op-loading-view">
    <slot name="template">
      <div v-if="type === 'loading'" class="loading-wrapper">
        <van-loading type="spinner" />
      </div>
      <div v-if="type === 'skeleton'" class="skeleton-wrapper">
        <van-skeleton :row="10" />
        <van-skeleton title avatar :row="5" />
        <van-skeleton title :row="5" />
      </div>
    </slot>
  </div>
  <slot v-else></slot>
</template>

<style lang="scss" scoped>
.op-loading-view {
  background-color: white;
  .loading-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  .skeleton-wrapper {
    padding: 20px 10px;
  }
}
</style>
