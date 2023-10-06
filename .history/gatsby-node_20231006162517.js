const webpack = require('webpack')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: [require.resolve('buffer/'), 'Buffer'],
      }),
    ],
    experiments: {
      syncWebAssembly: true,
    },
    resolve: {
      fallback: {
        stream: false,
      },
    },
  })
}
