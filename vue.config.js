module.exports = {
  productionSourceMap: process.env.NODE_ENV === "dev",
  devServer: {
    port: 8081,
  },
};
