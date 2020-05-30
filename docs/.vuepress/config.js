module.exports = {
    title: 'Swanalekha',
    description: 'Malayalam input method',
    dest: "public",
    head: [
         ['meta', { name: 'theme-color', content: '#00a7d0' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
        smoothScroll: true,
        repo: 'smc/swanalekha',
        docsDir: 'docs',
        editLinks: true,
        smoothScroll: true,
        locales: {
          '/': {
            label: 'English',
            selectText: 'Languages',
            ariaLabel: 'Select language',
            editLinkText: 'Edit this page on GitHub',
            lastUpdated: 'Last Updated',
            nav: require('./nav/en'),
            sidebar: 'auto'
          },
        }
    }
}