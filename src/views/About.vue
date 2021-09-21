<template>
  <button @click="showModal = !showModal">Hello</button>
  <modal-delete></modal-delete>
</template>

<script>
import ModalDelete from "../components/ModalDelete.vue";
export default {
  components: { ModalDelete },
  data() {
    return {
      showModal: this.$modal_delete,
    };
  },
};
</script>

<style></style>
