<template>
  <div class="main-page">
    <div class="main-layout">
      <kit-header />
      <kit-sidebar-panel />
      <div class="content-layout">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KitHeader from '@/components/KitHeader/KitHeader.vue';
import KitSidebarPanel from '@/components/KitSidebarPanel/KitSidebarPanel.vue';

export default defineComponent({
  name: 'App',
  components: {
    KitHeader,
    KitSidebarPanel,
  },
});
</script>

<style lang="scss" src="./assets/scss/main.scss" />
