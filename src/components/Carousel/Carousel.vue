<template>
  <div class="carousel">
    <vue-flux
      :options="vfOptions"
      :images="vfImages"
      :transitions="vfTransitions"
      :captions="vfCaptions"
      ref="slider"
    >
      <template v-slot:preloader>
        <flux-preloader />
      </template>

      <template v-slot:caption>
        <flux-caption />
      </template>

      <template v-slot:controls>
        <flux-controls />
      </template>

      <template v-slot:pagination>
        <flux-pagination />
      </template>

      <template v-slot:index>
        <flux-index />
      </template>
    </vue-flux>
  </div>
</template>

<script>
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
} from "vue-flux";

export default {
  components: {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
  },

  data: () => ({
    vfOptions: {
      autoplay: true,
    },
    vfImages: [
      "http://placehold.it/600x200",
      "http://placehold.it/600x200",
      "http://placehold.it/600x200",
    ],
    vfTransitions: ["cube"],
    vfCaptions: [
      "Amazing Hardvare sale!",
      "Christmas gifts to buy",
      "New supreme screwdriver",
    ],
  }),
};
</script>

<style scoped>
    .vue-flux {
        height: 70vh;
    }
</style>
