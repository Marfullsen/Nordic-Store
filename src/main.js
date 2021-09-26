import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.config.globalProperties.$dark_mode = ref(false);
app.config.globalProperties.$show_modal_delete = ref(false);
app.config.globalProperties.$productoBtnBorrar = ref(false);
app.config.globalProperties.$modo_edicion = ref(false);
app.config.globalProperties.$modal_product = ref(false);
app.config.globalProperties.$prod_name = ref("PROD");
app.config.globalProperties.$prod_caption = ref("CAPTION");
app.config.globalProperties.$prod_price = ref(0);

app.use(router).mount("#app");
