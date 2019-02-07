const NODE_ENV = process.env.NODE_ENV;
const merge = require("webpack-merge");
const commonWebPackConfig = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: "vue-template-loader",
          exclude: /index.html/
        }
      ]
    }
  }
};

let webPackConfig = commonWebPackConfig;

if (NODE_ENV === "dev") {
  webPackConfig = merge(commonWebPackConfig, require("./vue.config.dev"));
}
// else {
//   webPackConfig = Object.merge(
//     {},
//     commonWebPackConfig,
//     require("./vue.config.dev")
//   );
// }

module.exports = webPackConfig;
