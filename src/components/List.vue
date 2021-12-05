<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell-group v-if="activeType === api.searchType[0].type">
      <van-cell
        v-for="item in list"
        :key="item.id"
        :title="item.name"
        :label="`${item.artists[0].name} - ${item.album.name}`"
      />
    </van-cell-group>
    <van-cell-group v-if="activeType === api.searchType[1].type">
      <van-cell
        v-for="item in list"
        :key="item.id"
        :title="item.name"
        :label="`${item.artists[0].name}\t${getDate(item.publishTime)}`"
      />
    </van-cell-group>
    <van-cell-group v-if="activeType === api.searchType[2].type">
      <van-cell v-for="item in list" :key="item.id" :title="item.name" />
    </van-cell-group>
    <van-cell-group v-if="activeType === api.searchType[3].type">
      <van-cell v-for="item in list" :key="item.id" :title="item.name" />
    </van-cell-group>
    <van-cell-group v-if="activeType === api.searchType[4].type">
      <van-cell v-for="item in list" :key="item.id" :title="item.name" />
    </van-cell-group>
  </van-list>
</template>
<script>
import api from "@/api/api";
import { ref } from "vue";
import { getDate } from "@/utils/utils";

export default {
  data() {
    return {
      api: api,
    };
  },
  props: {
    value: String,
    limit: Number,
    activeType: Number,
  },
  methods: {
    getDate(timestamp) {
      return getDate(timestamp);
    },
  },
  setup(props) {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const offset = ref(0);
    const count = ref(0);

    const onLoad = () => {
      api
        .searchMusic({
          keywords: props.value,
          limit: props.limit,
          offset: offset.value,
          type: props.activeType,
        })
        .then((res) => {
          console.log(res);
          let items = [];
          switch (props.activeType) {
            case api.searchType[0].type: {
              items = res.result.songs;
              break;
            }
            case api.searchType[1].type: {
              items = res.result.albums;
              break;
            }
            case api.searchType[2].type: {
              items = res.result.artists;
              break;
            }
            case api.searchType[3].type: {
              items = res.result.albums;
              break;
            }
            case api.searchType[4].type: {
              items = res.result.albums;
              break;
            }
            case api.searchType[5].type: {
              items = res.result.albums;
              break;
            }
            case api.searchType[6].type: {
              items = res.result.albums;
              break;
            }
            case api.searchType[7].type: {
              items = res.result.albums;
              break;
            }
            case api.searchType[8].type: {
              items = res.result.albums;
              break;
            }
            case api.searchType[9].type: {
              items = res.result.albums;
              break;
            }
            default:
              break;
          }

          for (let i = 0; i < items.length; i++) {
            list.value.push(
              Object.assign({}, items[i], { index: offset.value })
            );
            count.value += 1;
          }

          offset.value += 1;

          // 加载状态结束
          loading.value = false;

          // 数据全部加载完成
          if (!res.result.hasMore) {
            finished.value = true;
          }
        });
    };

    return {
      list,
      onLoad,
      loading,
      finished,
      offset,
      count,
    };
  },
};
</script>
<style>
</style>