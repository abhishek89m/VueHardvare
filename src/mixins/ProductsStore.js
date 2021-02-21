import ProductService from "@/api/ProductService";

export const ProvidesProductsStore = {
  provide() {
    return {
      productsStore: this.productsStore,
    };
  },
  async created() {
    const { data: products } = await ProductService.getProducts();
    this.$set(this.productsStore, "products", products);
  },
  data() {
    return {
      productsStore: {
        products: [],
      },
    };
  },
};

export const UsesProductsStore = {
  inject: ["productsStore"],
};
