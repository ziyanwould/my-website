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
import { onMounted } from "vue";

export default {
  data: () => {
    return {
      webTitle: "留加绒 - 前端工程师 | 打造卓越数字体验",
    };
  },
  setup() {
    useMeta({
      title: "乐园的梦",
      description:
        "留加绒是一位专注于前端技术的软件工程师，凭借全栈能力和设计思维，致力于为您打造卓越的数字体验。欢迎探索我的项目经验、技术栈和获取联系方式。",
      htmlAttrs: {
        lang: "zh-CN",
        amp: true,
      },
      twitter: {
        title: "留加绒 - 前端工程师 | 打造卓越数字体验",
        description:
          "留加绒是一位专注于前端技术的软件工程师，凭借全栈能力和设计思维，致力于为您打造卓越的数字体验。欢迎探索我的项目经验、技术栈和获取联系方式。",
        card: "summary_large_image",
        image:
          "https://www.liujiarong.top" + require(`@/assets/images/preview.png`),
      },
      og: {
        title: "留加绒 - 前端工程师 | 打造卓越数字体验",
        description:
          "留加绒是一位专注于前端技术的软件工程师，凭借全栈能力和设计思维，致力于为您打造卓越的数字体验。欢迎探索我的项目经验、技术栈和获取联系方式。",
        type: "website",
        url: "https://www.liujiarong.top",
        image:
          "https://www.liujiarong.top" + require(`@/assets/images/preview.png`),
        site_name: "留加绒 - 前端工程师 | 打造卓越数字体验",
      },
      meta: [
        {
          name: "keywords",
          content:
            "留加绒是一位专注于前端技术的软件工程师，凭借全栈能力和设计思维，致力于为您打造卓越的数字体验。欢迎探索我的项目经验、技术栈和获取联系方式。",
        },
        {
          name: "author",
          content: "留加绒",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://www.liujiarong.top",
        },
        {
          rel: "icon",
          href: require(`@/assets/images/favicon.webp`),
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "Person", // 可以根据实际情况修改为 Website 或 Organization
            name: "留加绒",
            jobTitle: "软件工程师",
            url: "https://www.liujiarong.top",
            sameAs: [
              "https://maimai.cn/profile/detail?dstu=39493000",
              "https://github.com/ziyanwould",
            ],
          },
        },
      ],
    });

    let dataLayer = [];

    const loadGoogleTag = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-7SGRSKJKKM";
      document.head.appendChild(script);

      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-7SGRSKJKKM");
    };
    onMounted(() => {
      loadGoogleTag();
    });
  },
  // mounted() {
  //   // AOS.init();
  //   loadGoogleTag();
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
