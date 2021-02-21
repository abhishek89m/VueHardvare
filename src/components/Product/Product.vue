<template>
  <div class="product" @click="onProductClick">
    <img class="product-image" src="http://placehold.it/200x200" :alt="data.name" />
    <span class="product-name">{{ data.name }} - {{ data.price }}</span>
  </div>
</template>

<script>

export default {
  methods: {
    onProductClick() {
      this.$emit('click', this.data);
    },
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
  .product {
    display: flex;
    flex-direction: column;
    color: #ccc;
    font-size: 1.2em;

    .product-name {
      margin-top: 10px;
    }
  }
</style>
