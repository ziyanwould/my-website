<!--
 * @Author: Liu Jiarong
 * @Date: 2024-04-30 19:25:20
 * @LastEditors: Liu Jiarong
 * @LastEditTime: 2024-04-30 23:13:25
 * @FilePath: /my-website/src/components/projects/ProjectFilter.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<script>
export default {
  name: "ProjectFilter",
  props: {
    select: {
      type: String,
      default: "projects",
      required: true,
    },
    selectOptions: {
      type: Array,
      default: () => ["Web网站", "AI应用"],
    },
  },
};
</script>

<template>
  <select
    @change="$emit('filter', $event.target.value)"
    :name="select"
    :id="select"
    class="form-select"
  >
    <option value class="text-sm sm:text-md">所有应用</option>
    <option
      v-for="option in selectOptions"
      :key="option"
      :value="option"
      class="sm:text-md"
    >
      {{ option }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
