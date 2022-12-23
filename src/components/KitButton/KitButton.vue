<template>
  <button
    :class="[
      'kit-button',
      `kit-button_${color}`,
      { 'kit-button_rounded': rounded },
      { 'kit-button_outlined': outlined },
      { 'kit-button_icon': icon },
      { 'kit-button_large': size === 'large' }
    ]"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <span v-if="icon">
      <font-awesome-icon :icon="`fa-regular fa-${icon}`" />
    </span>
    <span v-else>{{ label }}</span>
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
    disabled: {
      required: false,
      type: Boolean,
    },
    outlined: {
      required: false,
      type: Boolean,
    },
    icon: {
      required: false,
      type: String,
    },
    size: {
      required: false,
      type: String,
      default: 'normal',
    },
  },
  emits: ['cb'],
  setup(props, { emit }) {
    const clickOnButton = () => {
      emit('cb');
    };

    return { clickOnButton };
  },
});
</script>

<style lang="scss" src="./_styles.scss" scoped />
