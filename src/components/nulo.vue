<template>
  <div class="flex w-full h-screen items-center justify-center text-center">
    <div
      class="p-12 bg-gray-100 border border-gray-300"
      @dragover="dragover"
      @drop="drop"
    >
      <input
        type="file"
        name="fields[assetsFieldHandle][]"
        id="assetsFieldHandle"
        class="w-px h-px opacity-0 overflow-hidden absolute"
        @change="onChange"
        ref="file"
        accept=".txt,.json,.csv"
      />
      <label for="assetsFieldHandle" class="block cursor-pointer">
        <div style="padding: 1em">
          Arrastra un archivo con datos <strong>en formato JSON</strong
          ><br /><br />
          sad<br /><br />
          También puedes
          <span
            style="text-decoration: underline; color: #0099eb; cursor: pointer"
          >
            haz click aquí</span> para seleccionar un archivo.
        </div>
      </label>
      <span v-if="this.filelist.length">
        <span v-for="file in filelist" :key="file">
          {{ file.name }}
          <button
            class="ml-2"
            type="button"
            style="margin-left: 1em"
            @click="remove()"
            title="Remove file"
          >
            Quitar archivo
          </button>
        </span>
      </span>
    </div>
    <div>
      <textarea
        v-show="texto"
        v-model="texto"
        readonly
        style="
          width: 60%;
          height: 200px;
          text-align: center;
          color: #299a5c;
          margin-bottom: 1em;
        "
        :style="borderColor"
        placeholder='{ "Nombre": "URL",
  "Nombre 2": "URL",
  "Nombre 3": "URL", }'
      ></textarea>
    </div>
  </div>
</template>
