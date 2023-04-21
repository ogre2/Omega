import { Link } from 'react-router-dom';

export function JoinForm() {
    return(
        <form id="joinForm" className="form">
            <div className="row">
                <div className="col-sm-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label">First name</label>
                        <input className="form-control form-control-lg" type="text" name="name" id="name" placeholder="John" aria-label="Enter your name" required data-msg="Please enter your name" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label">Last name</label>
                        <input className="form-control form-control-lg" type="text" name="name" id="name" placeholder="Doe" aria-label="Enter your name" required data-msg="Please enter your name" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="form-label">Your email</label>
                <input className="form-control form-control-lg" type="email" name="email" id="email" placeholder="email@address.com" aria-label="Email" required data-msg="Please enter your email" />
            </div>

            <div className="mb-4">
                <label className="form-label" htmlFor="companySize">Company size</label>

                <div className="row">
                    <div className="col-sm mb-4 mb-sm-0">
                        <label className="form-control form-control-lg" htmlFor="registerRadio1">
                            <span className="form-check form-check-custom">
                                <input type="radio" className="form-check-input" name="registerRadio" checked />
                                <span className="form-check-label">1-10</span>
                            </span>
                        </label>
                    </div>
                    <div className="col-sm mb-4 mb-sm-0">
                        <label className="form-control form-control-lg" htmlFor="registerRadio2">
                            <span className="form-check form-check-custom">
                                <input type="radio" className="form-check-input" name="registerRadio" />
                                <span className="form-check-label">More than 10</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="d-grid text-center">
                <button type="submit" className="btn btn-lg btn-primary mb-2">Start your free 30-days trial</button>
                <span className="form-text">Need help? <Link className="link fw-500" to="#">Visit our Help Center <i className="bi bi-chevron-right fs-12 ms-1"></i></Link></span>
            </div>
        </form>
    )
}