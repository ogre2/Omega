import { Link } from 'react-router-dom';
import { HeaderLight } from '../components/Header';
import { JoinCard, AccordionCard } from '../components/Cards';
import { FeaturesTabs } from '../components/NavTabs';
import { FeaturesTable } from '../components/Tables';

function Corporate() {
    return(
        <div className="corporate-page-wrapper">
            <HeaderLight />

            <main className="content" role="main">
                <section className="header bg-primary-dark">
                    <div className="container">
                        <div className="row justify-content-center align-items-lg-center">
                            <div className="col-md-8 col-lg-6 mb-7 mb-lg-0">
                                <div className="pe-lg-3 mb-5">
                                    <h1 className="fw-600 text-white mb-2 mb-md-3">Helping startups find solutions.</h1>

                                    <p className="text-lg text-gray-300">
                                        Built on standard web technology, teams use Omega to build responsive web applications in record time.
                                    </p>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <span className="svg-icon text-white">
                                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M22.1671 18.1421C22.4827 18.4577 23.0222 18.2331 23.0206 17.7868L23.0039 13.1053V5.52632C23.0039 4.13107 21.8729 3 20.4776 3H8.68815C7.2929 3 6.16183 4.13107 6.16183 5.52632V9H13C14.6568 9 16 10.3431 16 12V15.6316H19.6565L22.1671 18.1421Z" fill="#ffffff" />
                                                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M1.98508 18V13C1.98508 11.8954 2.88051 11 3.98508 11H11.9851C13.0896 11 13.9851 11.8954 13.9851 13V18C13.9851 19.1046 13.0896 20 11.9851 20H4.10081L2.85695 21.1905C2.53895 21.4949 2.01123 21.2695 2.01123 20.8293V18.3243C1.99402 18.2187 1.98508 18.1104 1.98508 18ZM5.99999 14.5C5.99999 14.2239 6.22385 14 6.49999 14H11.5C11.7761 14 12 14.2239 12 14.5C12 14.7761 11.7761 15 11.5 15H6.49999C6.22385 15 5.99999 14.7761 5.99999 14.5ZM9.49999 16C9.22385 16 8.99999 16.2239 8.99999 16.5C8.99999 16.7761 9.22385 17 9.49999 17H11.5C11.7761 17 12 16.7761 12 16.5C12 16.2239 11.7761 16 11.5 16H9.49999Z" fill="#ffffff" />
                                                    </svg>
                                                </span>
                                            </div>

                                            <div className="flex-grow-1 ms-4">
                                                <h6 className="text-white mb-0">24 hours</h6>
                                                <p className="text-gray-300">Response time</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <span className="svg-icon text-white">
                                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.3" d="M4.875 20.75C4.63542 20.75 4.39583 20.6542 4.20417 20.4625L2.2875 18.5458C1.90417 18.1625 1.90417 17.5875 2.2875 17.2042C2.67083 16.8208 3.29375 16.8208 3.62917 17.2042L4.875 18.45L8.0375 15.2875C8.42083 14.9042 8.99583 14.9042 9.37917 15.2875C9.7625 15.6708 9.7625 16.2458 9.37917 16.6292L5.54583 20.4625C5.35417 20.6542 5.11458 20.75 4.875 20.75Z" fill="#ffffff" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 3C3.34315 3 2 4.34315 2 6V11.865C3.04486 11.3127 4.23591 11 5.5 11C9.47412 11 12.7263 14.091 12.9836 18H18.0249L20.3178 20.2929C20.9478 20.9229 22.0249 20.4767 22.0249 19.5858V15L22 15.0098L22 15V6C22 4.34315 20.6569 3 19 3H5ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44771 9 6 9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7H6Z" fill="#ffffff" />
                                                    </svg>
                                                </span>
                                            </div>

                                            <div className="flex-grow-1 ms-4">
                                                <h6 className="text-white mb-0">92%</h6>
                                                <p className="text-gray-300">Satisfaction rate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-6">
                                <div className="ps-lg-5">
                                    <JoinCard />
                                </div>
                            </div>
                        </div>
                        
                        <div className="my-90 border-top border-white-10"></div>

                        <div className="row">
                            <div className="col-sm mb-5 mb-sm-0">
                                <div className="d-flex gap-1 mb-2">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-half text-warning"></i>
                                </div>

                                <blockquote className="blockquote blockquote-sm text-white mb-4">
                                    <i className="bi bi-quote superscript"></i> This is a beautiful template with exciting components. <i className="bi bi-quote superscript flip-180"></i>
                                </blockquote>

                                <img className="" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/brands/airbnb-white-50.svg" alt="Company" />
                            </div>

                            <div className="col-sm mb-5 mb-sm-0">
                                <div className="d-flex gap-1 mb-2">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                </div>

                                <blockquote className="blockquote blockquote-sm text-white mb-4">
                                    <i className="bi bi-quote superscript"></i> This is a beautiful template with exciting components. <i className="bi bi-quote superscript flip-180"></i>
                                </blockquote>

                                <img className="" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/brands/amazon-white-50.svg" alt="Company" />
                            </div>

                            <div className="col-sm mb-5 mb-sm-0">
                                <div className="d-flex gap-1 mb-2">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-half text-warning"></i>
                                </div>

                                <blockquote className="blockquote blockquote-sm text-white mb-4">
                                    <i className="bi bi-quote superscript"></i> This is a beautiful template with exciting components. <i className="bi bi-quote superscript flip-180"></i>
                                </blockquote>

                                <img className="" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/brands/google-white-50.svg" alt="Company" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features-section">
                    <div className="container">
                        <div className="w-lg-65 mx-lg-auto mb-5 text-center">
                            <h3 className="mb-2">Take the best path forward</h3>
                            <p className="text-2 text-gray-500">Actionable strategies and business marketing advice help you to grow faster.</p>
                        </div>

                        <div className="row">
                            <FeaturesTabs />
                        </div>
                    </div>
                </section>

                <section className="features-cont">
                    <div className="position-relative mb-5">
                        <div className="container">
                            <div className="row justify-content-end align-items-md-center">
                                <div className="d-none d-md-block col-md-6 position-absolute top-0 start-0 bg-img-cover-center h-100" style={{backgroundImage: "url('https://htmlstream.com/preview/space-v2.3.1/assets/img/900x700/img7.jpg')"}}></div>
                                <div className="d-md-none mb-5 mb-md-0">
                                    <img className="img-fluid" src="https://htmlstream.com/preview/space-v2.3.1/assets/img/900x700/img7.jpg" alt="Agency" />
                                </div>

                                <div className="col-md-6">
                                    <div className="p-md-5 p-lg-60">
                                        <div className="mb-4 mb-sm-5">
                                            <span className="fs-12 lh-18 fw-500 text-uppercase">Create a website</span>
                                            <h3 className="mt-2 mb-2">Less overhead, more collaboration</h3>
                                            <p className="col-sm-12 col-md-9">Start with award-winning templates, then customize to fit your style and professional needs.</p>
                                        </div>

                                        <div className="row mb-sm-5">
                                            <div className="col-sm-6 col-md-12 col-lg-6">
                                                <ul className="list-checked list-checked-primary mb-0">
                                                    <li className="list-checked-item">Corporate-based businesses</li>
                                                    <li className="list-checked-item">Creative Services</li>
                                                    <li className="list-checked-item">New Business Innovation</li>
                                                    <li className="list-checked-item">Online E-Commerce</li>
                                                    <li className="list-checked-item">Real Estate</li>
                                                </ul>
                                            </div>

                                            <div className="col-sm-6 col-md-12 col-lg-6">
                                                <ul className="list-checked list-checked-primary mb-0">
                                                    <li className="list-checked-item">Portfolio</li>
                                                    <li className="list-checked-item">Blogs</li>
                                                    <li className="list-checked-item">Booking.com</li>
                                                    <li className="list-checked-item">and more...</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <Link className="link fw-500" to="#">Explore all templates <i className="bi bi-chevron-right small ms-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="position-relative">
                        <div className="container">
                            <div className="row pt-80">
                                <div className="col-sm-6 col-lg-4 mb-5 px-5">
                                    <span className="svg-icon text-primary mb-3">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z" fill="#007DFC" />
                                            <path opacity="0.3" d="M13 6.5C13 4 15 2 17.5 2C20 2 22 4 22 6.5C22 9 20 11 17.5 11C15 11 13 9 13 6.5ZM6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22ZM17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22Z" fill="#007DFC" />
                                        </svg>
                                    </span>

                                    <h6 className="my-3">Task Management</h6>
                                    <p>This is where we really begin to visualize your napkin sketches and make them into beautiful pixels.</p>
                                </div>

                                <div className="col-sm-6 col-lg-4 mb-5 px-5">
                                    <span className="svg-icon text-primary mb-3">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0021 10.9128V3.01281C13.0021 2.41281 13.5021 1.91281 14.1021 2.01281C16.1021 2.21281 17.9021 3.11284 19.3021 4.61284C20.7021 6.01284 21.6021 7.91285 21.9021 9.81285C22.0021 10.4129 21.5021 10.9128 20.9021 10.9128H13.0021V10.9128Z" fill="#007DFC" />
                                            <path opacity="0.3" d="M11.0021 13.7128V4.91283C11.0021 4.31283 10.5021 3.81283 9.90208 3.91283C5.40208 4.51283 1.90209 8.41284 2.00209 13.1128C2.10209 18.0128 6.40208 22.0128 11.3021 21.9128C13.1021 21.8128 14.7021 21.3128 16.0021 20.4128C16.5021 20.1128 16.6021 19.3128 16.1021 18.9128L11.0021 13.7128Z" fill="#007DFC" />
                                            <path opacity="0.3" d="M21.9021 14.0128C21.7021 15.6128 21.1021 17.1128 20.1021 18.4128C19.7021 18.9128 19.0021 18.9128 18.6021 18.5128L13.0021 12.9128H20.9021C21.5021 12.9128 22.0021 13.4128 21.9021 14.0128Z" fill="#007DFC" />
                                        </svg>
                                    </span>

                                    <h6 className="my-3">Activity Reporting</h6>
                                    <p>This is where we really begin to visualize your napkin sketches and make them into beautiful pixels.</p>
                                </div>

                                <div className="col-sm-6 col-lg-4 mb-5 px-5">
                                    <span className="svg-icon text-primary mb-3">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 7.19995H10C10.6 7.19995 11 6.79995 11 6.19995V3.19995C11 2.59995 10.6 2.19995 10 2.19995H3C2.4 2.19995 2 2.59995 2 3.19995V6.19995C2 6.69995 2.4 7.19995 3 7.19995Z" fill="#007DFC" />
                                            <path opacity="0.3" d="M10.1 22H3.10001C2.50001 22 2.10001 21.6 2.10001 21V10C2.10001 9.4 2.50001 9 3.10001 9H10.1C10.7 9 11.1 9.4 11.1 9V20C11.1 21.6 10.7 22 10.1 22ZM13.1 18V21C13.1 21.6 13.5 22 14.1 22H21.1C21.7 22 22.1 21.6 22.1 21V18C22.1 17.4 21.7 17 21.1 17H14.1C13.5 17 13.1 17.4 13.1 18ZM21.1 2H14.1C13.5 2 13.1 2.4 13.1 3V14C13.1 14.6 13.5 15 14.1 15H21.1C21.7 15 22.1 14.6 22.1 14V3C22.1 2.4 21.7 2 21.1 2Z" fill="#007DFC" />
                                        </svg>
                                    </span>

                                    <h6 className="my-3">Smart Dashboards</h6>
                                    <p>This is where we really begin to visualize your napkin sketches and make them into beautiful pixels.</p>
                                </div>

                                <div className="col-sm-6 col-lg-4 mb-5 px-5">
                                    <span className="svg-icon text-primary mb-3">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z" fill="#007DFC" />
                                            <path d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z" fill="#007DFC" />
                                        </svg>
                                    </span>

                                    <h6 className="my-3">SSO Authentication</h6>
                                    <p>This is where we really begin to visualize your napkin sketches and make them into beautiful pixels.</p>
                                </div>

                                <div className="col-sm-6 col-lg-4 mb-5 px-5">
                                    <span className="svg-icon text-primary mb-3">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M2.10001 10C3.00001 5.6 6.69998 2.3 11.2 2L8.79999 4.39999L11.1 7C9.60001 7.3 8.30001 8.19999 7.60001 9.59999L4.5 12.4L2.10001 10ZM19.3 11.5L16.4 14C15.7 15.5 14.4 16.6 12.7 16.9L15 19.5L12.6 21.9C17.1 21.6 20.8 18.2 21.7 13.9L19.3 11.5Z" fill="#007DFC" />
                                            <path d="M13.8 2.09998C18.2 2.99998 21.5 6.69998 21.8 11.2L19.4 8.79997L16.8 11C16.5 9.39998 15.5 8.09998 14 7.39998L11.4 4.39998L13.8 2.09998ZM12.3 19.4L9.69998 16.4C8.29998 15.7 7.3 14.4 7 12.8L4.39999 15.1L2 12.7C2.3 17.2 5.7 20.9 10 21.8L12.3 19.4Z" fill="#007DFC" />
                                        </svg>
                                    </span>

                                    <h6 className="my-3">Competitive Analysis</h6>
                                    <p>This is where we really begin to visualize your napkin sketches and make them into beautiful pixels.</p>
                                </div>

                                <div className="col-sm-6 col-lg-4 mb-5 px-5">
                                    <span className="svg-icon text-primary mb-3">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2718 8.68537C16.8933 8.28319 16.9125 7.65032 17.3146 7.2718C17.7168 6.89329 18.3497 6.91246 18.7282 7.31464L22.7282 11.5646C23.0906 11.9497 23.0906 12.5503 22.7282 12.9354L18.7282 17.1854C18.3497 17.5875 17.7168 17.6067 17.3146 17.2282C16.9125 16.8497 16.8933 16.2168 17.2718 15.8146L20.6268 12.25L17.2718 8.68537Z" fill="#007DFC" />
                                            <path d="M6.7282 8.68537C7.10671 8.28319 7.08754 7.65032 6.68536 7.2718C6.28319 6.89329 5.65031 6.91246 5.2718 7.31464L1.2718 11.5646C0.909397 11.9497 0.909397 12.5503 1.2718 12.9354L5.2718 17.1854C5.65031 17.5875 6.28319 17.6067 6.68536 17.2282C7.08754 16.8497 7.10671 16.2168 6.7282 15.8146L3.37325 12.25L6.7282 8.68537Z" fill="#007DFC" />
                                            <rect opacity="0.3" x="12.7388" y="3.97168" width="2" height="16" rx="1" transform="rotate(12.3829 12.7388 3.97168)" fill="#007DFC" />
                                        </svg>
                                    </span>

                                    <h6 className="my-3">API Access</h6>
                                    <p>This is where we really begin to visualize your napkin sketches and make them into beautiful pixels.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="potential" style={{backgroundColor: '#F0FDFF'}}>
                    <div className="container">
                        <div className="w-lg-65 mx-lg-auto mb-5 text-center">
                            <h3 className="mb-2">Unlock Omega's full potential</h3>
                            <p className="text-2 text-gray-500">Modernize all the ways you work.</p>
                        </div>

                        <div className="row d-flex align-items-md-center mb-5 mb-md-100">
                            <div className="col-md-6 mb-5 mb-md-0">
                                <div className="text-center">
                                    <img className="img-fluid max-width-20" alt="Illustration" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/illustrations/oc-error.svg" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <FeaturesTable />
                            </div>
                        </div>

                        <div className="w-md-auto w-lg-75 text-center mx-lg-auto">
                            <div className="row col-sm-divider">
                                <div className="col-sm-4 px-4 px-xs-0">
                                    <div className="text-center">
                                        <h3 className="text-primary heading-3">45k+</h3>
                                        <p className="mb-0">Clients from freelancers to corportate companies.</p>
                                    </div>
                                </div>

                                <div className="col-sm-4 px-4 px-xs-0">
                                    <div className="text-center">
                                        <h3 className="text-primary heading-3">8...</h3>
                                        <p className="mb-0">Years of experience in this business already.</p>
                                    </div>
                                </div>

                                <div className="col-sm-4 px-4 px-xs-0">
                                    <div className="text-center">
                                        <h3 className="text-primary heading-3">12k+</h3>
                                        <p className="mb-0">Resolved all kinds of questiosn and inquiries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="container">
                        <div className="w-lg-65 mx-lg-auto mb-5 text-center">
                            <h3 className="mb-2">All about Omega</h3>
                            <p className="text-2 text-gray-500">Explore all of our guides and resources.</p>
                        </div>

                        <div className="row d-grid items-center">
                            <div className="mb-5 mb-sm-5 d-flex justify-content-between w-lg-85 flex-wrap">
                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5 d-flex justify-content-center">
                                    <Link className="card card-lg card-transition bg-primary-dark max-width-22 p-3" to="#" style={{minHeight: '22rem'}}>
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <span className="badge bg-soft-light">Data insight</span>
                                            </div>

                                            <h4 className="card-title text-white mb-5">State of product analytics report</h4>
                                            <span className="card-link link-light">Learn more <i className="bi-chevron-right small ms-1"></i></span>
                                            <div className="position-absolute bottom-0 start-0 end-0">

                                            </div>
                                        </div>    
                                    </Link> 
                                </div>

                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5 d-flex justify-content-center">
                                    <Link className="card card-lg card-transition bg-primary-dark max-width-22 p-3" to="#" style={{minHeight: '22rem'}}>
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <span className="badge bg-soft-light">E-Books & Reports</span>
                                            </div>

                                            <h4 className="card-title text-white mb-5">Omega 2023 system architecture</h4>
                                            <span className="card-link link-light">Learn more <i className="bi-chevron-right small ms-1"></i></span>
                                            <div className="position-absolute bottom-0 start-0 end-0">

                                            </div>
                                        </div>    
                                    </Link> 
                                </div>

                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5 d-flex justify-content-center">
                                    <Link className="card card-lg card-transition bg-primary-dark max-width-22 p-3" to="#" style={{minHeight: '22rem'}}>
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <span className="badge bg-soft-light">E-Books & Reports</span>
                                            </div>

                                            <h4 className="card-title text-white mb-5">A guide to Omega product materials</h4>
                                            <span className="card-link link-light">Learn more <i className="bi-chevron-right small ms-1"></i></span>
                                            <div className="position-absolute bottom-0 start-0 end-0">

                                            </div>
                                        </div>    
                                    </Link> 
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="mb-0">Want to read more?</p>
                            <Link className="link" to="#">Explore all of our resources <i className="bi bi-chevron-right ms-1"></i></Link>
                        </div>
                    </div>

                    <div className="border-top mx-auto max-width-30 my-100"></div>

                    <div className="container">
                        <div className="w-lg-50 text-center mx-auto mb-5">
                            <h3>Frequently Asked Questions</h3>
                        </div>

                        <div className="w-md-75 w-lg-55 mx-md-auto">
                            <AccordionCard />
                        </div>
                    </div>
                </section>

                <div className="bg-primary-dark shape-container">
                    <div className="shape shape-bottom text-primary-dark">
                        <svg width="3000" height="400" viewBox="0 0 3000 400" fill="%23EDEDED" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 400H3000V0L0 400Z" fill="#fff" />
                        </svg>
                    </div>
                </div>

                <section className="bg-primary-dark border-bottom border-white-10 position-relative">
                    <div className="container">
                        <div className="text-center mb-4">
                            <h5 className="text-white">Many of the world’s leading companies trust Omega</h5>
                        </div>

                        <div class="row d-flex justify-content-center">
                            <div class="col py-3">
                                <img class="avatar avatar-xl avatar-4x3" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/brands/vidados-white.svg" alt="Logo" />
                            </div>

                            <div class="col py-3">
                                <img class="avatar avatar-xl avatar-4x3" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/brands/fitbit-white.svg" alt="Logo" />
                            </div>

                            <div class="col py-3">
                                <img class="avatar avatar-xl avatar-4x3" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/brands/forbes-white.svg" alt="Logo" />
                            </div>

                            <div class="col py-3">
                                <img class="avatar avatar-xl avatar-4x3" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/brands/mailchimp-white.svg" alt="Logo" />
                            </div>

                            <div class="col py-3">
                                <img class="avatar avatar-xl avatar-4x3" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/brands/layar-white.svg" alt="Logo" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Corporate;