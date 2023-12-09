const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 设置正向代理服务器  
    devServer: {
        proxy: "http://127.0.0.1:3000",
        open: true
    }

})