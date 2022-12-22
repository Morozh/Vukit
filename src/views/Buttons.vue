<template>
  <div class="content-block">
    <h1 class="title-0">Buttons</h1>
  </div>
  <div class="content-block">
    <div class="grid-list">
      <div class="grid-list__item">
        <p class="grid-list__item-name">Basic</p>
        <kit-button label="Accent" color="accent" />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Colors</p>
        <kit-button label="Primary" color="primary" />
        <kit-button label="Success" color="success" />
        <kit-button label="Info" color="info" />
        <kit-button label="Warning" color="warning" />
        <kit-button label="Danger" color="danger" />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Rounded</p>
        <kit-button label="Primary" color="primary" rounded="true" />
        <kit-button label="Success" color="success" rounded="true" />
        <kit-button label="Info" color="info" rounded="true" />
        <kit-button label="Warning" color="warning" rounded="true" />
        <kit-button label="Danger" color="danger" rounded="true" />
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KitButton from '@/components/KitButton/KitButton.vue';

export default defineComponent({
  components: {
    KitButton,
  },
  // setup() {},
});
</script>
