import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export function NavbarLight() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img className="navbar-brand-img" src={logo} alt="Omega" />
                </Link>

                <div className="d-none d-lg-flex align-items-center w-100">
                    <ul className="nav navbar-nav ms-5">
                        <li className="nav-item"><Link className="nav-link" to="/">Corporate</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/agency">Agency</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/consulting">Consulting</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                    </ul>

                    <ul className="nav navbar-nav ms-auto d-flex align-items-center">
                        <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
                        <li className="nav-item"><Link className="btn btn-primary btn-lg fw-400" to="/agency"><i className="bi bi-person-circle me-2"></i>Sign up</Link></li>
                    </ul>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle offcanvas">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export function NavbarFixed() {
    return(
        <nav className="navbar navbar-expand-lg navbar-fixed py-4">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img className="navbar-brand-img" src={logo} alt="Omega" />
                </Link>

                <div className="d-none d-lg-flex align-items-center w-100">
                    <ul className="nav navbar-nav ms-5">
                        <li className="nav-item"><Link className="nav-link" to="/">Corporate</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/agency">Agency</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/consulting">Consulting</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                    </ul>

                    <ul className="nav navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
                        <li className="nav-item"><Link className="btn btn-primary px-3 py-2" to="/agency">Sign up</Link></li>
                    </ul>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle offcanvas">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export function NavbarDark() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark py-4">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img className="navbar-brand-img" src={logo} alt="Omega" />
                </Link>

                <div className="d-none d-lg-flex align-items-center w-100">
                    <ul className="nav navbar-nav ms-5">
                        <li className="nav-item"><Link className="nav-link" to="/">Corporate</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/agency">Agency</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/consulting">Consulting</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                    </ul>

                    <ul className="nav navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
                        <li className="nav-item"><Link className="btn btn-primary px-3 py-2" to="/agency">Sign up</Link></li>
                    </ul>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle offcanvas">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}