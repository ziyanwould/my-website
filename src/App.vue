<template>
  <metainfo> </metainfo>

  <div
    class="scrollspy-example"
    data-bs-offset="0"
    data-bs-spy="scroll"
    data-bs-target="#main-nav"
    tabindex="0"
  >
    <!-- Render active component contents with vue transition -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- Scroll to top -->
    <back-to-top
      visibleoffset="500"
      right="30px"
      bottom="20px"
      class="shadow-lg"
    >
      <i data-feather="chevron-up"></i>
    </back-to-top>
  </div>
</template>
<script>
// aos
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useMeta } from "vue-meta";

export default {
  data: () => {
    return {
      webTitle: "留加绒网站 软件工程师 免费chatgpt",
    };
  },
  setup() {
    useMeta({
      title: "留加绒网站 软件工程师 免费chatgpt",
      description:
        "一位热衷于前端技术的工程师。通过全栈能力，他将技术创新融入设计，致力于以业务驱动的方式为您提供卓越的数字体验。了解更多关于前端技能、项目经验和团队协作的信息，共同探索技术驱动业务的未来。",
      htmlAttrs: {
        lang: "zh-CN",
        amp: true,
      },
      twitter: {
        title: "留加绒网站 软件工程师 免费chatgpt",
        description:
          "一位热衷于前端技术的工程师。通过全栈能力，他将技术创新融入设计，致力于以业务驱动的方式为您提供卓越的数字体验。了解更多关于前端技能、项目经验和团队协作的信息，共同探索技术驱动业务的未来。",
        card: "summary_large_image",
        image:
          "https://www.liujiarong.top" + require(`@/assets/images/preview.png`),
      },
      og: {
        title: "留加绒网站 软件工程师 免费chatgpt",
        description:
          "一位热衷于前端技术的工程师。通过全栈能力，他将技术创新融入设计，致力于以业务驱动的方式为您提供卓越的数字体验。了解更多关于前端技能、项目经验和团队协作的信息，共同探索技术驱动业务的未来。",
        type: "website",
        url: "https://www.liujiarong.top",
        image:
          "https://www.liujiarong.top" + require(`@/assets/images/preview.png`),
        site_name: "留加绒网站 软件工程师 免费chatgpt",
      },
      meta: [
        {
          name: "keywords",
          content:
            "一位热衷于前端技术的工程师。通过全栈能力，他将技术创新融入设计，致力于以业务驱动的方式为您提供卓越的数字体验。了解更多关于前端技能、项目经验和团队协作的信息，共同探索技术驱动业务的未来。",
        },
        {
          name: "author",
          content: "留加绒",
        },
      ],
      link: [
        {
          rel: "icon",
          href: require(`@/assets/images/favicon.png`),
        },
      ],
    });
  },
  // mounted() {
  //   AOS.init();
  // },
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}

body {
  position: relative;
  font-family: $default-family;
  font-size: $default-font-size;
}

::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-thumb {
  background: #363636;
}

::-webkit-scrollbar-track {
  background: #fff;
}

.btn {
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
  -webkit-appearance: none;
  align-items: center;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
}

.btn-primary {
  color: white;
}

a,
a:active,
a:visited {
  text-decoration: none !important;
}
</style>
