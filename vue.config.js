const { defineConfig } = require('@vue/cli-service')
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        devtool: "source-map", // Source map generation must be turned on
        plugins: [
            sentryWebpackPlugin({
                org: "huaian",
                project: "vue-wangyi",
                // Auth tokens can be obtained from https://sentry.io/orgredirect/organizations/:orgslug/settings/auth-tokens/
                authToken: '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',
                // 设置正向代理服务器  
            }),
        ],

    },
    devServer: {
        proxy: "http://127.0.0.1:3000",
        open: true
    }
})