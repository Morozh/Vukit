<template>
  <div class="sidebar" :class="{ 'is-open': isOpenMenu }">
    <div
      class="sidebar-toggle"
      @click="toggleMenu"
    >
      <span>&#9658;</span>
    </div>
    <div class="sidebar-layout container">
      <ul class="sidebar-list">
        <li
          v-for="link in links"
          :key="link"
          class="sidebar-list__item"
        >
          <router-link
            :to="link.link"
            class="sidebar-list__item-link"
            active-class="is-active"
          >
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
  emits: ['toggleMenu'],
  setup(props, { emit }) {
    const links = ref<Link[]>([
      {
        title: 'Typography',
        link: '/typography',
      },
      {
        title: 'Buttons',
        link: '/buttons',
      },
      {
        title: 'Checkbox',
        link: '/checkbox',
      },
    ]);

    const isOpenMenu = ref<boolean>(true);

    const toggleMenu = () => {
      isOpenMenu.value = !isOpenMenu.value;
      emit('toggleMenu', isOpenMenu.value);
    };

    return {
      links,
      isOpenMenu,
      toggleMenu,
    };
  },
});
</script>

<style lang="scss" src="./_styles.scss" scoped />
