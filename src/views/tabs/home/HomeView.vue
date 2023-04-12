<script setup lang="ts">
import TheTop from './components/TheTop.vue'
import TheTransformer from './components/TheTransformer.vue'
import SearchView from '@/views/search/SearchView.vue'
import ScrollBar from './components/ScrollBar.vue'
import { useToggle } from '@/use/useToggle'
import { useAsync } from '@/use/useAsync'
import { fetchHomePageData } from '@/api/home'
import type { ICountdown, IHomeInfo } from '@/types'
import OpLoadingView from '@/components/OpLoadingView.vue'

const [isSearchViewShow, toggleSearchView] = useToggle(false)

const { pending, data } = useAsync(fetchHomePageData, {
  banner: [],
  searchRecommends: [],
  transformer: [],
  scrollBarInfoList: [],
  countdown: {} as ICountdown,
  activities: [],
} as IHomeInfo)
</script>

<template>
  <div class="home-page">
    <Transition name="fade">
      <SearchView v-if="isSearchViewShow" @cancel="toggleSearchView"></SearchView>
    </Transition>
    <TheTop :recommends="data.searchRecommends" @searchClick="toggleSearchView" />
    <OpLoadingView :loading="pending" type="skeleton">
      <div class="home-page__banner">
        <img v-for="v in data.banner" :key="v.imgUrl" :src="v.imgUrl" />
      </div>
      <TheTransformer :data="data.transformer" />
      <ScrollBar :data="data.scrollBarInfoList" />
    </OpLoadingView>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.home-page {
  background: var(--op-gray-bg-color);

  &__banner {
    img {
      width: 100%;
      padding-top: 10px;
      background: white;
    }
  }
}
</style>
