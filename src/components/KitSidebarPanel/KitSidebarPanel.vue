<template>
  <div class="sidebar">
    <div class="sidebar-layout container">
      <ul class="sidebar-list">
        <li
          v-for="link in links"
          :key="link"
          class="sidebar-list__item"
        >
          <router-link class="sidebar-list__item-link" :to="link.link">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Link from '@/types/Link';

export default defineComponent({
  name: 'KitSidebar',
  setup() {
    const links = ref<Link[]>([
      {
        title: 'Typography',
        link: '/typography',
      },
      {
        title: 'Button',
        link: '/button',
      },
    ]);

    return { links };
  },
});
</script>

<style lang="scss" src="./_styles.scss" scoped />
