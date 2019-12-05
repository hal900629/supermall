module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets",
                "common": "@/common",
                "network": "@/network",
                "views": "@/views",
                "components": "@/components"
            }
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
      }
    }
}
