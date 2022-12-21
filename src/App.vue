<template>
  <div class="main-page">
    <div class="main-layout">
      <kit-header />
      <kit-sidebar-panel @toggle-menu="toggleContent" />
      <div class="content-layout" :class="{ 'is-full': isFullContent }">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import KitHeader from '@/components/KitHeader/KitHeader.vue';
import KitSidebarPanel from '@/components/KitSidebarPanel/KitSidebarPanel.vue';

export default defineComponent({
  name: 'App',
  components: {
    KitHeader,
    KitSidebarPanel,
  },
  setup() {
    const isFullContent = ref<boolean>(false);
    const toggleContent = () => {
      isFullContent.value = !isFullContent.value;
    };

    return { isFullContent, toggleContent };
  },
});
</script>

<style lang="scss" src="./assets/scss/main.scss" />
