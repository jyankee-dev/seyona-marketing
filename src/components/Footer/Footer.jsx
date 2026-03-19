import { Link } from 'react-router-dom';
import { footerSchema } from '../../schema';
import logoUrl from '../../assets/images/logo.png';
import './Footer.css';

export default function Footer() {
    const visibleColumns = footerSchema.columns.filter((col) => col.visible);

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__brand">
                    <Link to="/" className="footer__logo">
                        <img src={logoUrl} alt="Seyona" />
                    </Link>
                    <p className="footer__tagline">{footerSchema.brand.tagline}</p>
                </div>

                <nav className="footer__nav">
                    {visibleColumns.map((col) => {
                        const visibleLinks = col.links.filter((l) => l.visible);
                        if (visibleLinks.length === 0) return null;
                        return (
                            <div key={col.id} className="footer__col">
                                <span className="footer__col-label">{col.label}</span>
                                <ul>
                                    {visibleLinks.map((link) =>
                                        link.href.startsWith('mailto') || link.href.startsWith('http') ? (
                                            <li key={link.id}>
                                                <a href={link.href}>{link.label}</a>
                                            </li>
                                        ) : (
                                            <li key={link.id}>
                                                <Link to={link.href}>{link.label}</Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        );
                    })}
                </nav>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <span className="footer__copy">
                        &copy; {new Date().getFullYear()} Seyona. All rights reserved.
                    </span>
                    <div className="footer__legal">
                        {footerSchema.legal
                            .filter((l) => l.visible)
                            .map((l) => (
                                <Link key={l.id} to={l.href}>{l.label}</Link>
                            ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
