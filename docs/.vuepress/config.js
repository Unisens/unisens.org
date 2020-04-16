const container = require('markdown-it-container');
const remove_blockquotes = require('./remove_blockquotes');
module.exports = {
    title: 'Unisens.org',
    description: 'The central documentation for unisens',
    //base: 'docs',
    //dest: 'public',
    themeConfig: {
        repo: 'unisens',
        // if your docs are in a different repo from your main project:
        docsRepo: 'unisens/unisens.org',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!',
        sidebarDepth: 1,
        lastUpdated: 'Last Updated',
        sidebar: [
            {
                title: 'Unisens',
                children: [
                    '/',
                    '/features',
                    '/downloads',
                    '/faq'
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