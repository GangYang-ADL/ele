<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const active = ref(route.name as string)

watch(active, (nv) => {
  router.push({
    name: nv,
  })
})
</script>

<template>
  <router-view />
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">Home</van-tabbar-item>
    <van-tabbar-item name="orders" icon="bars">Order</van-tabbar-item>
    <van-tabbar-item name="settings" icon="setting-o"> Setting</van-tabbar-item>
  </van-tabbar>
</template>

<style></style>
