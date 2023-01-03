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
        <p class="grid-list__item-name">Disabled</p>
        <kit-button label="Accent" color="accent" disabled />
        <kit-button label="Primary" color="primary" disabled />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Colors</p>
        <kit-button label="Accent" color="accent" />
        <kit-button label="Primary" color="primary" />
        <kit-button label="Success" color="success" />
        <kit-button label="Info" color="info" />
        <kit-button label="Warning" color="warning" />
        <kit-button label="Danger" color="danger" />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Rounded</p>
        <kit-button label="Accent" color="accent" rounded />
        <kit-button label="Primary" color="primary" rounded />
        <kit-button label="Success" color="success" rounded />
        <kit-button label="Info" color="info" rounded />
        <kit-button label="Warning" color="warning" rounded />
        <kit-button label="Danger" color="danger" rounded />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Outlined</p>
        <kit-button label="Accent" color="accent" outlined />
        <kit-button label="Primary" color="primary" outlined />
        <kit-button label="Success" color="success" outlined />
        <kit-button label="Info" color="info" outlined />
        <kit-button label="Warning" color="warning" outlined />
        <kit-button label="Danger" color="danger" outlined />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Iconic</p>
        <kit-button label="Accent" color="accent" icon="heart" />
        <kit-button label="Primary" color="primary" icon="hand"/>
        <kit-button label="Success" color="success" icon="address-book" />
        <kit-button label="Info" color="info" icon="credit-card" />
        <kit-button label="Warning" color="warning" icon="lemon" />
        <kit-button label="Danger" color="danger" icon="hourglass" />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Iconic outlined</p>
        <kit-button label="Accent" color="accent" icon="heart" outlined />
        <kit-button label="Primary" color="primary" icon="hand" outlined />
        <kit-button label="Success" color="success" icon="address-book" outlined />
        <kit-button label="Info" color="info" icon="credit-card" outlined />
        <kit-button label="Warning" color="warning" icon="lemon" outlined />
        <kit-button label="Danger" color="danger" icon="hourglass" outlined />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Size</p>
        <kit-button label="Normal" color="accent" />
        <kit-button label="Large" color="accent" size="large" />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Event</p>
        <kit-button label="@Click" color="primary" @cb="eventForButton" />
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
  setup() {
    const eventForButton = () => {
      alert('You clicked!');
    };

    return { eventForButton };
  },
});
</script>
