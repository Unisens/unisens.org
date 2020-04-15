const container = require('markdown-it-container');
const remove_blockquotes = require('./remove_blockquotes');
module.exports = {
    title: 'Unisens.org',
    description: 'The central documentation for unisens',
    //base: 'docs',
    //dest: 'public',
    themeConfig: {
        sidebarDepth: 1,
        lastUpdated: 'Last Updated',
        sidebar: [
            {
                title: 'Unisens',
                children: [
                    '/',
                ]
            }
        ],
        smoothScroll: true
    },
    /*plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "Updated documentation is available.",
                buttonText: "Refresh"
            }
        }
    },*/
    extendMarkdown(md) {
        md.use(container, 'comment', {
            render: (tokens, idx) => tokens[idx].nesting === 1 ?
                `<!--` : '-->'
        })

        md.use(remove_blockquotes);
    }
}