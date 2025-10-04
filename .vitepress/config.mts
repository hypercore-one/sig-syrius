import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/sig-syrius/',
  title: "HC1 Syrius SIG",
  description: "HyperCore-One Syrius SIG",
  rewrites: {
    'README.md': 'index.md',
    '(.*)/README.md': '(.*)/index.md'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Matrix', link: 'https://matrix.to/#/#zenon-sigs:zenon.chat' },
      { text: 'Forum', link: 'https://forum.hypercore.one/' }
    ],

    sidebar: [
      {
        text: 'Syrius SIG',
        items: [
          { text: 'README', link: '/'},
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/hypercore-one/sig-syrius/edit/master/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hypercore-one/sig-syrius' }
    ]
  }
})
