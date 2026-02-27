export const menuSchema = {
    menu: [
        {
            id: 'product',
            label: 'Product',
            link: null,
            visible: true,
            children: [
                    {
                        id: 'how-it-works',
                        label: 'How It Works',
                        link: '/how-it-works',
                        description: 'See how Seyona keeps your content fresh',
                        visible: true,
                    },
                    {
                        id: 'features',
                        label: 'Features',
                        link: '/features',
                        description: 'Everything Seyona does for your site',
                        visible: true, 
                    },
                    {
                        id: 'integrations',
                        label: 'Integrations',
                        link: '/integrations',
                        description: 'Works with any website',
                        visible: true,
                    },
                ],
            },
            {
                id: 'pricing',
                label: 'Pricing',
                link: '/pricing',
                visible: true,
                children: [],
            },
            {
                id: 'docs',
                label: 'Docs',
                link: '/docs',
                visible: true, 
                children: [],
            },
            {
                id: 'blog',
                label: 'Blog',
                link: '/blog',
                visible: true,
                children: [],
            },
            {
                id: 'about',
                label: 'About',
                link: '/about',
                visible: true,
                children: [],
        },
    ],
}