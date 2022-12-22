<template>
  <div class="kit-typo-layout">
    <div class="kit-typo-layout__font">
      <h1 class="kit-typo-layout__font-title">SF</h1>
      <span class="kit-typo-layout__font-subtitle">San Francisco</span>
    </div>
    <div class="kit-typo-table">
      <div class="kit-typo-table-cell">
        <h1 class="kit-typo-table-cell__title title-1">Heading 1</h1>
        <span class="kit-typo-table-cell__info">34px L1.4</span>
      </div>
      <div class="kit-typo-table-cell">
        <h2 class="kit-typo-table-cell__title title-2">Heading 2</h2>
        <span class="kit-typo-table-cell__info">22px L1.4</span>
      </div>
      <div class="kit-typo-table-cell">
        <h3 class="kit-typo-table-cell__title title-3">Heading 3</h3>
        <span class="kit-typo-table-cell__info">18px L1.35</span>
      </div>
      <div class="kit-typo-table-cell">
        <h4 class="kit-typo-table-cell__title title-4">Heading 4</h4>
        <span class="kit-typo-table-cell__info">16px L1.3</span>
      </div>
      <div class="kit-typo-table-cell">
        <span class="kit-typo-table-cell__title text-button-1">BUTTON 1</span>
        <span class="kit-typo-table-cell__info">16px L1.4</span>
      </div>
      <div class="kit-typo-table-cell">
        <span class="kit-typo-table-cell__title text-button-2">BUTTON 2</span>
        <span class="kit-typo-table-cell__info">12px L1.4</span>
      </div>
      <div class="kit-typo-table-cell">
        <span class="kit-typo-table-cell__title text-caption-1">CAPTION 1</span>
        <span class="kit-typo-table-cell__info">12px L1.2</span>
      </div>
      <div class="kit-typo-table-cell">
        <span class="kit-typo-table-cell__title text-caption-2">CAPTION 2</span>
        <span class="kit-typo-table-cell__info">10px L1.1</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KitTypographyTable',
});
</script>

<style lang="scss" src="./_styles.scss" scoped />
