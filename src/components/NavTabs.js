import browserImg1 from '../assets/img/800x500/img1.png';
import browserImg2 from '../assets/img/800x500/img2.png';
import browserImg3 from '../assets/img/800x500/img3.png';
import mobileImg1 from '../assets/img/240x480/img1.png';
import mobileImg2 from '../assets/img/240x480/img2.png';
import mobileImg3 from '../assets/img/240x480/img3.png';

export function FeaturesTabs() {
    return(
        <div className="features-tabs mb-5">
             <ul className="nav nav-pills mb-7 d-flex justify-content-center" id="featurestab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" href="#featuresOne" id="featuresOne-tab" data-bs-toggle="tab" data-bs-target="#featuresOne" role="tab" aria-controls="featuresOne" aria-selected="true" style={{width: '22rem'}}>
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <span className="svg-icon svg-icon-sm text-primary">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.6 5.59998L20.9 10.9C21.3 11.3 21.3 11.9 20.9 12.3L17.6 15.6L11.6 9.59998L15.6 5.59998ZM2.3 12.3L7.59999 17.6L11.6 13.6L5.59999 7.59998L2.3 10.9C1.9 11.3 1.9 11.9 2.3 12.3Z" fill="#007DFC" />
                                        <path opacity="0.3" d="M17.6 15.6L12.3 20.9C11.9 21.3 11.3 21.3 10.9 20.9L7.59998 17.6L13.6 11.6L17.6 15.6ZM10.9 2.3L5.59998 7.6L9.59998 11.6L15.6 5.6L12.3 2.3C11.9 1.9 11.3 1.9 10.9 2.3Z" fill="#007DFC" />
                                    </svg>
                                </span>
                            </div>

                            <div className="flex-grow-1 ms-3">
                                <h6 className="nav-title">All-in-one workspace</h6>
                                <p className="nav-text text-body">Create a business, whether you've got a fresh idea.</p>
                            </div>
                        </div>
                    </a>
                </li>

                <li className="nav-item mx-2" role="presentation">
                    <a className="nav-link" href="#featuresTwo" id="featuresTwo-tab" data-bs-toggle="tab" data-bs-target="#featuresTwo" role="tab" aria-controls="featuresTwo" aria-selected="false" style={{width: '22rem'}}>
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <span className="svg-icon svg-icon-sm text-primary">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M7 20.5L2 17.6V11.8L7 8.90002L12 11.8V17.6L7 20.5ZM21 20.8V18.5L19 17.3L17 18.5V20.8L19 22L21 20.8Z" fill="#007DFC" />
                                        <path d="M22 14.1V6L15 2L8 6V14.1L15 18.2L22 14.1Z" fill="#007DFC" />
                                    </svg>
                                </span>
                            </div>

                            <div className="flex-grow-1 ms-3">
                                <h6 className="nav-title">Automation on a whole new level</h6>
                                <p className="nav-text text-body">Use automation to scale campaigns profitably and save time doing it.</p>
                            </div>
                        </div>
                    </a>
                </li>

                <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#featuresThree" id="featuresThree-tab" data-bs-toggle="tab" data-bs-target="#featuresThree" role="tab" aria-controls="featuresThree" aria-selected="false" style={{width: '22rem'}}>
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <span className="svg-icon svg-icon-sm text-primary">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="#007DFC" />
                                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="#007DFC" />
                                    </svg>
                                </span>
                            </div>

                            <div className="flex-grow-1 ms-3">
                                <h6 className="nav-title">Solving problems for every team</h6>
                                <p className="nav-text text-body">One tool for your company to share knowledge and ship projects.</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>

            <div className="tab-content mt-5" id="featuresTabContent">
                <div className="tab-pane fade show active" id="featuresOne" role="tabpanel" aria-labelledby="featuresOne-tab">
                    <div className="devices">
                        <figure className="device-mobile">
                            <div className="device-mobile-frame">
                                <img className="device-mobile-img" src={mobileImg1} alt="Mobile" />
                            </div>
                        </figure>

                        <figure className="device-browser">
                            <div className="device-browser-header">
                                <div className="device-browser-header-btn-list">
                                    <span className="device-browser-header-btn"></span>
                                    <span className="device-browser-header-btn"></span>
                                    <span className="device-browser-header-btn"></span>
                                </div>
                                <div className="device-browser-header-browser-bar">
                                    ogre2.github.io/Omega
                                </div>
                            </div>

                            <div className="device-browser-frame">
                                <img className="device-browser-img" src={browserImg3} alt="Browser" />
                            </div>
                        </figure>
                    </div>
                </div>

                <div className="tab-pane fade show" id="featuresTwo" role="tabpanel" aria-labelledby="featuresTwo-tab">
                    <div className="devices">
                        <figure className="device-mobile">
                            <div className="device-mobile-frame">
                                <img className="device-mobile-img" src={mobileImg2} alt="Mobile" />
                            </div>
                        </figure>

                        <figure className="device-browser">
                            <div className="device-browser-header">
                                <div className="device-browser-header-btn-list">
                                    <span className="device-browser-header-btn"></span>
                                    <span className="device-browser-header-btn"></span>
                                    <span className="device-browser-header-btn"></span>
                                </div>
                                <div className="device-browser-header-browser-bar">
                                    ogre2.github.io/Omega
                                </div>
                            </div>

                            <div className="device-browser-frame">
                                <img className="device-browser-img" src={browserImg2} alt="Browser" />
                            </div>
                        </figure>
                    </div>
                </div>

                <div className="tab-pane fade show" id="featuresThree" role="tabpanel" aria-labelledby="featuresThree-tab">
                    <div className="devices">
                        <figure className="device-mobile">
                            <div className="device-mobile-frame">
                                <img className="device-mobile-img" src={mobileImg3} alt="Mobile" />
                            </div>
                        </figure>

                        <figure className="device-browser">
                            <div className="device-browser-header">
                                <div className="device-browser-header-btn-list">
                                    <span className="device-browser-header-btn"></span>
                                    <span className="device-browser-header-btn"></span>
                                    <span className="device-browser-header-btn"></span>
                                </div>
                                <div className="device-browser-header-browser-bar">
                                    ogre2.github.io/Omega
                                </div>
                            </div>

                            <div className="device-browser-frame">
                                <img className="device-browser-img" src={browserImg1} alt="Browser" />
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );  
}