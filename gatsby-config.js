module.exports = {
  siteMetadata: {
    title: `Nous voulons des coquelicots en Franche-Comté`,
    description: `Appel pour l'interdiction de tous les pesticides de synthèse. Retrouvez tous les collectifs près de chez vous en Franche-Comté.`,
    author: `@coquelicots_`,
    lang: `fr`,
    siteUrl: `https://www.coquelicotfranchecomte.org`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `coquelicots-franche-comte`,
        short_name: `coquelicot-fc`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b50800`,
        display: `minimal-ui`,
        icon: `src/images/logo-les-coquelicots.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,         // use prettier to format JS code output (default)
        svgo: false,             // use svgo to optimize SVGs (default)
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        //develop: true, // Activates purging in npm run develop
        printRejected: true,
        whitelist: ['has-text-weight-bold'],
      },
    }, // must be after other CSS plugins
  ],
}
