<template>
  <div :class="modo_oscuro ? ['main-bg-dark-color', 'main-dark-color'] : ''">
    <MainHeader>
      <ul class="md:flex items-center justify-between text-base pt-4 md:pt-0">
        <li>
          <router-link
            class="
              inline-block
              no-underline
              hover:text-black hover:underline
              py-2
              px-4
            "
            :class="modo_oscuro ? 'muted-color' : 'muted-dark-color'"
            to="/"
            >Tienda
          </router-link>
        </li>
        <li>
          <router-link
            class="
              inline-block
              no-underline
              hover:text-black hover:underline
              py-2
              px-4
            "
            :class="modo_oscuro ? 'muted-color' : 'muted-dark-color'"
            to="/about"
            >¿Quienes somos?</router-link
          >
        </li>
      </ul>
    </MainHeader>
    <router-view />
    <MainFooter></MainFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
// import { Icon } from "@iconify/vue";

export default {
  name: "Home",
  components: {
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      modo_oscuro: this.$dark_mode,
      modo_edicion: this.$modo_edicion,
    };
  },
};
</script>

<style>
:root {
  --main-color: hotpink;

  --muted-color: #5f6774;
  --muted-dark-color: #5f6774;

  --main-bg-dark-color: #bdc1c6;
  --main-dark-color: ghostwhite;
  --pane-padding: 5px 42px;
}

.main-bg-dark-color {
  background-color: var(--main-bg-dark-color);
}
.main-dark-color {
  color: var(--main-dark-color);
}
.muted-color {
  color: var(--muted-color);
}
.muted-dark-color {
  color: var(--muted-dark-color);
}
</style>
