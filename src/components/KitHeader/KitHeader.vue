<template>
  <header class="header">
    <div class="header-layout">
      <router-link class="header-logo" to="/">
        <img class="hero-logo__img" :src="Logo" alt="UI Style Guide EGGPLORE" />
        <div class="header-logo__content">
          <span class="header-logo__name">Vukit.</span>
          <span class="header-logo__description">
            UI Style Guide
            <div class="project-version">V1</div>
          </span>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/assets/img/logo.svg';

export default defineComponent({
  name: 'KitHeader',
  setup() {
    return { Logo };
  },
});
</script>

<style lang="scss" src="./_styles.scss" scoped />
