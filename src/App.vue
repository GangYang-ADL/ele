<script setup lang="ts">
import { RouterView } from 'vue-router'
import { fetchTest } from './api/test'

fetchTest()
</script>

<template>
  <router-view />
</template>

<style scoped></style>
