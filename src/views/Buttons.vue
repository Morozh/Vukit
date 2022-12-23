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
        <kit-button label="Accent" color="accent" :disabled="true" />
        <kit-button label="Primary" color="primary"  :disabled="true" />
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
        <kit-button label="Accent" color="accent" :rounded="true" />
        <kit-button label="Primary" color="primary" :rounded="true" />
        <kit-button label="Success" color="success" :rounded="true" />
        <kit-button label="Info" color="info" :rounded="true" />
        <kit-button label="Warning" color="warning" :rounded="true" />
        <kit-button label="Danger" color="danger" :rounded="true" />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Outlined</p>
        <kit-button label="Accent" color="accent" :outlined="true" />
        <kit-button label="Primary" color="primary" :outlined="true" />
        <kit-button label="Success" color="success" :outlined="true" />
        <kit-button label="Info" color="info" :outlined="true" />
        <kit-button label="Warning" color="warning" :outlined="true" />
        <kit-button label="Danger" color="danger" :outlined="true" />
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
        <kit-button label="Accent" color="accent" icon="heart" :outlined="true" />
        <kit-button label="Primary" color="primary" icon="hand" :outlined="true" />
        <kit-button label="Success" color="success" icon="address-book" :outlined="true" />
        <kit-button label="Info" color="info" icon="credit-card" :outlined="true" />
        <kit-button label="Warning" color="warning" icon="lemon" :outlined="true" />
        <kit-button label="Danger" color="danger" icon="hourglass" :outlined="true" />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Size</p>
        <kit-button label="Normal" color="accent" />
        <kit-button label="Large" color="accent" size="large" />
      </div>
      <div class="grid-list__item">
        <p class="grid-list__item-name">Event</p>
        <kit-button label="@Click" color="accent" @cb="eventForButton" />
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
