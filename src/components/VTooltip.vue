<template>
  <slot
    name="activator"
    :on="on"
    :attrs="attrs"
  />
  <div
      class="tooltip__tip"
      :class="{'tooltip__tip--active': hovered}"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: "VTooltip",
  props: {
    dir: {
      type: String,
      required: false,
      default: 'bottom'
    },
    offset: {
      type: Number,
      required: false,
      default: 20
    }
  },
  setup(props: any, context: any) {
    const hovered = ref(false)
    const attrs = ref({
      class: 'tooltip__activator'
    })
    const on = ref({
      mouseover: handleMouseOver,
      mouseout: handleMouseOut
    })

    function handleMouseOver() {
      hovered.value = true

    }
    function handleMouseOut() {
      hovered.value = false
    }

    return {
      attrs,
      on,
      hovered
    }
  }
}
</script>

<style lang="scss" scoped>

.tooltip {
  &__activator {
    position: relative;
  }

  &__tip {
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(175, 175, 175, 0.16);
    border-radius: 4px;
    color: #181818;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.2px;
    display: inline-block;
    padding: 6px 10px 9px;
    position: absolute;
    text-transform: none;
    text-align: center;
    width: auto;
    opacity: 0;
    pointer-events: none;
    transition: opacity .1s ease-in-out;
    visibility: hidden;

    &--active {
      opacity: 1;
      visibility: visible;
    }
  }
}

</style>
