<template>
  <div :class="[
    { 'kit-switch-container': type === 'switch' }
  ]">
    <input
      type="checkbox"
      :class="[
        { 'kit-checkbox': type === 'checkbox' },
        { 'kit-switch': type === 'switch' },
      ]"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @input="handleCheckbox($event)"
    >
    <label
      :class="[
        'kit-label',
        { 'is-disabled': disabled }
      ]"
      :for="id"
    >{{ label }}</label>
    <label
      v-if="type === 'switch'"
      :class="[
        'kit-switch-label',
        { 'is-disabled': disabled }
      ]"
      :for="id"
    >{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KitCheckbox',
  props: {
    name: {
      required: false,
      type: String,
    },
    id: {
      required: false,
      type: String,
    },
    value: {
      required: false,
      type: String,
    },
    label: {
      required: false,
      type: String,
      default: '',
    },
    checked: {
      required: false,
      type: Boolean,
      default: false,
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false,
    },
    group: {
      required: false,
      type: Boolean,
      default: false,
    },
    type: {
      required: false,
      type: String,
      default: 'checkbox',
    },
  },
  emits: ['update:checked', 'updateCheckboxGroup'],
  setup(props, { emit }) {
    const handleCheckbox = (e: Record<string, { checked: boolean }>): void => {
      if (props.group) {
        emit('updateCheckboxGroup', { optionId: props.id, checked: e.target.checked });
      } else {
        emit('update:checked', e.target.checked);
      }
    };

    return { handleCheckbox };
  },
});
</script>

<style lang="scss" src="./_styles.scss" scoped />
