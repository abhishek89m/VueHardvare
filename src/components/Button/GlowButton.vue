<template>
  <button class="glow-button" @mousemove="onMouseMove" @click="onClick">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  methods: {
    onMouseMove({ pageX, pageY, target: element }) {
      const x = pageX - element.offsetLeft;
      const y = pageY - element.offsetTop;

      element.style.setProperty("--x", `${x}px`);
      element.style.setProperty("--y", `${y}px`);
    },

    onClick() {
      this.$emit('click');
    },
  },
  props: {
    label: {
      type: String,
      default: () => "Click here",
    },
  },
};
</script>

<style>
.glow-button {
  --x: 50%;
  --y: 50%;
  --button-bg-color: #000;

  position: relative;
  appearance: none;
  padding: 1em 3em;
  color: #ccc;
  cursor: pointer;
  outline: none;
  border-radius: 100px;
  border: 3px solid transparent;
  background: linear-gradient(var(--button-bg-color), var(--button-bg-color)) padding-box,
    radial-gradient(farthest-corner at var(--x) var(--y), #00c9a7, #845ec2)
      border-box;

  &:hover:not(:active){
    --button-bg-color: #222;
  }
}
</style>
