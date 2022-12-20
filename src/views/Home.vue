<template>
  <div class="main-layout">
    <kit-header />
    <kit-sidebar-panel />
    <div class="content-layout">
      <h1>Welcome to our UI Kit!</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KitHeader from '@/components/KitHeader/KitHeader.vue';
import KitSidebarPanel from '@/components/KitSidebarPanel/KitSidebarPanel.vue';

export default defineComponent({
  name: 'Home',
  components: {
    KitHeader,
    KitSidebarPanel,
  },
});
</script>
