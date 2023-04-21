import { Link } from 'react-router-dom';
import { HeaderLight } from '../layouts/Header';

export function Code503() {
    return(
        <div className="corporat-page-wrapper">
            <HeaderLight />

            <main className="content" role="main">
                <nav aria-label="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb bg-light px-3 py-2 rounded">
                            <li className="breadcrumb-item"><Link className="link text-capitalize text-muted fw-400" to="#">{window.location.pathname.replaceAll('/', ' / ')}</Link></li>
                        </ol>
                    </div>
                </nav>

                <section className="header bg-white p-0 d-flex align-items-center" style={{minHeight: '100vh'}}>
                    <div className="container d-flex align-items-center h-100">
                        <div className="row justify-content-center align-items-sm-center flex-grow-1">
                            <div className="col-9 col-sm-5 mb-sm-0 text-end">
                                <img className="img-fluid max-width-28" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/illustrations/oc-yelling.svg" alt="Illustration" />
                            </div>

                            <div className="col-sm-6">
                                <div className="mb-4 pe-5 pe-xs-0">
                                    <h1 className="text-primary heading-1">503</h1>
                                    <h3 className="heading-3 mb-2">This page is currently under construction</h3>
                                    <p className="text-gray-500 col-sm-9 col-xs-12 mb-4">
                                        Omega is always undergoing development, improving the look and performance of the theme and it's pages.
                                        This page will be available soon.
                                    </p>
                                    <Link className="btn btn-primary btn-lg col-4" to="/">Go back home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}