<template>
  <router-view #="{Component}">
      <component :is="Component"/>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
html {
    @include root-font-size();
}
</style>
