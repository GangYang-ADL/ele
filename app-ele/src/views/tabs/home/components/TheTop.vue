<script setup lang="ts">
import { ref } from 'vue'
import type { ISearchRecommend } from '@/types'
import OpSearch from '@/components/OpSearch.vue'

interface IProps {
  recommends: ISearchRecommend[]
}

defineProps<IProps>()

interface IEmits {
  (e: 'searchClick'): void
}

const emits = defineEmits<IEmits>()
</script>

<template>
  <div class="home-top">
    <div class="top">
      <img class="location-icon" src="@/assets/imgs/index_page/location.png" alt="" />
      <div class="location">28 Rowland Road, Magill</div>
      <img class="shopcart-icon" src="@/assets/imgs/index_page/shopcart.png" alt="" />
      <img class="comments-icon" src="@/assets/imgs/index_page/comments.png" alt="" />
    </div>
    <OpSearch
      shape="round"
      background="linear-gradient(to right, rgb(53, 200, 350), rgb(31, 175, 243))"
      placeholder="Search what you like here"
      @inputClick="emits('searchClick')"
    >
      <template #right-icon>
        <div @click="emits('searchClick')">search</div>
      </template>
    </OpSearch>
    <div class="search-recommend">
      <div v-for="item in recommends" :key="item.value" class="tag">{{ item.label }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-top {
  background: linear-gradient(to right, rgb(53, 200, 350), rgb(31, 175, 243));
  color: white;
  .top {
    display: flex;
    align-items: center;
    padding: 10px 10px 0 10px;
    line-height: 15px;
    font-size: 15px;
    font-weight: bold;
    .location-icon {
      width: 20px;
      height: 20px;
    }
    .location {
      flex: 1;
    }
    .shopcart-icon {
      width: 24px;
      height: 24px;
    }
    .comments-icon {
      width: 28px;
      height: 24px;
      margin-left: 10px;
    }
  }
  .search-recommend {
    display: flex;
    padding: 0 10px 8px;
    .tag {
      font-size: 12px;
      border-radius: 10px;
      background: rgb(242, 242, 242, 0.3);
      padding: 2px 8px;
      margin-right: 10px;
    }
  }
}
</style>
<style lang="scss">
.home-top {
  .van-field__right-icon {
    margin-right: 0;
  }
}
</style>
