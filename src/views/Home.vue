<template>
  <div class="hero-block">
    <h1 class="title-0">Vukit.</h1>
    <div class="hero-grid">
      <img class="hero-grid__preview" :src="UiPreview" alt="UiPreview" />
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiPreview from '@/assets/img/ui-kit-preview-1.svg';

export default defineComponent({
  name: 'Home',
  setup() {
    return { UiPreview };
  },
});
</script>

<style lang="scss" scoped>
.hero-grid {
  display: grid;
  justify-content: center;

  &__preview {
    margin: 0 auto;
  }
}

.title-0 {
  text-align: center;
  border: none;
  margin-bottom: 3rem;
}
</style>
