<template>
  <div class="base-page">
    <VButton @click="changeDir">changedir</VButton>
    <v-tooltip-pure :dir="dir" text="Hello world ❤">
      <template v-slot="{attrs}">
        <VButton v-bind="attrs">
          Pure css
        </VButton>
      </template>
    </v-tooltip-pure>
    <v-tooltip dir="left">
      <template v-slot:activator="{on, attrs}">
        <VButton v-on="on" v-bind="attrs">
          Create jiggle wiggle
        </VButton>
      </template>
      <span>Jiggle tip</span>
    </v-tooltip>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import VTooltip from './components/VTooltip.vue'
import VButton from './components/VButton.vue'
import VTooltipPure from './components/VTooltipPure.vue'

export default defineComponent({
  name: 'App',
  components: {
    VTooltip,
    VTooltipPure,
    VButton
  },
  setup() {
    const dir = ref('bottom')
    function changeDir() {
      if (dir.value === 'bottom') {
        dir.value = 'top'
      } else if (dir.value === 'top') {
        dir.value = 'left'
      } else if (dir.value === 'left') {
        dir.value = 'right'
      } else if (dir.value === 'right') {
        dir.value = 'bottom'
      }
    }

    return {
      dir,
      changeDir
    }
  }
});
</script>

<style lang="scss">
body {
  background-color: #2f2f2f;
  padding: 100px 10px;
}

</style>
