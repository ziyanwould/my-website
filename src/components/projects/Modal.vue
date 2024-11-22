<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h5 style="text-align: center">免责声明</h5>
      <ol>
        <li>
          <strong>重要提示</strong>
          在使用本个人网站的所有功能之前，请您务必仔细阅读并透彻理解本声明。您可以选择不使用本个人网站，但如果您使用本个人网站，您的使用行为将被视为对本声明全部内容的认可。
        </li>
        <li>
          <strong>内容来源：</strong
          >本个人网站提供的所有信息、数据、文本、软件、图片、图表、视频等内容均来自互联网或由第三方提供。我们不保证这些内容的准确性、完整性、合法性或及时性。用户应当自行判断并鉴别所浏览内容的真实性和适用性。
        </li>
        <li>
          <strong>用户责任：</strong
          >对于因使用或依赖本个人网站提供的任何内容而导致的任何直接、间接损失或其他任何形式的损害（包括但不限于利润损失、业务中断等），本个人网站概不负责。
        </li>
        <li>
          <strong>版权归属：</strong
          >除非另有明确说明，否则所有出现在本个人网站上的作品及其版权均属于原作者或者合法权利人所有。未经版权所有者事先书面许可，不得以任何方式复制、转载、传播或用于商业目的。
        </li>
        <li>
          <strong>链接外部网站：</strong
          >本个人网站可能包含指向其他网站的链接，这些链接仅出于便利考虑而设置，并不意味着对链接网站内容的认可或推荐。当您点击这些链接并离开本个人网站时，您应遵守相应网站的使用条款及隐私政策。
        </li>
        <li>
          <strong>检索/分析结果免责：</strong
          >由于本个人网站采用非人工检索/分析方式，可能存在无法准确判断用户输入条件合法性的情况。因此，对于基于本个人网站检索/分析结果作出的任何决策或行动，如果导致了不良后果，本个人网站不承担任何法律责任。
        </li>
        <li>
          <strong>变更与更新：</strong
          >随着法律法规的变化和技术的进步，本声明可能会不定期进行更新。最新的免责声明将始终公布在本个人网站上，建议您定期查看以确保了解最新的条款条件。
        </li>
        <li>
          <strong>法律适用：</strong
          >本声明的解释权归本个人网站所有，并受中华人民共和国法律管辖。若用户与本个人网站之间发生任何争议，双方应首先尝试友好协商解决；协商不成时，可提交至有管辖权的人民法院诉讼解决。
        </li>
      </ol>
      <button class="accept-button" @click="acceptModal">关闭提醒</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    acceptModal() {
      this.isVisible = false;
      localStorage.setItem("modalClosed", "true");
    },
  },
  mounted() {
    this.isVisible = !localStorage.getItem("modalClosed"); // 如果没有关闭记录，则显示弹窗
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1035;
  overflow: hidden; /* 隐藏背景滚动 */
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-height: 90vh; /* 最大高度为视口高度的90% */
  width: 90%;
  overflow-y: auto; /* 内容溢出时出现纵向滚动条 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 增加阴影效果 */
}

.accept-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%; /* 按钮占满宽度 */
}

.accept-button:hover {
  background-color: #0056b3;
}
</style>

