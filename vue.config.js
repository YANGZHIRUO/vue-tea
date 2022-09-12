const { defineConfig } = require('@vue/cli-service')
const path=require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      "/api":{
        target:"http://127.0.0.1:3000",
        changeOrigin:true,
        ws:true,
        pathRewrite:{
          "^/api":"/api"
        }
      }
    }
  },
  configureWebpack:(config)=>{
    config.resolve={
      extensions:[".js",".json",".vue"],
      alias:{
        "@":path.resolve(__dirname,"./src")
      }
    }
  }
})
