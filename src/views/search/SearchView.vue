<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import OpSearch from '@/components/OpSearch.vue'
import { fetchSearchData } from '@/api/search'
import type { ISearchResult } from '@/types/home'
import { useToggle } from '@/use/useToggle'
import { useDebounce } from '@/use/useDebounce'

interface IEmits {
  (e: 'cancel'): void
}

const emits = defineEmits<IEmits>()

const [INIT, DONE, SEARCHING] = [-1, 0, 1]
const searchValue = ref('')
const searchResult = ref([] as ISearchResult[])
const searchState = ref(INIT)

const [isHistoryTagShown, toggleHistoryTag] = useToggle(false)

// dummy data
const HISTORY_TAGS = [
  'pizza',
  'kfc',
  'mac',
  'pho',
  'fried rice',
  'fried noddles',
  'steak',
  'fruit',
  'bubble tea',
  'salad',
]

const historyTags = computed(() =>
  isHistoryTagShown.value ? HISTORY_TAGS : HISTORY_TAGS.slice(0, 5)
)

const onSearch = async (v?: string | number) => {
  try {
    searchState.value = SEARCHING
    const { list } = await fetchSearchData(v as string)
    searchResult.value = list
  } finally {
    searchState.value = DONE
  }
}

const onTagClick = (val: string) => {
  searchValue.value = val
  onSearch(val)
}

const debounceValue = useDebounce(searchValue, 1000)
watch(debounceValue, (newData) => {
  if (!newData) {
    searchResult.value = []
    return
  }
  onSearch(newData as string)
})
</script>

<template>
  <div class="search-view">
    <OpSearch
      show-action
      v-model:model-value="searchValue"
      shape="round"
      placeholder="input keyword here please"
      @search="onSearch"
      @cancel="emits('cancel')"
    ></OpSearch>
    <div class="search-view__history" v-if="!searchValue">
      <div class="label">History Results</div>
      <TransitionGroup name="list">
        <div class="history-tag" v-for="res in historyTags" :key="res" @click="onTagClick(res)">
          {{ res }}
        </div>
        <div class="history-tag">
          <van-icon name="arrow-up" v-if="isHistoryTagShown" @click="toggleHistoryTag"></van-icon>
          <van-icon name="arrow-down" v-else @click="toggleHistoryTag"></van-icon>
        </div>
      </TransitionGroup>
    </div>
    <div class="search-view__result" v-else>
      <div class="searching" v-if="searchState === SEARCHING">
        fetching data for you, won't be long
      </div>
      <template v-if="searchState === DONE">
        <div class="result-item" v-for="item in searchResult" :key="item.label">
          <van-icon name="shop-o"></van-icon>
          <div class="name">{{ item.label }}</div>
          <div class="count">about {{ item.resultCount }} results</div>
        </div>
        <div class="no-result" v-if="!searchResult.length">no results found</div>
      </template>
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

  &__history {
    padding: var(--van-padding-sm);
    .label {
      margin-bottom: var(--van-padding-xs);
    }
    .history-tag {
      display: inline-block;
      font-size: 12px;
      border-radius: 10px;
      color: var(--van-gray-6);
      background: var(--van-gray-1);
      padding: 4px 8px;
      margin-right: 10px;
      margin-bottom: var(--van-padding-xs);
    }
  }

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
    .searching,
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

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transition: translateY(30px);
}
</style>
