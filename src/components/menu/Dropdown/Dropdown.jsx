import { useEffect, useRef } from "react";

export default function Dropdown ({item, isOpen, onToggle, onClose}) {
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside (e) {
            // if a dropdown is open and is not the one clicked
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        }
        // if open listen for close
        if (isOpen)
            document.addEventListener('mousedown', handleClickOutside);
        // remove listener
        return () => document.removeEventListener('mousedown', handleClickOutside);

    }, [isOpen, onClose]);

    const visibleChildren = item.children.filter((c) => c.visible);

    return (
        <div className="nav-dropdown-wrapper" ref={ref}>
            <button
                className={`nav-link nav-link--dropdown ${isOpen ? 'active' : ''}`}
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                {item.label}
                <svg
                    className={`nav-chevron ${isOpen ? 'nav-chevron--open' : ''}`}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            {isOpen && visibleChildren.length > 0 && (
                <div className="nav-dropdown">
                    <div className="nav-dropdown__inner">
                        {visibleChildren.map((child) => {
                            <Link
                                key={child.id}
                                to={child.link}
                                className="nav-dropdown--item"
                                onClick={onClose}
                            >
                                <span className="nav-dropdown__label">{child.label}</span>
                                {child.description && (
                                    <span className="nav-dropdown__desc">{child.descrption}</span>
                                )}
                            </Link>
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}