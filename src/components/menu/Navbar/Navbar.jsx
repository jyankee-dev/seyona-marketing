// Navbar.jsx
import { useEffect, useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { menuSchema } from '../../../schema';

import Dropdown from '../Dropdown/Dropdown';

import logoUrl from '../../../assets/images/logo.png';
import './Navbar.css';
export default function Navbar () {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setMobileOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);

    const visibleItems = menuSchema.menu.filter((item) => item.visible);

    return (
        <nav className="navbar">
            <div className="navbar__inner">
                <Link to="/" className="navbar__logo">
                    <div className="navbar__logo-mark">
                        <img src={logoUrl} alt="Seyona" />
                    </div>
                </Link>
                {/* Desktop */}
                <div className="navbar__links">
                    {visibleItems.map((item) => {
                        const hasVisibleChildren = item.children?.some((c) => c.visible);
                        // render as dropdown if it has children
                        if (hasVisibleChildren) {
                            // basic toggle/close logic
                            return (
                                <Dropdown
                                    key={item.id}
                                    item={item}
                                    isOpen={openDropdown === item.id}
                                    onToggle={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                                    onClose={() => setOpenDropdown(null)}
                                />
                            )
                        }
                        // return non-dropdown menu item
                        return (
                            <Link
                                key={item.id}
                                to={item.link}
                                className={`nav-link ${location.pathname === item.link ? 'active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </div>
                {/* CTAs */}
                <div className="navbar__actions">
                    <a href="https://app.seyona.ai" className="btn btn--ghost">
                        Go to App
                    </a>
                </div>
                {/* Hamburger Menu (mobile) */}
                <button
                    className={`navbar__hamburger ${mobileOpen ? 'open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
            {/* Mobile Menu */}
            <div className="navbar__mobile">
                {visibleItems.map((item) => {
                    const visibleChildren = item.children?.filter((c) => c.visible) ?? [];
                    return (
                        <div 
                            key={item.id}
                            className="mobile-item"
                        >
                            {item.link ? (
                                <Link
                                    to={item.link}
                                    className="mobile-link"
                                >
                                    {item.label}
                                </Link>
                            ) :(
                                <span className="mobile-label">{item.label}</span>
                            )}
                            {visibleChildren.map((child) => (
                                <Link
                                    key={child.id}
                                    to={child.link}
                                    className="mobile-link mobile-link--child"
                                >
                                    {child.label}
                                </Link>
                            ))}
                            <div className="mobile-actions">
                                <a href="https://app.seyona.ai" className="btn btn--ghost btn--full">
                                    Go to App
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}