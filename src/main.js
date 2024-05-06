/**
 * @Author: Liu Jiarong
 * @Date: 2024-04-30 19:25:20
 * @LastEditors: Liu Jiarong
 * @LastEditTime: 2024-05-01 00:57:57
 * @FilePath: /my-website/src/main.js
 * @Description:
 * @
 * @Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { createApp } from "vue";
import App from "./App.vue";

// router
import router from "./router";

// bootstrap bundle
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

import { createMetaManager, defaultConfig } from "vue-meta";
const metaManager = createMetaManager(false, {
  ...defaultConfig,
  meta: { tag: "meta", nameless: true },
});

// font aswesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFileLines, faFileCode } from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedinIn, faGithub, faFileLines, faChrome, faFileCode);

createApp(App)
  .use(bootstrap)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(metaManager)
  .mount("#app");
