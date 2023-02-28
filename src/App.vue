<script setup lang="ts">
import { RouterView } from 'vue-router'
import { fetchTest } from './api/test'

fetchTest()
</script>

<template>
  <router-view />
</template>

<style>
@import 'normalize.css' l;

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
</style>
