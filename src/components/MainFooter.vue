<template>
  <footer class="container mx-auto py-8 border-t border-gray-400">
    <div class="container flex px-3 py-8">
      <div class="w-full mx-auto flex flex-wrap">
        <div class="flex w-full lg:w-1/2">
          <div class="px-3 md:px-0">
            <h3 class="font-bold text-gray-900">¿Dónde encontrarnos?</h3>
            <p class="py-4">
              Ettesil es una tienda dedicada a la venta de diversos
              artículos.<br />
              Pueder ir a nuestras redes sociales para más información.
            </p>
          </div>
        </div>
        <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
          <div class="px-3 md:px-0">
            <h3 class="font-bold text-gray-900 pb-2">Redes Sociales</h3>
            <ul class="list-reset items-center">
              <li>
                <Icon icon="simple-line-icons:social-facebook" height="30" />
              </li>
              <li>
                <Icon icon="simple-line-icons:social-instagram" height="30" />
              </li>
              <li>
                <Icon icon="simple-line-icons:tag" height="30" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "MainFooter",
  components: {
    Icon,
  },
  data() {
    return {
      modo_oscuro: this.$dark_mode,
    };
  },
};
</script>

<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
