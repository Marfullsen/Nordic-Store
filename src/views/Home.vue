<template>
  <main
    class="text-gray-600 work-sans leading-normal text-base tracking-normal"
    :class="modo_oscuro ? ['main-bg-dark-color', 'main-dark-color'] : ''"
  >
    <main-carousel
      url_image1="https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
      :banner_text1="banner_text1"
      banner_link1="Ver producto."
      url_image2="https://images.unsplash.com/photo-1530263131525-1c1d26feaa60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
      :banner_text2="banner_text2"
      banner_link2="Ver producto."
      url_image3="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
      :banner_text3="banner_text3"
      banner_link3="Ver producto."
    >
    </main-carousel>

    <section class="py-8">
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" class="w-full z-30 top-0 px-6 py-1">
          <div
            class="
              w-full
              container
              mx-auto
              flex flex-wrap
              items-center
              justify-between
              mt-0
              px-2
              py-3
            "
          >
            <a
              class="
                uppercase
                tracking-wide
                no-underline
                hover:no-underline
                font-bold
                text-gray-800 text-xl
              "
              href="#"
            >
              Store
            </a>

            <div class="flex items-center" id="store-nav-content">
              <a
                class="pl-3 inline-block no-underline hover:text-black"
                href="#"
              >
                <svg
                  class="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
              </a>

              <a
                class="pl-3 inline-block no-underline hover:text-black"
                href="#"
              >
                <svg
                  class="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>

        <add-product v-if="modo_edicion"></add-product>

        <ProductFrame
          image_url="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="Tasita de té"
          prod_price="25000"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="Tubo de extensión"
          prod_price="125643"
        >
        </ProductFrame>

        <ProductFrame
          image_url="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="Blah blah blah"
          prod_price="5643"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="Blah blah blah"
          prod_price="5643"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="Blah blah blah"
          prod_price="5643"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="Blah blah blah"
          prod_price="5643"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="Blah blah blah"
          prod_price="5643"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="Blah blah blah"
          prod_price="5643"
        >
        </ProductFrame>
      </div>
    </section>

    <section class="py-8">
      <div class="container py-8 px-6 mx-auto">
        <a
          class="
            uppercase
            tracking-wide
            no-underline
            hover:no-underline
            font-bold
            text-gray-800 text-xl
            mb-8
          "
          href="#"
        >
          Despachos
        </a>

        <p class="mt-8 mb-8">
          Todos nuestros productos incluyen despachos.
          <br />
          <a
            class="text-gray-800 underline hover:text-gray-900"
            href="http://savoy.nordicmade.com/"
            target="_blank"
            >Savoy Theme</a
          >
          created by
          <a
            class="text-gray-800 underline hover:text-gray-900"
            href="https://nordicmade.com/"
            >https://nordicmade.com/</a
          >
          and
          <a
            class="text-gray-800 underline hover:text-gray-900"
            href="https://www.metricdesign.no/"
            target="_blank"
            >https://www.metricdesign.no/</a
          >
        </p>

        <p class="mb-8">
          La política de los despachos es la misma para todos los productos.
          <a href="#">Ver aquí</a> para obtener más información.
          <Icon icon="simple-line-icons:social-facebook" />
        </p>
      </div>
    </section>
    <modal-product></modal-product>
    <modal-delete></modal-delete>
    <boton-flotante></boton-flotante>
  </main>
</template>

<script>
import ProductFrame from "@/components/ProductFrame.vue";
import { Icon } from "@iconify/vue";
import ModalDelete from "../components/ModalDelete.vue";
import AddProduct from "../components/AddProduct.vue";
import MainCarousel from "../components/MainCarousel.vue";
import BotonFlotante from "../components/BotonFlotante.vue";
import ModalProduct from "../components/ModalProduct.vue";

export default {
  name: "Home",
  components: {
    Icon,
    ProductFrame,
    ModalDelete,
    AddProduct,
    MainCarousel,
    BotonFlotante,
    ModalProduct,
  },
  data() {
    return {
      modo_oscuro: this.$dark_mode,
      modo_edicion: this.$modo_edicion,
      banner_text1: "Zig Zag jiwsaw",
      banner_text2: "Brown and blue hardbound book",
      banner_text3: "Blablablah",
    };
  },
  methods: {
    example() {
      console.log();
    },
  },
  mounted() {
    if (this.$route.query.edit === "true") {
      console.log(this.$route.query.edit);
      this.modo_edicion = true;
    }
  },
};
</script>
