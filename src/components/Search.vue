<template>
  <van-search
    v-model="value"
    shape="round"
    background="#4fc08d"
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  >
  </van-search>
  <van-tabs v-model="activeType" v-if="searchActive">
    <van-tab v-for="item in type" :key="item.type" :title="item.title">
      <van-empty v-if="isEmpty" :description="empty" />
      <List :value="value" :limit="limit" :activeType="item.type" />
    </van-tab>
  </van-tabs>
</template>
<script>
import List from "./List.vue";
import api from "@/api/api";

export default {
  data() {
    return {
      value: "",
      limit: 10,
      searchActive: false,
      activeType: 1,
      isEmpty: true,
      empty: "你的小宝贝~",
      type: api.searchType,
    };
  },
  methods: {
    onSearch(val) {
      this.value = val;
      this.isEmpty = false;
      this.searchActive = true;
    },
    onCancel() {
      // Toast("取消");
    },
  },
  components: {
    List,
  },
};
</script>
<style scoped>
</style>
