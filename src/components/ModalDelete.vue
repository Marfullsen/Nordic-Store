<template>
  <div
    v-if="showModal"
    class="
      min-w-screen
      h-screen
      animated
      fadeIn
      faster
      fixed
      left-0
      top-0
      flex
      justify-center
      items-center
      inset-0
      z-50
      outline-none
      focus:outline-none
      bg-no-repeat bg-center bg-cover
    "
    id="modal-eliminar"
  >
    <div
      @click="showModal = false"
      class="absolute bg-black opacity-80 inset-0 z-0"
    ></div>
    <div
      class="
        border-t-4 border-red-500
        max-w-lg
        p-5
        relative
        mx-auto
        my-auto
        rounded-xl
        shadow-lg
        bg-white
      "
    >
      <!--content-->
      <div class="">
        <!--body-->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-16 h-16 flex items-center text-red-500 mx-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <h2 class="text-center text-xl font-bold py-4">
          ¿Borrar producto <span id="span_producto"></span> ?
        </h2>
        <p class="text-sm text-gray-500 px-8">
          Se borrará de manera definitiva el producto.
        </p>
      </div>
      <!--footer-->
      <div class="p-3 mt-2 text-center space-x-4 md:block">
        <button
          class="
            mb-2
            md:mb-0
            bg-white
            px-5
            py-2
            text-sm
            shadow-sm
            font-medium
            tracking-wider
            border
            text-gray-600
            rounded-full
            hover:shadow-lg hover:bg-gray-100
          "
          @click="showModal = false"
        >
          Cancelar
        </button>
        <button
          @click="borrarProducto"
          id="btnBorrar"
          class="
            mb-2
            md:mb-0
            bg-red-500
            border border-red-500
            px-5
            py-2
            text-sm
            shadow-sm
            font-medium
            tracking-wider
            text-white
            rounded-full
            hover:shadow-lg hover:bg-red-600
          "
        >
          Borrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: this.$show_modal_delete,
      productoBtnBorrar: this.$productoBtnBorrar,
    };
  },
  methods: {
    borrarProducto() {
      const self = this;
      this.productoBtnBorrar.classList.add("desaparecer");
      setTimeout(function () {
        self.productoBtnBorrar.style.display = "None";
      }, 500);
      this.showModal = false;
    },
  },
};
</script>

<style></style>
