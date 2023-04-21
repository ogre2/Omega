import { Link } from 'react-router-dom';
import '../../node_modules/flag-icons/css/flag-icons.min.css';
import logo from '../logo.svg';
import { LanguageToggler } from '../components/Buttons';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

export function FooterPrimary() {
    return(
        <footer className="footer-default footer-primary">
            <div className="container">
                <div className="row content-space-1">
                    <div className="col-lg-3 mb-7 mb-lg-0">
                        <div className="mb-5">
                            <Link className="footer-brand" to="/">
                                <img className="footer-brand-img" src={logo} alt="Omega" />
                            </Link>

                            <p className="text-gray-200 text-4 mt-3">Omega is a full responsive and premium Bootstrap 5 landing page theme.</p>
                        </div>

                        <span className="d-block">
                            <label htmlFor="selectLanguage" className="form-label text-white text-4 fw-500">Choose language</label>
                        </span>

                        <LanguageToggler />
                    </div>

                    <div className="col-sm mb-7 mb-sm-0">
                        <span className="text-uppercase text-primary-light-alt fs-12 lh-18 fw-500">Resources</span>

                        <ul className="list-unstyled list-py-1 mt-3 mb-0">
                            <li><Link className="link link-sm link-light" to="#">Blog</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Guidance</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Customer Stories</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Support</Link></li>
                            <li><Link className="link link-sm link-light" to="#">API <i className="bi bi-box-arrow-up-right ms-1"></i></Link></li>
                            <li><Link className="link link-sm link-light" to="#">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="col-sm mb-7 mb-sm-0">
                        <span className="text-uppercase text-primary-light-alt fs-12 lh-18 fw-500">Company</span>

                        <ul className="list-unstyled list-py-1 mt-3 mb-0">
                            <li><Link className="link link-sm link-light" to="#">Belonging <i className="bi bi-box-arrow-up-right ms-1"></i></Link></li>
                            <li><Link className="link link-sm link-light" to="#">Company</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Careers <span className="badge bg-warning text-dark rounded-pill ms-2">We're hiring</span></Link></li>
                            <li><Link className="link link-sm link-light" to="#">Contacts</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Security</Link></li>
                        </ul>
                    </div>

                    <div className="col-sm mb-7 mb-sm-0">
                        <span className="text-uppercase text-primary-light-alt fs-12 lh-18 fw-500">Platform</span>

                        <ul className="list-unstyled list-py-1 mt-3 mb-0">
                            <li><Link className="link link-sm link-light" to="#">Web</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Mobile</Link></li>
                            <li><Link className="link link-sm link-light" to="#">iOS</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Android</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Figma</Link></li>
                        </ul>
                    </div>

                    <div className="col-sm mb-7 mb-sm-0">
                        <span className="text-uppercase text-primary-light-alt fs-12 lh-18 fw-500">Legal</span>

                        <ul className="list-unstyled list-py-1 my-3">
                            <li><Link className="link link-sm link-light" to="#">Terms of Use</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Privacy Policy <i className="bi bi-box-arrow-up-right ms-1"></i></Link></li>
                        </ul>

                        <span className="text-uppercase text-primary-light-alt fs-12 lh-18 fw-500">Docs</span>

                        <ul className="list-unstyled list-py-1 mt-3 mb-0">
                            <li><Link className="link link-sm link-light" to="#">Documentation</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Snippets</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="my-5 footer-divider"></div>

                <div className="row align-items-md-end">
                    <div className="col-md mb-3 mb-md-0">
                        <p className="text-white text-4 mb-0">&copy; Omega 2023, all rights reserved.</p>
                    </div>

                    <div className="col-md d-md-flex justify-content-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-sm btn-soft-light rounded-circle" to="#">
                                    <i className="bi bi-facebook"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-sm btn-soft-light rounded-circle" to="#">
                                    <i className="bi bi-twitter"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-sm btn-soft-light rounded-circle" to="#">
                                    <i className="bi bi-github"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-sm btn-soft-light rounded-circle" to="#">
                                    <i className="bi bi-slack"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export function FooterDark() {
    return(
        <footer className="footer-default footer-dark">
            <div className="container">
                <div className="row content-space-1">
                    <div className="col-lg-3 mb-7 mb-lg-0">
                        <div className="mb-5">
                            <Link className="footer-brand" to="/">
                                <img className="footer-brand-img" src={logo} alt="Omega" />
                            </Link>

                            <p className="text-gray-200 text-4 mt-3">Omega is a full responsive and premium Bootstrap 5 landing page theme.</p>
                        </div>

                        <span className="d-block">
                            <label htmlFor="selectLanguage" className="form-label text-white">Choose language</label>
                        </span>

                        <LanguageToggler />
                    </div>

                    <div className="col-sm mb-7 mb-sm-0">
                        <span className="text-uppercase text-primary-light fs-12 lh-18 fw-500">Resources</span>

                        <ul className="list-unstyled list-py-1 mt-3 mb-0">
                            <li><Link className="link link-sm link-light" to="#">Blog</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Guidance</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Customer Stories</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Support</Link></li>
                            <li><Link className="link link-sm link-light" to="#">API <i className="bi bi-box-arrow-up-right ms-1"></i></Link></li>
                            <li><Link className="link link-sm link-light" to="#">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="col-sm mb-7 mb-sm-0">
                        <span className="text-uppercase text-primary-light fs-12 lh-18 fw-500">Company</span>

                        <ul className="list-unstyled list-py-1 mt-3 mb-0">
                            <li><Link className="link link-sm link-light" to="#">Belonging <i className="bi bi-box-arrow-up-right ms-1"></i></Link></li>
                            <li><Link className="link link-sm link-light" to="#">Company</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Careers <span className="badge bg-warning text-dark rounded-pill ms-2">We're hiring</span></Link></li>
                            <li><Link className="link link-sm link-light" to="#">Contacts</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Security</Link></li>
                        </ul>
                    </div>

                    <div className="col-sm mb-7 mb-sm-0">
                        <span className="text-uppercase text-primary-light fs-12 lh-18 fw-500">Platform</span>

                        <ul className="list-unstyled list-py-1 mt-3 mb-0">
                            <li><Link className="link link-sm link-light" to="#">Web</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Mobile</Link></li>
                            <li><Link className="link link-sm link-light" to="#">iOS</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Android</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Figma</Link></li>
                        </ul>
                    </div>

                    <div className="col-sm mb-7 mb-sm-0">
                        <span className="text-uppercase text-primary-light fs-12 lh-18 fw-500">Legal</span>

                        <ul className="list-unstyled list-py-1 my-3">
                            <li><Link className="link link-sm link-light" to="#">Terms of Use</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Privacy Policy <i className="bi bi-box-arrow-up-right ms-1"></i></Link></li>
                        </ul>

                        <span className="text-uppercase text-primary-light fs-12 lh-18 fw-500">Docs</span>

                        <ul className="list-unstyled list-py-1 mt-3 mb-0">
                            <li><Link className="link link-sm link-light" to="#">Documentation</Link></li>
                            <li><Link className="link link-sm link-light" to="#">Snippets</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="my-5 footer-divider"></div>

                <div className="row align-items-md-end">
                    <div className="col-md mb-3 mb-md-0">
                        <p className="text-white mb-0 text-4">&copy; Omega 2023, all rights reserved.</p>
                    </div>

                    <div className="col-md d-md-flex justify-content-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-sm btn-soft-light rounded-circle" to="#">
                                    <i className="bi bi-facebook"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-sm btn-soft-light rounded-circle" to="#">
                                    <i className="bi bi-twitter"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-sm btn-soft-light rounded-circle" to="#">
                                    <i className="bi bi-github"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-sm btn-soft-light rounded-circle" to="#">
                                    <i className="bi bi-slack"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}