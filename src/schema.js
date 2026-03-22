export const homeSchema = {
    hero: {
        badge: 'SEO · GEO · AEO',
        headline: 'Your site, always ready for how people search today',
        subheadline: 'Drop a script tag on any page. Seyona automatically generates fresh FAQ content that keeps your site visible on Google, ChatGPT, Perplexity, and every AI search platform in between.',
        cta_primary: { label: 'Start for free', href: 'https://app.seyona.ai' },
        cta_secondary: { label: 'See how it works', href: '#how-it-works' },
        code_snippet: '<script src="https://cdn.seyona.ai/s.js" data-id="YOUR_ID"></script>',
    },
    visibility: {
        label: 'Be visible where search is actually happening',
        blurb: 'Over half of all Google searches now end without a click — because AI answers them first. Whether someone\'s asking ChatGPT, querying Perplexity, or getting a Google AI Overview, the sites that show up are the ones with structured, question-ready content. Seyona generates that content for you, automatically.',
        platforms: [
            { id: 'chatgpt',    label: 'ChatGPT' },
            { id: 'claude',     label: 'Claude' },
            { id: 'gemini',     label: 'Gemini' },
            { id: 'perplexity', label: 'Perplexity' },
            { id: 'google-ai',  label: 'Google AI' },
            { id: 'copilot',    label: 'Bing Copilot' },
            { id: 'meta-ai',    label: 'Meta AI' },
        ],
    },
    howItWorks: {
        steps: [
            {
                number: '01',
                title: 'Add the script',
                body: 'Paste one line of code into your page. No rebuild, no CMS plugin, no developer needed.',
            },
            {
                number: '02',
                title: 'Seyona analyses',
                body: 'Seyona reads your page content and checks what people are actually searching for right now.',
            },
            {
                number: '03',
                title: 'Content stays fresh',
                body: 'New FAQs are generated and injected on your schedule — weekly, fortnightly, or monthly.',
            },
        ],
    },
    features: [
        {
            id: 'fresh',
            title: 'Always-fresh content',
            body: 'Your FAQs regenerate automatically on your chosen schedule. Never stale, never forgotten.',
            visible: true,
        },
        {
            id: 'schema',
            title: 'Schema markup included',
            body: 'Every FAQ comes with JSON-LD structured data built in. No extra plugins or configuration.',
            visible: true,
        },
        {
            id: 'control',
            title: 'Per-page control',
            body: 'Set different refresh frequencies and content ratios for each page on your site.',
            visible: true,
        },
        {
            id: 'easy',
            title: 'Drop-in easy',
            body: 'One script tag. Works on any website, any stack, any CMS.',
            visible: true,
        },
    ],
    simplicity: {
        headline: 'Setup takes 30 seconds.',
        subheadline: "That's the whole integration.",
        code_snippet: '<script src="https://cdn.seyona.ai/s.js" data-id="YOUR_ID"></script>',
        cta: { label: 'Get started free', href: 'https://app.seyona.ai' },
    },
    finalCta: {
        headline: 'Ready to stop thinking about SEO?',
        subheadline: 'Join Seyona and let your content work for you.',
        cta: { label: 'Start for free', href: 'https://app.seyona.ai' },
    },
}

export const pricingSchema = {
    tiers: [
        {
            id: 'starter',
            name: 'Starter',
            price: 4.99,
            period: 'month',
            pages: 1,
            trial: '30-day free trial',
            highlight: false,
            cta: { label: 'Try free for 30 days', href: 'https://app.seyona.ai' },
            visible: true,
        },
        {
            id: 'basic',
            name: 'Basic',
            price: 14.99,
            period: 'month',
            pages: 10,
            trial: null,
            highlight: false,
            cta: { label: 'Get started', href: 'https://app.seyona.ai' },
            visible: true,
        },
        {
            id: 'pro',
            name: 'Pro',
            price: 24.99,
            period: 'month',
            pages: 25,
            trial: null,
            highlight: true,
            cta: { label: 'Get started', href: 'https://app.seyona.ai' },
            visible: true,
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: null,
            period: null,
            pages: null,
            trial: null,
            highlight: false,
            cta: { label: 'Contact us', href: 'mailto:hello@seyona.ai' },
            visible: true,
        },
    ],
}

export const footerSchema = {
    brand: {
        tagline: 'FAQ content that stays fresh, automatically.',
    },
    columns: [
        {
            id: 'product',
            label: 'Product',
            visible: true,
            links: [
                { id: 'how-it-works', label: 'How It Works', href: '/how-it-works', visible: true },
                { id: 'features',     label: 'Features',     href: '/features',     visible: false },
                { id: 'pricing',      label: 'Pricing',      href: '/pricing',      visible: true },
                { id: 'integrations', label: 'Integrations', href: '/integrations', visible: false },
            ],
        },
        {
            id: 'resources',
            label: 'Resources',
            visible: true,
            links: [
                { id: 'docs', label: 'Documentation', href: '/docs',  visible: false },
                { id: 'blog', label: 'Blog',          href: '/blog',  visible: false },
            ],
        },
        {
            id: 'company',
            label: 'Company',
            visible: true,
            links: [
                { id: 'about',   label: 'About',      href: '/about',              visible: false },
                { id: 'contact', label: 'Contact',    href: 'mailto:hello@seyona.ai', visible: true },
            ],
        },
    ],
    legal: [
        { id: 'privacy', label: 'Privacy Policy', href: '/privacy', visible: true },
        { id: 'terms',   label: 'Terms of Service', href: '/terms', visible: true },
    ],
}

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