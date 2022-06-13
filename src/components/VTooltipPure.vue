<template>
  <slot :attrs="attrs"/>
</template>

<script lang="ts">
import {computed, PropType, reactive, ref, watch} from "vue";

enum TooltipDirections {
  bottom = 'bottom',
  top = 'top',
  left = 'left',
  right = 'right'
}

export default {
  name: "VTooltipPure",
  props: {
    dir: {
      type: String as PropType<TooltipDirections>,
      required: false,
      default: 'bottom'
    },
    text: {
      type: String,
      required: true,
    }
  },
  setup(props: any) {
    const tooltipDirectionClassName = computed(() => 'tooltip--direction-' + props.dir)
    const attrs = ref({
      'class': 'tooltip ' + tooltipDirectionClassName.value,
      'data-tooltip-dir': props.dir,
      'aria-label': props.text,
      'aria-haspopup': true
    })

    watch(tooltipDirectionClassName, () => {
      attrs.value['class'] = 'tooltip ' + tooltipDirectionClassName.value
    })

    return {
      attrs,
      tooltipDirectionClassName
    }
  }
}
</script>

<style lang="scss">

$xOffset: 105%;
$yOffset: 4px;

.tooltip {
  position: relative;
  &::after {
    content: attr(aria-label);
    background: #FFFFFF;
    box-shadow: 0 2px 4px rgba(175, 175, 175, 0.16);
    border-radius: 4px;
    color: #181818;
    font-weight: 400;
    font-size: 14px;
    font-family: sans-serif;
    line-height: 130%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.2px;
    padding: 6px 10px 9px;
    position: absolute;
    text-transform: none;
    text-align: center;
    width: max-content;
    pointer-events: none;
    max-height: 33px;
    box-sizing: border-box;
    transition: opacity .25s ease-in-out;
    opacity: 0;
  }

  &::before {
    content: '';
    position: absolute;
    background-color: transparent;
    border-width: 6px;
    border-style: solid;
    transition: opacity .25s ease-in-out;
    opacity: 0;
  }

  &--direction {
    &-left {
      &::before {
        right: calc(100% - .6988rem / 2);
        top: 50%;
        transform: translateY(-50%);
        border-color: transparent transparent transparent white;
      }

      &::after {
        right: $xOffset;
        top: $yOffset;
      }
    }

    &-right {
      &::before {
        left: calc(100% - .6988rem / 2);
        top: 50%;
        transform: translateY(-50%);
        border-color: transparent white transparent transparent;
      }

      &::after {
        left: $xOffset;
        top: $yOffset;
      }
    }

    &-top {
      &::before {
        bottom: calc(100% - 1.15rem / 2);
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        border-color: white transparent transparent transparent;
      }

      &::after {
        transform: translateX(-50%);
        left: 50%;
        top: -$xOffset;
      }
    }

    &-bottom {
      &::before {
        top: calc(100% - 1.15rem / 2);
        left: 50%;
        transform: translateX(-50%) translateY(50%);

        border-color: transparent transparent white transparent;
      }

      &::after {
        transform: translateX(-50%);
        left: 50%;
        bottom: -$xOffset;
      }
    }
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
  }
}

</style>
