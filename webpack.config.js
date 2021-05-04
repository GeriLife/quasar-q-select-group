const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: path.resolve(__dirname + "/src/QSelectGroup.vue"),
  output: {
    path: path.resolve(__dirname + "/dist"),
    libraryTarget: "umd",
    library: "q-select-group",
    umdNamedDefine: true,
    filename: "q-select-group.js",
  },
  externals: {
    quasar: "quasar",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
