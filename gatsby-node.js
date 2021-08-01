exports.onCreateWebpackConfig = ({ actions, loaders }) => {
    actions.setWebpackConfig({
        experiments: {
            syncWebAssembly: true,
        },
        module: {
            rules: [
                {
                    test: /canvas/,
                    use: loaders.null()
                }
            ]
        }
    });
};
