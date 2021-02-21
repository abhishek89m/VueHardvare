<template>
  <div class="search-input-wrapper">
    <font-awesome-icon class="search-icon" icon="search" />
    <input class="search-input" ref="search-input" type="text" @input="onInputChanged" />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {};
  },
  methods: {

    /**
     * Debounced input handler that emits only if at least 3 characters are input
     */
    onInputChanged(e) {
      clearTimeout(this.timeout);

      if (e.target.value.length < 3) {
        return;
      }

      this.timeout = setTimeout(() => {
        this.$emit('input', e.target.value);
      }, 200);
    },
  },
};
</script>

<style scoped>
  .search-input-wrapper {
    position: relative;
    display: inline-block;

    .search-icon {
      position: absolute;
      left: 1em;
      top: 1em;
      display: block;
      height: 20px;
      width: 20px;
      color: #aaa;
    }

    .search-input  {
      $color-bg: #555;
      $color-shadow: #000000;
      $color-alt: #009277;
      $color-alt-outer: #34655c;

      padding: 1em 2em 1em 3em;
      width: 300px;
      letter-spacing: 1px;
      color: #ccc;
      border: none;
      border-radius: 2em;
      transition:  box-shadow 200ms linear;
      box-shadow: inset 2px 2px 5px $color-shadow, inset -2px -2px 5px $color-alt, 0 0 10px $color-alt-outer;
      background-color: $color-bg;

      &:focus {
        box-shadow:  inset 1px 1px 2px $color-shadow, inset -1px -1px 2px $color-alt, 0 0 10px $color-alt-outer;
      }
    }
  }
</style>
