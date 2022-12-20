<template>
  <header class="header">
    <div class="header-layout">
      <router-link class="header-logo" to="/">UI Kit (Vue3 + composition API + TS)</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KitHeader',
});
</script>

<style lang="scss" src="./_styles.scss" scoped />
