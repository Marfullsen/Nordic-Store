<template>
  <a href="#"><Icon class="btn-flotante" icon="logos:whatsapp" width="70" /></a>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style scoped>
.btn-flotante {
  position: fixed;
  bottom: 40px;
  right: 40px;
  transition: all 300ms ease 0ms;
  border-radius: 50% 50% 50% 0;
}
.btn-flotante:hover {
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-7px);
}
@media only screen and (max-width: 600px) {
  .btn-flotante {
    font-size: 14px;
    padding: 12px 20px;
    bottom: 20px;
    right: 20px;
  }
}
</style>
