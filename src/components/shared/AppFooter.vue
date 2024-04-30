<!--
 * @Author: Liu Jiarong
 * @Date: 2024-04-30 19:25:20
 * @LastEditors: Liu Jiarong
 * @LastEditTime: 2024-05-01 00:32:15
 * @FilePath: /my-website/src/components/shared/AppFooter.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <footer class="bg-dark text-white text-center">
    <!-- Grid container -->
    <div class="container p-3 pb-0">
      <!-- Section: Social media -->
      <section>
        <!-- Linkedin -->
        <icon-link
          v-for="link in links"
          :key="link.id"
          :url="link.url"
          :icon="link.icon"
          class="text-white"
        />
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <a
      class="text-center p-3"
      style="cursor: pointer; display: inline-block"
      onclick="window.open('https://beian.miit.gov.cn')"
    >
      {{ copyright }}
    </a>
    <!-- Copyright -->
  </footer>
</template>
<script>
import IconLink from "../reusable/IconLink.vue";
export default {
  props: ["links", "copyright"],
  components: {
    IconLink,
  },
  name: "AppFooter",
};
</script>
<style></style>
