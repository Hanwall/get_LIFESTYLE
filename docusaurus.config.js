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
          path: 'wiki',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
          // editUrl: ({locale, docPath}) => {
          //     if (locale !== defaultLocale) {
          //       return `https://github.com/Hanwall/get_LIFESTYLE/${locale}`;
          //     }
          //     // We want users to submit updates to the upstream/next version!
          //     // Otherwise we risk losing the update on the next release.
          //     const nextVersionDocsDirPath = 'wiki';
          //     return `https://github.com/Hanwall/get_LIFESTYLE/${nextVersionDocsDirPath}/${docPath}`;
          //   },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          path: 'blog',
          // editUrl: ({locale, blogDirPath, blogPath}) => {
          //     if (locale !== defaultLocale) {
          //       return `https://github.com/Hanwall/get_LIFESTYLE/${locale}`;
          //     }
          //     return `https://github.com/Hanwall/get_LIFESTYLE/${blogDirPath}/${blogPath}`;
          //   },
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
            href: 'https://github.com/Hanwall/get_LIFESTYLE/',
            label: '查看代码',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: ' ',
            items: [  ],
          },
          {
            title: '统计数据 ',
            items: [
              {
                  html: `
                <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
                <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
              `,
                },
            ],
          },
          {
            title: ' ',
            items: [  ],
          }
        ],
        copyright: `PROJECT ON GITHUBPAGES | POWERED BY <a href="https://docusaurus.io/zh-CN/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
