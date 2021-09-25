<template>
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
          :style="'background-image: url(' + url_image1 + ')'"
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
              <p v-if="!modo_edicion" class="text-black text-2xl my-4">
                {{ banner_text1 }}
              </p>
              <div
                v-else
                class="text-black text-2xl my-4"
                contenteditable
                @input="onInput"
              >
                {{ banner_text1 }}
              </div>
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
                >{{ banner_link1 }}</a
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
          :style="'background-image: url(' + url_image2 + ');'"
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
              <p v-if="!modo_edicion" class="text-black text-2xl my-4">
                {{ banner_text2 }}
              </p>
              <div
                v-else
                class="text-black text-2xl my-4"
                contenteditable
                @input="onInput"
              >
                {{ banner_text2 }}
              </div>
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
                >{{ banner_link2 }}</a
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
          :style="'background-image: url(' + url_image3 + ');'"
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
              <p v-if="!modo_edicion" class="text-black text-2xl my-4">
                {{ banner_text3 }}
              </p>
              <div
                v-else
                class="text-black text-2xl my-4"
                contenteditable
                @input="onInput"
              >
                {{ banner_text3 }}
              </div>
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
                >{{ banner_link3 }}</a
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
</template>

<script>
export default {
  name: "MainCarousel",
  props: {
    url_image1: String,
    banner_text1: String,
    banner_link1: String,
    url_image2: String,
    banner_text2: String,
    banner_link2: String,
    url_image3: String,
    banner_text3: String,
    banner_link3: String,
  },
  data() {
    return {
      modo_edicion: this.$modo_edicion,
    };
  },
  methods: {
    onInput(e) {
      console.log(e.target.innerText);
    },
  },
};
</script>

<style></style>
