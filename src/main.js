import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App)

app.config.globalProperties.$dark_mode = ref(false);
app.config.globalProperties.$modal_delete = ref(false);

app.use(router).mount("#app");
