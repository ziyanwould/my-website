<!--
 * @Author: Liu Jiarong
 * @Date: 2024-04-30 19:25:20
 * @LastEditors: Liu Jiarong
 * @LastEditTime: 2024-12-21 22:22:05
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
    <!-- <a
      class="text-center p-3"
      style="cursor: pointer; display: inline-block"
      onclick="window.open('https://liujiarong.top')"
    > -->
    <span
      class="text-center p-3"
      style="cursor: pointer; display: inline-block"
    >
      {{ copyright }}
      <p
        style="
          display: flex;
          align-items: center;
          line-height: 16px;
          justify-content: center;
          padding-top: 12px;
        "
      >
        <img
          :src="require(`@/assets/images/waba.png`)"
          style="width: 16px"
          alt="安全图标"
        />
        <a
          href="https://beian.mps.gov.cn/#/query/webSearch?code=45010902000181"
          rel="noreferrer"
          target="_blank"
          style="margin-left: 5px"
          >桂公网安备45010902000181</a
        >
        <a
          target="_blank"
          href="https://beian.miit.gov.cn"
          style="margin-left: 5px"
          >桂ICP备2021005990号-1</a
        >
      </p>
    </span>

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
