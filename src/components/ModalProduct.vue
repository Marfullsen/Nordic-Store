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
    <!-- Modal del producto -->
    <div
      class="
        md:flex
        shadow-lg
        mx-6
        md:mx-auto
        my-40
        max-w-lg
        md:max-w-2xl
        h-64
        z-10
      "
    >
      <img
        class="
          h-full
          w-full
          md:w-1/3
          object-cover
          rounded-lg rounded-r-none
          pb-5/6
        "
        src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg"
        alt="bag"
      />
      <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
        <div class="flex justify-end" style="margin: -13px -13px 4px 0">
          <Icon
            @click="showModal = false"
            icon="carbon:close-filled"
            color="#A91B0D"
            width="40"
          />
        </div>
        <div class="flex items-center">
          <h2 class="text-xl text-gray-800 font-medium mr-auto">
            {{ prod_name }}
          </h2>
          <p class="text-gray-800 font-semibold tracking-tighter">
            ${{ Number(prod_price).toLocaleString() }}
          </p>
        </div>
        <p class="text-sm text-gray-700 mt-4">
          {{ prod_caption }}
        </p>
        <div class="flex items-center justify-end mt-4 top-auto">
          <button
            class="
              bg-white
              text-red-500
              px-4
              py-2
              rounded
              mr-auto
              hover:underline
            "
          >
            Delete
          </button>
          <button class="bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">
            Edit
          </button>
          <button class="bg-blue-600 text-gray-200 px-2 py-2 rounded-md">
            Publish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  // props: {
  //   prod_name: String,
  //   prod_caption: String,
  //   prod_price: String,
  // },
  data() {
    return {
      showModal: this.$modal_product,
      prod_name: this.$prod_name,
      prod_caption: this.$prod_caption,
      prod_price: this.$prod_price,
    };
  },
};
</script>
