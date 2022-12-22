<template>
  <button
    :class="[
      'kit-button',
      `kit-button_${color}`,
      { 'kit-button_rounded': rounded },
    ]"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KitButton',
  props: {
    label: {
      required: true,
      type: String,
      default: 'Button',
    },
    color: {
      required: false,
      type: String,
      default: 'accent',
    },
    rounded: {
      required: false,
      type: Boolean,
    },
  },
});
</script>

<style lang="scss" src="./_styles.scss" scoped />
