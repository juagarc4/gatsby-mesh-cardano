exports.onCreateWebpackConfig = ({ actions }) => {
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
