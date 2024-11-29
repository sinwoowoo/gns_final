module.exports = {
    transpileDependencies: [
        'veutify'
    ],
    devServer: {
        proxy: 'http://localhost:9090'
    }
}