const webpack = require('webpack')

exports.onCreateWebpackConfig = ({ actions }) => {
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: [require.resolve('buffer/'), 'Buffer'],
    }),
  ],
    actions.setWebpackConfig({
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
