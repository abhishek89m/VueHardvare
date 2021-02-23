<template>
  <div class="all-products">
    <div class="filters">
      <search-input @input="onSearch" />
    </div>
    <div class="products-grid">
      <product
        v-for="product in visibleProducts"
        :key="product.id"
        :data="product" />
    </div>
    <glow-button @click="showMoreProducts" v-show="isShowMoreVisible">Show more</glow-button>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput/SearchInput.vue';
import Product from '@/components/Product/Product.vue';
import { UsesProductsStore } from '@/mixins/ProductsStore';
import GlowButton from '@/components/Button/GlowButton.vue';

export default {
  name: 'AllProducts',
  data() {
    return {
      startIndex: 0,
      endIndex: 24,
      searchTerm: '',
      isShowMoreVisible: true,
    };
  },

  computed: {
    visibleProducts() { 
      return this.filteredProducts?.slice(this.startIndex, this.endIndex) ?? [];
    },

    filteredProducts() {
      const { products } = this.productsStore;
      
      if (!this.searchTerm) {
        return products.map((v) => v);
      }

      return products.filter(({ name }) => name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    },
  },

  methods: {
    onSearch(searchTerm)  {
      this.$set(this, 'searchTerm', searchTerm);
    },

    showMoreProducts()  {
      const { length: count } = this.filteredProducts;
      this.$set(this, 'endIndex', this.endIndex <= count ? (this.endIndex + 12) : count);

      const { products: { length } } = this.productsStore;
      this.isShowMoreVisible = this.endIndex < length
    },
  },

  components: {
    SearchInput,
    Product,
    GlowButton,
  },

  mixins: [
    UsesProductsStore,
  ],
}
</script>

<style scoped>
  .all-products {
    padding-bottom: 60px;

    .products-grid {
      padding: 20px 40px;
      margin-top: 60px;
      margin-bottom: 30px;
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
    }
  }
</style>
