import './Legal.css';

export default function PrivacyPolicy() {
    return (
        <main className="legal-page">
            <div className="legal-page__header">
                <div className="container">
                    <span className="badge">Legal</span>
                    <h1>Privacy Policy</h1>
                    <p className="legal-page__meta">Effective Date: 3/22/26 &nbsp;&middot;&nbsp; Last Updated: 3/22/26</p>
                    <p className="legal-page__intro">
                        This Privacy Policy describes how Sherpa Technologies LLC ("we," "us," or "our") collects, uses, and handles information in connection with Seyona.ai.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="legal-page__body">

                    <section className="legal-section">
                        <h2>1. Who This Applies To</h2>
                        <p>This policy applies to:</p>
                        <ul>
                            <li><strong>Users:</strong> People who create Seyona accounts and use the dashboard</li>
                            <li><strong>Website Visitors:</strong> Visitors to websites that have the Seyona script installed ("end users")</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>2. Information We Collect</h2>
                        <h3>From Users (Dashboard Accounts)</h3>
                        <p>When you create a Seyona account, we collect:</p>
                        <ul>
                            <li><strong>Account information:</strong> Name, email address, password (managed via Stack Auth)</li>
                            <li><strong>Billing information:</strong> Payment method details processed by Stripe. We do not store full card numbers.</li>
                            <li><strong>Usage data:</strong> Pages configured, refresh schedules, dashboard activity</li>
                            <li><strong>Website data:</strong> URLs and page signals you register with Seyona for content generation</li>
                        </ul>
                        <h3>From Website Visitors (via the Seyona Script)</h3>
                        <p>The Seyona script installed on client websites reads the following to generate relevant content:</p>
                        <ul>
                            <li>Page URL and title</li>
                            <li>Visible content structure (headings, on-page signals)</li>
                            <li>Basic request metadata (user agent, referrer)</li>
                        </ul>
                        <p>The Seyona script does not:</p>
                        <ul>
                            <li>Set tracking cookies on your visitors</li>
                            <li>Collect personally identifiable information from your visitors</li>
                            <li>Build visitor profiles or engage in cross-site tracking</li>
                            <li>Sell or share visitor data with third parties</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. How We Use Information</h2>
                        <p>We use collected information to:</p>
                        <ul>
                            <li>Provide, operate, and improve the Seyona platform</li>
                            <li>Generate and deliver FAQ content and schema markup to your website</li>
                            <li>Process payments and manage your subscription</li>
                            <li>Send transactional emails (receipts, account alerts)</li>
                            <li>Respond to support requests</li>
                            <li>Analyze usage patterns to improve the product</li>
                        </ul>
                        <p>We do not sell your data to third parties. We do not use your data to train AI models without your consent.</p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Data Sharing</h2>
                        <p>We share data only with the following categories of service providers, under appropriate data agreements:</p>
                        <ul>
                            <li><strong>Stack Auth</strong> &mdash; Authentication and user account management</li>
                            <li><strong>Stripe</strong> &mdash; Payment processing</li>
                            <li><strong>Neon (PostgreSQL)</strong> &mdash; Database hosting</li>
                            <li><strong>Netlify</strong> &mdash; Application hosting and serverless functions</li>
                            <li><strong>AI providers (Anthropic / Claude API)</strong> &mdash; Content generation. Page signals are sent to generate FAQ content. We use these APIs under their respective data processing terms.</li>
                        </ul>
                        <p>We do not share your data with advertisers or data brokers.</p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Data Retention</h2>
                        <ul>
                            <li>Account data is retained while your account is active and for a reasonable period after deletion to comply with legal obligations</li>
                            <li>Generated content associated with your pages is retained as part of your account data</li>
                            <li>You may request deletion of your account and associated data by contacting us</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>6. Your Rights</h2>
                        <p>Depending on your location, you may have rights to:</p>
                        <ul>
                            <li>Access the personal data we hold about you</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to or restrict certain processing</li>
                            <li>Data portability</li>
                        </ul>
                        <p>To exercise these rights, contact us at: jared@seyona.ai</p>
                    </section>

                    <section className="legal-section">
                        <h2>7. Cookies</h2>
                        <p>The Seyona dashboard uses cookies for session management and authentication. The Seyona script installed on client websites does not set cookies on visitors.</p>
                    </section>

                    <section className="legal-section">
                        <h2>8. Children's Privacy</h2>
                        <p>Seyona is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us and we will delete it.</p>
                    </section>

                    <section className="legal-section">
                        <h2>9. Security</h2>
                        <p>We implement reasonable technical and organizational measures to protect your data, including encrypted connections (HTTPS), access controls, and secure third-party infrastructure. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                    </section>

                    <section className="legal-section">
                        <h2>10. International Users</h2>
                        <p>Seyona is operated from the United States. If you are accessing Seyona from outside the US, your data may be transferred to and processed in the US. By using Seyona, you consent to this transfer.</p>
                    </section>

                    <section className="legal-section">
                        <h2>11. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of material changes via email or in-app notice. Continued use of Seyona after changes constitutes acceptance of the updated policy.</p>
                    </section>

                    <section className="legal-section">
                        <h2>12. Contact</h2>
                        <p><strong>Sherpa Technologies LLC</strong><br />Email: jared@seyona.ai</p>
                    </section>

                </div>
            </div>
        </main>
    );
}
