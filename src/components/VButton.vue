<template>
  <button class="button" type="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">

export default {
  name: "VButton",
}
</script>

<style lang="scss" scoped>

.button {
  padding: 10px 30px;
  font-size: 17px;
  background-color: #1ea7fd;
  color: white;
  border: none;
  border-radius: 6px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #2985c0;
  }
}

</style>
