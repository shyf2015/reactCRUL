const { argv } = process
const build = argv[argv.length - 1] === 'build'

module.exports = {
    livereload: !build,
    build,
    useLess: true,
    gzip: true,
    buildFilter: p => /src|css|index/.test(p),
    middlewares: [
        require('./lib/server/route').default,
        { middleware: 'rollup' }
    ],
    output: require('path').join(__dirname, './output')
}
