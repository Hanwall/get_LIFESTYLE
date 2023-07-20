// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HELLO WORLD',
  tagline: '缤纷世界，不生不灭',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hanwall.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
   baseUrl: '/get_LIFESTYLE/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hanwall', // Usually your GitHub org/user name.
  projectName: 'get_LIFESTYLE', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
 themes: [
        // ... Your other themes.
        [
          require.resolve("@easyops-cn/docusaurus-search-local"),
          {
            // ... Your options.
            // `hashed` is recommended as long-term-cache of index file is possible.
            hashed: true,
            language: ["en", "zh"],
            highlightSearchTermsOnTargetPage: true,
            explicitSearchResultPath: true,
            // For Docs using Chinese, The `language` is recommended to set to:
            // ```
            // language: ["en", "zh"],
            // ```
          },
        ],
      ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
     
      navbar: {
        title: 'LIFESTYLE',
        logo: {
          alt: 'Logo',
          src: 'img/loading.gif',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'ALL LIFE INDEX',
          },
          {
            to: '/blog',
            label: 'ABOUT LIFE', 
            position: 'left'
          },
          {
            href: 'https://hanwall.github.io/get_LIFESTYLE/',
            label: '查看代码',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '我的站点',
            items: [
              {
                label: 'LIFESTYLE',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'BIG THANKS FOR ',
            items: [
              {
                label: '又拍云',
                href: 'https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral',
              }
              
            ],
          },
          {
            title: '网站统计',
            items: [
              {
                label: 'GO',
                to: '/website-getvalue',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
