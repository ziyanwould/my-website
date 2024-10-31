<template>
  <!-- Menu -->
  <MenuVue :links="links">> # ~ / jiarongli<span class="prim">u</span></MenuVue>
  <HeroSection id="hero" pic="header.png">
    <template v-slot:welcome>欢迎访问!</template>
    你可以称呼我为<b>留加绒</b> ，这是我的昵称。我是一个
    <hi-word>软件开发工程师</hi-word> 我擅长的是使用现代框架构建
    <hi-word>web软件应用</hi-word> 和
    <hi-word>网站设计</hi-word>
    的开发。同样的我对跨端应用开发也有着浓厚兴趣，例如<hi-word>flutter、RN、uniapp</hi-word>等。
    我想成为一名<hi-word>全栈开发者</hi-word>并为此努力着。
    <template v-slot:buttons>
      <simple-button
        class="btn-primary text-white"
        url="https://maimai.cn/profile/detail?dstu=39493000"
        icon="fab linkedin-in"
        >Hire me!</simple-button
      >
      <simple-button
        class="btn-outline-secondary"
        url="mailto:godisljr@163.com"
        icon="fa-regular fa-file-lines"
        >联系我</simple-button
      >
      <simple-button
        class="btn-outline-secondary"
        url="https://robot.liujiarong.top"
        icon="fa-regular fa-file-code"
        >免费ChatGPT</simple-button
      >
    </template>
  </HeroSection>
  <SkillsGrid id="skills" :skills="skills" />
  <ExperienceTable id="edu-exp" :experience="experience" />
  <AwardsGrid id="awards" :awards="awards" />
  <ProjectsGrid id="projects" :projects="projects" />
  <FooterVue :links="socials" :copyright="copyright" />
</template>
<script>
import MenuVue from "@/components/shared/AppMenu.vue";
import FooterVue from "@/components/shared/AppFooter.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SkillsGrid from "@/components/skills/SkillsGrid.vue";
import ExperienceTable from "@/components/experience/ExperienceTable.vue";
import AwardsGrid from "@/components/awards/AwardsGrid.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

// data to fill components
import skills from "@/data/skills";
import experience from "@/data/experience";
import awards from "@/data/awards";
import projects from "@/data/projects";

import SimpleButton from "@/components/reusable/SimpleButton.vue";
import HiWord from "@/components/reusable/HighlightIt.vue";

export default {
  name: "HomeView",
  data: () => {
    return {
      delay: 100,
      links: [
        {
          name: "简介",
          url: "#hero",
        },
        {
          name: "技能",
          url: "#skills",
        },
        {
          name: "经历",
          url: "#edu-exp",
        },
        {
          name: "项目",
          url: "#awards",
        },
        {
          name: "应用",
          url: "#projects",
        },
        {
          name: "导航",
          url:
            process.env.VUE_APP_NAV_URL ||
            "https://homarr.liujiarong.top/board",
          target: "_blank",
        },
      ],
      skills,
      experience,
      awards,
      projects,
      socials: [
        {
          id: 1,
          icon: "fab chrome",
          url: "https://maimai.cn/profile/detail?dstu=39493000",
        },
        {
          id: 2,
          icon: "fab github",
          url: "https://github.com/ziyanwould?tab=repositories",
        },
      ],
      copyright: "Copyright © 2024 留加绒 | Powered by ziyanwould",
    };
  },
  components: {
    MenuVue,
    FooterVue,
    HeroSection,
    SkillsGrid,
    ExperienceTable,
    AwardsGrid,
    ProjectsGrid,
    SimpleButton,
    HiWord,
  },
  mounted() {
    // console.log("123", process.env.VUE_APP_NAV_URL); // 在 mounted 钩子中访问变量
  },
};
</script>
<style lang="scss" scoped>
.prim {
  color: $primary;
}
</style>
