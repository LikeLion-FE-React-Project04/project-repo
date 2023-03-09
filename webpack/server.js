const serverOptions = {
  host: 'localhost',
  port: 3000,
  hot: true,
  liveReload: false,
  compress: true,
  open: false,
  static: ['public'],
  client: {
    overlay: true,
    logging: 'info',
    reconnect: 3,
  },
  watchFiles: {
    paths: ['src/**/*.*', 'public/**/*.*'],
  },
  historyApiFallback: true,
};

module.exports = serverOptions;
