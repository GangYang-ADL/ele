<script setup lang="ts">
import { ref } from 'vue'
import OpSearch from '@/components/OpSearch.vue'
import { fetchSearchData } from '@/api/search'
import type { ISearchResult } from '@/types/home'

interface IEmits {
  (e: 'cancel'): void
}

const emits = defineEmits<IEmits>()

const searchValue = ref('')
const searchResult = ref([] as ISearchResult[])
const hasSearched = ref(false)
const onSearch = async (v?: string | number) => {
  const { list } = await fetchSearchData(v as string)
  searchResult.value = list
}
</script>

<template>
  <div class="search-view">
    <OpSearch
      show-action
      v-model:model-value="searchValue"
      v-model:has-searched="hasSearched"
      shape="round"
      placeholder="input keyword here please"
      @search="onSearch"
      @cancel="emits('cancel')"
    ></OpSearch>
    <div class="search-view__result">
      <div class="result-item" v-for="item in searchResult" :key="item.label">
        <van-icon name="shop-o"></van-icon>
        <div class="name">{{ item.label }}</div>
        <div class="count">about {{ item.resultCount }} results</div>
      </div>
      <div class="no-result" v-if="!searchResult.length && hasSearched">no results found</div>
    </div>
  </div>
</template>

<style lang="scss">
.search-view {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 999;

  &__result {
    .result-item {
      display: flex;
      align-items: center;
      font-size: 12px;
      padding: 10px;
      border-radius: 1px solid var(--van-gray-1);
      .name {
        flex: 1;
        padding-left: 6px;
      }
      .count {
        font-size: 12px;
        color: var(--van-gray-6);
      }
    }
    .no-result {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: var(--van-gray-6);
      padding: 10px;
    }
  }
}
</style>
