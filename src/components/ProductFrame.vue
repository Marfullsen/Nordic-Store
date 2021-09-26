<template>
  <div
    @click="verProducto"
    class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col relative init-desaparecer"
  >
    <Icon
      v-if="modo_edicion === true"
      class="absolute right-7 hover:grow"
      style="z-index: 1"
      @click="deseaBorrar($event)"
      icon="simple-line-icons:close"
      color="#dc143d"
      width="75"
    />
    <div>
      <img class="hover:grow hover:shadow-lg" :src="image_url" />
      <div class="pt-3 flex items-center justify-between">
        <p class="">{{ prod_name }}</p>
        <Icon icon="simple-line-icons:basket-loaded" width="30" />
      </div>
      <p class="pt-1 text-gray-900">
        ${{ Number(prod_price).toLocaleString() }}
      </p>
    </div>
    <!-- <modal-delete></modal-delete> -->
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
// import ModalDelete from "./ModalDelete.vue";

export default {
  name: "ProductFrame",
  components: {
    Icon,
    // ModalDelete,
  },
  props: {
    image_url: String,
    prod_name: String,
    prod_price: String,
  },
  data() {
    return {
      modo_edicion: this.$modo_edicion,
      showModalDelete: this.$show_modal_delete,
      showModalProduct: this.$modal_product,
      productoBtnBorrar: this.$productoBtnBorrar,
      g_prod_name: this.$prod_name,
      g_prod_caption: this.$prod_caption,
      g_prod_price: this.$prod_price,
    };
  },
  methods: {
    deseaBorrar(e) {
      this.showModalDelete = true;
      this.productoBtnBorrar = e.target.closest("div");
    },
    verProducto() {
      if (!this.showModalDelete) this.showModalProduct = true;
      this.g_prod_name = this.prod_name;
      this.g_prod_caption = "CAPTION";
      this.g_prod_price = this.prod_price;
    },
  },
};
</script>

<style>
.init-desaparecer {
  transition: opacity 1.5s linear;
}

.desaparecer {
  opacity: 0;
  transition-timing-function: linear, step-end;
}
</style>
