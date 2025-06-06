// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
import { themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GeoStyler',
  tagline: 'Generic Styler for GeoData',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/geostyler-docusaurus',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'geostyler', // Usually your GitHub org/user name.
  projectName: 'geostyler-docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/geo-styler-logo.jpg',
      navbar: {
        title: 'GeoStyler',
        logo: {
          alt: 'GeoStyler logo',
          src: 'img/geostyler-globe.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Documentation',
            position: 'right',
            items: [
              {
                type: 'doc',
                docId: 'components/index',
                label: 'Components',
              },
              {
                label: 'GeoStyler Style',
                href: 'https://geostyler.github.io/geostyler-style/docs/master/',
              }
            ]
          },
          {
            label: 'Demo',
            href: 'https://geostyler.github.io/geostyler-demo/',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'beginner-workshop/README',
            position: 'right',
            label: 'Tutorials',
          },
          {to: 'blog', label: 'Blog', position: 'right'},
          {to: 'about', label: 'About', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'OSGeo Logo',
          src: 'img/logo-osgeo.svg',
          href: 'https://www.osgeo.org/projects/geostyler/',
          height: 40,
        },
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/geostyler/geostyler-docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GeoStyler Community. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true
      },
    }),
};

module.exports = config;
