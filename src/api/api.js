import request from "@/utils/request";

export default {
  searchType: [
    { title: "单曲", type: 1 },
    { title: "专辑", type: 10 },
    { title: "歌手", type: 100 },
    { title: "歌单", type: 1000 },
    { title: "用户", type: 1002 },
    // { title: "MV", type: 1004 },
    // { title: "歌词", type: 1006 },
    // { title: "电台", type: 1009 },
    // { title: "视频", type: 1014 },
    // { title: "综合", type: 1018 },
  ],
  // 获取歌曲url
  getSongUrl(id) {
    return request({
      url: "/song/url",
      method: "get",
      data: { id },
    });
  },
  /**
   * 必选参数 : keywords : 关键词
   * 可选参数 :
   * limit : 返回数量 , 默认为 30
   * offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
   * type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
   * @param {keywords, limit, offset, type} data
   * @returns
   */
  searchMusic(data) {
    return request({
      url: "/search",
      method: "get",
      data,
    });
  },
  // 默认搜索关键词
  searchDefault() {
    return request({
      url: "/search/default",
      method: "get",
      data: {},
    });
  },
  // 热搜列表 简略
  searchHot() {
    return request({
      url: "/search/hot",
      method: "get",
      data: {},
    });
  },
  searchHotDetail() {
    return request({
      url: "/search/hot/detail",
      method: "get",
      data: {},
    });
  },
  // banner
  getBanner() {
    return request({
      url: "/banner",
      method: "get",
      data: { type: 2 },
    });
  },
  // 推荐歌单
  getPersonalized(limit) {
    return request({
      url: "/personalized",
      method: "get",
      data: { limit },
    });
  },
  // 获取歌单详情
  getPlaylistDetail(id) {
    return request({
      url: "/playlist/detail",
      method: "get",
      data: { id },
    });
  },
  // 获取精品歌单标签列表
  getPlay() {
    return request({
      url: "/playlist/highquality/tags",
      method: "get",
      data: {},
    });
  },
  // 最新专辑
  getnewest() {
    return request({
      url: "/album/newest",
      method: "get",
      data: {},
    });
  },
  // 获取专辑内容
  getAlbum(id) {
    return request({
      url: "/album",
      method: "get",
      data: { id },
    });
  },
  // 推荐新音乐
  getNewSong() {
    return request({
      url: "/personalized/newsong",
      method: "get",
      data: {},
    });
  },
  // 音乐详情
  getSongDetail(ids) {
    return request({
      url: "/song/detail",
      method: "get",
      data: { ids },
    });
  },
  // 排行
  getRankDetail() {
    return request({
      url: "/toplist/detail",
      method: "get",
    });
  },
  // 网友精选
  getTopPlaylist() {
    return request({
      url: "/top/playlist?limit=10",
      method: "get",
    });
  },
};
