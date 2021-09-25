import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.config.globalProperties.$dark_mode = ref(false);
app.config.globalProperties.$show_modal_delete = ref(false);
app.config.globalProperties.$productoBtnBorrar = ref(false);
app.config.globalProperties.$modo_edicion = ref(false);

app.use(router).mount("#app");
