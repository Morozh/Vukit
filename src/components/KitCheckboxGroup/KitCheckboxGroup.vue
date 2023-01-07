<template>
  <div class="kit-checkbox-group">
    <div
      class="kit-checkbox-group__item"
      v-for="option in options"
      :key="option.id"
    >
      <kit-checkbox
        :label="option.name"
        :id="option.id"
        :name="name"
        :value="option.name"
        :checked="value.includes(option.id)"
        group
        @updateCheckboxGroup="checkGroup"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import KitCheckbox from '@/components/KitCheckbox/KitCheckbox.vue';
import Hero from '@/types/Hero';

export default defineComponent({
  name: 'KitCheckboxGroup',
  components: {
    KitCheckbox,
  },
  props: {
    name: {
      required: true,
      type: String,
    },
    value: {
      required: true,
      type: Array,
    },
    options: {
      required: true,
      type: Array as PropType<Hero[]>,
      validator: (value: any[]) => {
        const hasNameKey = value.every((option) => Object.keys(option).includes('name'));
        const hasIdKey = value.every((option) => Object.keys(option).includes('id'));

        return hasNameKey && hasIdKey;
      },
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const checkGroup = (params: Record<string | number,
     { optionId: string; checked: boolean }
    >): void => {
      const updateValue = [...props.value];

      if (params.checked) {
        updateValue.push(params.optionId);
      } else {
        updateValue.splice(updateValue.indexOf(params.optionId), 1);
      }

      emit('update:value', updateValue);
    };

    return { checkGroup };
  },
});
</script>

<style lang="scss" src="./_styles.scss" scoped />
