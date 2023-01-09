<template>
  <div class="content-block">
    <h1 class="title-0">Checkbox</h1>
  </div>
  <div class="content-block">
    <div class="grid-list">
      <div class="grid-list__item">
        <p class="grid-list__item-name">Checkbox Active</p>
        <kit-checkbox
          label="Checkbox Basic"
          name="checkboxActive"
          id="checkboxActive"
          value="Some value"
          v-model:checked="checkboxActive"
        />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Checkbox Disabled</p>
        <kit-checkbox
          label="Checkbox Disabled"
          name="checkboxDisabled"
          id="checkboxDisabled"
          value="Some disabled value"
          :disabled="checkboxDisabled"
          v-model:checked="checkboxDisabledChecked"
        />
      </div>
      <div class="grid-list__item">
        <h4 class="grid-list__item-name">Checkbox Group Selected Items: {{ selectedHeroes }}</h4>
        <kit-checkbox-group
          v-model:value="selectedHeroes"
          name="heroes"
          :options="listOfHeroes"
        />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Switch: </p>
        <kit-checkbox
          type="switch"
          label="Switch checkbox"
          name="switch"
          id="switch"
          value="Switch checkbox"
          v-model:checked="checkboxSwitch"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import KitCheckbox from '@/components/KitCheckbox/KitCheckbox.vue';
import KitCheckboxGroup from '@/components/KitCheckboxGroup/KitCheckboxGroup.vue';
import Hero from '@/types/Hero';

export default defineComponent({
  components: {
    KitCheckbox,
    KitCheckboxGroup,
  },
  setup() {
    const checkboxActive = ref<boolean>(true);
    const checkboxDisabled = ref<boolean>(true);
    const checkboxDisabledChecked = ref<boolean>(true);

    const listOfHeroes = ref<Hero[]>([
      {
        name: 'Ironman',
        id: '1',
      },
      {
        name: 'Spiderman',
        id: '2',
      },
      {
        name: 'Joker',
        id: '3',
      },
      {
        name: 'Batman',
        id: '4',
      },
    ]);

    const selectedHeroes = ref<string[]>(['1']);

    const checkboxSwitch = ref<boolean>(false);

    return {
      checkboxActive,
      checkboxDisabled,
      checkboxDisabledChecked,
      listOfHeroes,
      selectedHeroes,
      checkboxSwitch,
    };
  },
});
</script>
