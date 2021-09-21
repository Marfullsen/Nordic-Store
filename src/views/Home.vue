<template>
  <main
    class="text-gray-600 work-sans leading-normal text-base tracking-normal"
    :class="modo_oscuro ? ['main-bg-dark-color', 'main-dark-color'] : ''"
  >
    <div class="carousel relative container mx-auto" style="max-width: 1600px">
      <div class="carousel-inner relative overflow-hidden w-full">
        <!--Slide 1-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div class="carousel-item absolute opacity-0" style="height: 50vh">
          <div
            class="
              block
              h-full
              w-full
              mx-auto
              flex
              pt-6
              md:pt-0 md:items-center
              bg-cover bg-right
            "
            style="
              background-image: url('https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80');
            "
          >
            <div class="container mx-auto" style="background: #fffa">
              <div
                class="
                  flex flex-col
                  w-full
                  lg:w-1/2
                  md:ml-16
                  items-center
                  md:items-start
                  px-6
                  tracking-wide
                "
              >
                <p class="text-black text-2xl my-4">
                  Stripy Zig Zag Jigsaw Pillow and Duvet Set
                </p>
                <a
                  class="
                    text-xl
                    inline-block
                    no-underline
                    border-b border-gray-600
                    leading-relaxed
                    hover:text-black hover:border-black
                  "
                  href="#"
                  >view product</a
                >
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-3"
          class="
            prev
            control-1
            w-10
            h-10
            ml-2
            md:ml-10
            absolute
            cursor-pointer
            hidden
            text-3xl
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-gray-900
            leading-tight
            text-center
            z-10
            inset-y-0
            left-0
            my-auto
          "
          >‹</label
        >
        <label
          for="carousel-2"
          class="
            next
            control-1
            w-10
            h-10
            mr-2
            md:mr-10
            absolute
            cursor-pointer
            hidden
            text-3xl
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-gray-900
            leading-tight
            text-center
            z-10
            inset-y-0
            right-0
            my-auto
          "
          >›</label
        >

        <!--Slide 2-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div
          class="carousel-item absolute opacity-0 bg-cover bg-right"
          style="height: 50vh"
        >
          <div
            class="
              block
              h-full
              w-full
              mx-auto
              flex
              pt-6
              md:pt-0 md:items-center
              bg-cover bg-right
            "
            style="
              background-image: url('https://images.unsplash.com/photo-1530263131525-1c1d26feaa60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80');
            "
          >
            <div class="container mx-auto" style="background: #fffa">
              <div
                class="
                  flex flex-col
                  w-full
                  lg:w-1/2
                  md:ml-16
                  items-center
                  md:items-start
                  px-6
                  tracking-wide
                "
              >
                <p class="text-black text-2xl my-4">Real Bamboo Wall Clock</p>
                <a
                  class="
                    text-xl
                    inline-block
                    no-underline
                    border-b border-gray-600
                    leading-relaxed
                    hover:text-black hover:border-black
                  "
                  href="#"
                  >view product</a
                >
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-1"
          class="
            prev
            control-2
            w-10
            h-10
            ml-2
            md:ml-10
            absolute
            cursor-pointer
            hidden
            text-3xl
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-gray-900
            leading-tight
            text-center
            z-10
            inset-y-0
            left-0
            my-auto
          "
          >‹</label
        >
        <label
          for="carousel-3"
          class="
            next
            control-2
            w-10
            h-10
            mr-2
            md:mr-10
            absolute
            cursor-pointer
            hidden
            text-3xl
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-gray-900
            leading-tight
            text-center
            z-10
            inset-y-0
            right-0
            my-auto
          "
          >›</label
        >

        <!--Slide 3-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item absolute opacity-0" style="height: 50vh">
          <div
            class="
              block
              h-full
              w-full
              mx-auto
              flex
              pt-6
              md:pt-0 md:items-center
              bg-cover bg-bottom
            "
            style="
              background-image: url('https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80');
            "
          >
            <div class="container mx-auto" style="background: #fffa">
              <div
                class="
                  flex flex-col
                  w-full
                  lg:w-1/2
                  md:ml-16
                  items-center
                  md:items-start
                  px-6
                  tracking-wide
                "
              >
                <p class="text-black text-2xl my-4">
                  Brown and blue hardbound book
                </p>
                <a
                  class="
                    text-xl
                    inline-block
                    no-underline
                    border-b border-gray-600
                    leading-relaxed
                    hover:text-black hover:border-black
                  "
                  href="#"
                  >view product</a
                >
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-2"
          class="
            prev
            control-3
            w-10
            h-10
            ml-2
            md:ml-10
            absolute
            cursor-pointer
            hidden
            text-3xl
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-gray-900
            leading-tight
            text-center
            z-10
            inset-y-0
            left-0
            my-auto
          "
          >‹</label
        >
        <label
          for="carousel-1"
          class="
            next
            control-3
            w-10
            h-10
            mr-2
            md:mr-10
            absolute
            cursor-pointer
            hidden
            text-3xl
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-gray-900
            leading-tight
            text-center
            z-10
            inset-y-0
            right-0
            my-auto
          "
          >›</label
        >

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label
              for="carousel-1"
              class="
                carousel-bullet
                cursor-pointer
                block
                text-4xl text-gray-400
                hover:text-gray-900
              "
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-2"
              class="
                carousel-bullet
                cursor-pointer
                block
                text-4xl text-gray-400
                hover:text-gray-900
              "
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-3"
              class="
                carousel-bullet
                cursor-pointer
                block
                text-4xl text-gray-400
                hover:text-gray-900
              "
              >•</label
            >
          </li>
        </ol>
      </div>
    </div>
    <!-- Fin carrusel -->

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
        <add-product></add-product>
        <ProductFrame
          image_url="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="PELO"
          prod_price="5643"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="PELO"
          prod_price="5643"
        >
        </ProductFrame>

        <ProductFrame
          image_url="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="PELO"
          prod_price="5643"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="PELO"
          prod_price="5643"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="PELO"
          prod_price="5643"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="PELO"
          prod_price="5643"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="PELO"
          prod_price="5643"
        >
        </ProductFrame>
        <ProductFrame
          image_url="https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
          prod_name="PELO"
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
          <br>
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
    <modal-delete></modal-delete>
  </main>
</template>

<script>
import ProductFrame from "@/components/ProductFrame.vue";
import { Icon } from "@iconify/vue";
import ModalDelete from "../components/ModalDelete.vue";
import AddProduct from "../components/AddProduct.vue";

export default {
  name: "Home",
  components: {
    Icon,
    ProductFrame,
    ModalDelete,
    AddProduct,
  },
  data() {
    return {
      modo_oscuro: this.$dark_mode,
      showModal: this.$modal_delete,
      modo_edicion: false,
    };
  },
  methods: {
    example() {
      console.log();
    },
  },
  mounted() {
    if (this.$route.query.edit) {
      console.log(this.$route.query.edit);
    }
  },
};
</script>
