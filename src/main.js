import { createApp } from "vue";
import "./assets/scss/style.scss";

// # importo il router
import { router } from "./router";

// # importo il js di bootstrap
import * as bootstrap from "bootstrap";

import App from "./App.vue";

const app = createApp(App);
// # usiamo il router
app.use(router);
app.mount("#app");
