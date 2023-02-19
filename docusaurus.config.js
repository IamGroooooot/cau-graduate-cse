// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '졸업 앙대',
  tagline: '졸업해봅시다...',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cowlife.link',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IamGroooooot', // Usually your GitHub org/user name.
  projectName: 'cau-graduate-cse', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
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
            'https://github.com/IamGroooooot/cau-graduate-cse/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/IamGroooooot/cau-graduate-cse/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '졸업 앙대',
        logo: {
          alt: '소프트웨어학부를 졸업하는 법 로고',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'graduate-guide',
            position: 'left',
            label: '졸업하는 법',
          },
          //{ to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/IamGroooooot/cau-graduate-cse',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '문서들',
            items: [
              {
                label: '졸업하는 법',
                to: '/docs/graduate-guide',
              },
            ],
          },
          {
            title: '커뮤니티',
            items: [
              {
                label: '에브리타임 컴퓨터공학/IT 게시판',
                href: 'https://everytime.kr/398053',
              },
              {
                label: '중앙인',
                href: 'https://cauin.cau.ac.kr/cauin/index.php',
              },
            ],
          },
          {
            title: '기타',
            items: [
              {
                label: '소프트웨어학부 홈페이지',
                to: 'https://cse.cau.ac.kr/sub01/sub0101.php',
              },
              {
                label: '다빈치SW교육원',
                to: 'https://swedu.cau.ac.kr/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/IamGroooooot/cau-graduate-cse',
              },
            ],
          },
        ],
        copyright: `Free for CAUs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
