import Vue from 'vue';

const baseUrl = "http://localhost:8080";

export default {
    getProducts() {
        return Vue.axios.get(`${baseUrl}/api/products.json`);
    },
};
