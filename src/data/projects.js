/**
 * @Author: Liu Jiarong
 * @Date: 2024-04-30 19:25:20
 * @LastEditors: Liu Jiarong
 * @LastEditTime: 2024-05-01 00:19:13
 * @FilePath: /my-website/src/data/projects.js
 * @Description:
 * @
 * @Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const projects = [
  {
    id: 1,
    title: "我的应用导航",
    image: "Application1.png",
    url: "https://homarr.liujiarong.top/board/",
    category: "Web网站",
    tags: ["Etherpad", "Nextcloud", "GitLab", "Docker"],
    description: `我的个人导航页汇集了各类实用工具和应用，打造高效便捷的数字空间。开发者可借助 GitLab、Docker 等工具进行代码管理；知识工作者可利用 CodiMD 知识库、书签等进行知识管理；个人用户则可通过 Nextcloud 个人网盘、文件管理等应用管理文件。
    此外，导航页还提供效率提升、创意娱乐以及实用工具，涵盖短链接生成、订阅管理、密码管理、绘图、游戏、网站统计、财务管理等功能。无论您是开发者、知识工作者还是个人用户，都能在这里找到满足您需求的工具，提升效率，激发创意。 
      `,
  },
  {
    id: 2,
    title: "AI-Chat",
    image: "Application2.png",
    url: "https://robot.liujiarong.top/chat/",
    category: "AI应用",
    tags: ["ChatGPT", "Anthropic", "Google AI", "Ollama AI", "SD/MJ"],
    description:
      "打造你的个人 AI 助手和专业团队，与 AI 携手推进你的创意事业、写作项目、学习征途和职业任务。从此，指挥一个专门的小组来应对特定挑战，提升工作效率，在个体崛起的时代中脱颖而出。这将在 AI-Chat 中成为现实。在这里，你可以用文字描述创造艺术。无论是图片、音频甚至视频，描述它 👉 我将为您创作",
  },
  {
    id: 3,
    title: "Gitlab",
    image: "Application3.png",
    url: "https://git.liujiarong.top/explore/",
    category: "Web网站",
    tags: ["vue", "React", "Flutter", "Java", "Node"],
    description:
      "我的 GitLab 代码库涵盖了 JavaScript、Vue、React、Flutter 和 Java 等多种编程语言和框架。在这里，您可以找到搭建好的工程、脚手架以及实用的插件，帮助您快速开启项目开发。无论是前端开发、移动应用开发还是后端开发，您都能找到所需的资源，提升开发效率，轻松构建您的应用程序。 ",
  },
];

export default projects;
