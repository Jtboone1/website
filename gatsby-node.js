exports.onCreateWebpackConfig = ({actions, experiments}) => {
    actions.setWebpackConfig({
        experiments: {
            syncWebAssembly: true
        }
    })
}