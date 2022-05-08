import { defineClientAppEnhance } from "@vuepress/client";
import ContactForm from "./components/ContactForm.vue";
import AppStoreBadge from "@appstand/assets/vue-components/AppStoreBadge/index.vue";
import AppIcon from "@appstand/assets/vue-components/AppIcon.vue";
import AppStandSvg from "./components/AppStandSvg.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("ContactForm", ContactForm);
  app.component("AppStoreBadge", AppStoreBadge);
  app.component("AppIcon", AppIcon);
  app.component("AppStandSvg", AppStandSvg);
});
