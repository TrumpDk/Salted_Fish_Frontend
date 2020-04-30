module.exports = (ctx) => ({
    parser: ctx.parser ? 'sugarss' : false,
    plugins: {
        'postcss-plugin': ctx.options.plugin
    }
})