// vue.config.js
module.exports = {
    configureWebpack: {
        output: {
            filename: '[name].js',
            chunkFilename: '[name].[contenthash].js',
        },
    },
}