module.exports = {
    siteMetadata: {
        title: 'Portfolio',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Roboto'],
                },
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout.js`),
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`
    ],
};
