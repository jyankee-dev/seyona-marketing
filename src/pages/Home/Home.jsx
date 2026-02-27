import { homeSchema, pricingSchema } from '../../schema';
import './Home.css';

export default function Home() {
    const { hero, visibility, howItWorks, features, simplicity, finalCta } = homeSchema;
    const { tiers } = pricingSchema;

    return (
        <main>

            {/* ── Hero ── */}
            <section className="hero">
                <div className="hero__inner">
                    <div className="hero__badge">
                        <span className="badge">{hero.badge}</span>
                    </div>
                    <h1 className="hero__headline">{hero.headline}</h1>
                    <p className="hero__subheadline text-muted">{hero.subheadline}</p>
                    <div className="hero__actions">
                        <a href={hero.cta_primary.href} className="btn btn--primary">
                            {hero.cta_primary.label}
                        </a>
                        <a href={hero.cta_secondary.href} className="btn btn--ghost">
                            {hero.cta_secondary.label}
                        </a>
                    </div>
                    <div className="hero__code">
                        <p className="hero__code-label">Drop this on your page</p>
                        <pre>{hero.code_snippet}</pre>
                    </div>
                </div>
            </section>

            {/* ── AEO / GEO Visibility Bar ── */}
            <section className="visibility">
                <div className="visibility__text">
                    <p className="visibility__label">{visibility.label}</p>
                    <p className="visibility__blurb">{visibility.blurb}</p>
                </div>
                <div className="platforms-row">
                    {visibility.platforms.map((platform) => (
                        <span key={platform.id} className="marquee-badge">
                            <span className="marquee-badge__dot" />
                            {platform.label}
                        </span>
                    ))}
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="how-it-works section" id="how-it-works">
                <div className="container">
                    <div className="section-header">
                        <h2>Simple by design</h2>
                        <p>Three steps from signup to automatic SEO. No agency, no dev work, no maintenance.</p>
                    </div>
                    <div className="steps-grid">
                        {howItWorks.steps.map((step) => (
                            <div key={step.number} className="step-card">
                                <span className="step-card__number">{step.number}</span>
                                <h3>{step.title}</h3>
                                <p>{step.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Feature Highlights ── */}
            <section className="features section--tight">
                <div className="container">
                    <div className="section-header">
                        <h2>What you actually get</h2>
                        <p>No fluff. Just the things that make your site rank better, without more work on your plate.</p>
                    </div>
                    <div className="features-grid">
                        {features.filter(f => f.visible).map((feature) => (
                            <div key={feature.id} className="feature-card">
                                <h4>{feature.title}</h4>
                                <p>{feature.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Simplicity Callout ── */}
            <section className="simplicity section">
                <div className="simplicity__inner">
                    <div>
                        <h2>{simplicity.headline}</h2>
                        <p className="simplicity__sub text-muted">{simplicity.subheadline}</p>
                    </div>
                    <div className="simplicity__code">
                        <pre>{simplicity.code_snippet}</pre>
                    </div>
                    <a href={simplicity.cta.href} className="btn btn--primary">
                        {simplicity.cta.label}
                    </a>
                </div>
            </section>

            {/* ── Pricing Preview ── */}
            <section className="pricing-preview section--tight" id="pricing">
                <div className="container">
                    <div className="section-header">
                        <h2>Straightforward pricing</h2>
                        <p>Content refreshes weekly to monthly — you control the schedule. No surprises.</p>
                    </div>
                    <div className="pricing-grid">
                        {tiers.filter(t => t.visible).map((tier) => (
                            <div
                                key={tier.id}
                                className={`pricing-card${tier.highlight ? ' pricing-card--highlight' : ''}`}
                            >
                                {tier.highlight && (
                                    <span className="pricing-card__popular">Most popular</span>
                                )}
                                <div className="pricing-card__name">{tier.name}</div>
                                <div className="pricing-card__price">
                                    {tier.price !== null ? (
                                        <>
                                            <span className="pricing-card__amount">${tier.price}</span>
                                            <span className="pricing-card__period">/ {tier.period}</span>
                                        </>
                                    ) : (
                                        <span className="pricing-card__amount" style={{ fontSize: '1.4rem' }}>Get a quote</span>
                                    )}
                                </div>
                                {tier.trial && (
                                    <div className="pricing-card__trial">{tier.trial}</div>
                                )}
                                <div className="pricing-card__pages">
                                    {tier.pages !== null ? (
                                        <><strong>{tier.pages} {tier.pages === 1 ? 'page' : 'pages'}</strong> included</>
                                    ) : (
                                        <strong>Custom page count</strong>
                                    )}
                                </div>
                                <a
                                    href={tier.cta.href}
                                    className={`btn ${tier.highlight ? 'btn--primary' : 'btn--ghost'}`}
                                >
                                    {tier.cta.label}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="pricing-footer">
                        <a href="/pricing">See full pricing details →</a>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section className="final-cta">
                <div className="final-cta__inner">
                    <h2>{finalCta.headline}</h2>
                    <p className="text-muted">{finalCta.subheadline}</p>
                    <a href={finalCta.cta.href} className="btn btn--primary">
                        {finalCta.cta.label}
                    </a>
                </div>
            </section>

        </main>
    );
}
