<template>
  <div class="products-peek">
    <h1 class="products-title">Products</h1>
    <product v-for="product in products" :key="product.id" :data="product" />
    <router-link class="show-more-products" to="/all">
      <glow-button>Show more</glow-button>
    </router-link>
  </div>
</template>

<script>
import Product from '@/components/Product/Product.vue';
import GlowButton from '@/components/Button/GlowButton.vue';

export default {
  components: {
    Product, GlowButton
  },

  props: {
    products: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style scoped>
  .products-peek {
    margin-top: 30px;
    padding: 20px 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(25% - 60px));
    grid-auto-flow: row;
    grid-gap: 20px 10px;
    align-items: stretch;
    justify-content: center;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .products-title {
      font-size: 2em;
      text-align: left;
      grid-column: 1 / -1;
    }

    .show-more-products {
      grid-column: 1 / -1;
    }
  }
</style>
