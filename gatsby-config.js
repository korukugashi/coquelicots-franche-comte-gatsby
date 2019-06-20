module.exports = {
  siteMetadata: {
    title: `Nous voulons des coquelicots en Franche-Comté`,
    description: `Appel pour l'interdiction de tous les pesticides de synthèse. Retrouvez tous les collectifs près de chez vous en Franche-Comté.`,
    author: `@coquelicots_`,
    lang: `fr`,
    siteUrl: `https://www.coquelicots-franche-comte.org`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`es2015`, `es5`, `es6`, `es2017`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://koruku.alwaysdata.net/matomo",
        siteUrl: "https://www.coquelicots-franche-comte.org",
        disableCookies: true,
        requireConsent: false,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: false, // use svgo to optimize SVGs (default)
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        // develop: true, // Activates purging in npm run develop
        printRejected: true,
        whitelist: [
          "has-text-weight-bold",
          "slick-slider",
          "slider",
          "variable-width",
          "center",
          "slick-track",
          "slick-list",
          "slick-slide",
          "slick-loading",
          "slick-initialized",
          "dragging",
          "slick-vertical",
          "slick-arrow",
          "slick-hidden",
          "slick-prev",
          "slick-next",
          "slick-dotted",
          "slick-dots",
          "slick-active",
        ],
      },
    }, // must be after other CSS plugins
  ],
}
