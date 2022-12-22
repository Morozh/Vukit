<template>
  <div class="content-block">
    <h1 class="title-0">Typography</h1>
  </div>
  <div class="content-block">
    <kit-typography-table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KitTypographyTable from '@/components/KitTypographyTable/KitTypographyTable.vue';

export default defineComponent({
  components: {
    KitTypographyTable,
  },
});
</script>
