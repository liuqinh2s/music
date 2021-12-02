<template>
  <van-search
    v-model="value"
    shape="round"
    background="#4fc08d"
    placeholder="请输入搜搜关键词"
    @search="onSearch"
    @cancel="onCancel"
  >
  </van-search>
  <van-tabs v-model="activeTab">
    <van-tab title="标签1">
      <van-empty v-if="isEmpty" :description="empty" />
    </van-tab>
    <van-tab title="标签2">
      <van-empty :description="empty" />
    </van-tab>
  </van-tabs>
</template>
<script>
import api from "@/api/api";

export default {
  data: function () {
    return {
      value: "",
      activeTab: 1,
      isEmpty: true,
      empty: "你的小宝贝~",
    };
  },
  methods: {
    onSearch: function (val) {
      api.searchMusic(val).then((res) => {
        console.log(res);
        if (res.songs.length) {
          this.isEmpty = false;
          this.list = res.songs;
        }
      });
    },
    onCancel: function () {
      // Toast("取消");
    },
  },
};
</script>
<style scoped>
</style>
