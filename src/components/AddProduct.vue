<template>
  <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col relative">
    <a href="#">
      <img
        class="hover:grow hover:shadow-lg moreCardsBelow p-20"
        src="../assets/img/proveedor.png"
      />
      <div class="pt-3 flex items-center justify-between">
        <p class="">Agregar producto</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
}
</script>

<style>
.moreCardsBelow {
  background-color: white;
  box-shadow: gray 0px 0px 0px 3px inset, white 10px -10px 0px -3px,
    gray 10px -10px, white 20px -20px 0px -3px, gray 20px -20px;
}
</style>
