<template>
  <div class="home">
    <carousel />

    <products-peek :products="topProducts" />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel/Carousel.vue';
import ProductsPeek from '@/components/ProductsPeek/ProductsPeek.vue';
import { UsesProductsStore } from '@/mixins/ProductsStore';

export default {
  name: 'Home',
  computed: {
    topProducts() {
      const { products } = this.productsStore;
      return products.slice(0, 12);
    },
  },
  components: {
    Carousel, ProductsPeek
  },
  mixins: [
    UsesProductsStore,
  ],
}
</script>
