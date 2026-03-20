import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <main className="not-found">
            <div className="not-found__inner">
                <span className="not-found__code">404</span>
                <h1 className="not-found__heading">Page not found</h1>
                <p className="not-found__body">
                    That URL doesn't match anything on this site. It may have moved or never existed.
                </p>
                <Link to="/" className="btn btn--primary">Back to home</Link>
            </div>
        </main>
    );
}
