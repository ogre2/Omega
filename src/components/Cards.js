import { Link } from 'react-router-dom';
import { JoinForm } from './Forms';
import { FAQAccordion } from './Accordions';

export function JoinCard() {
    return(
        <div className="card card-lg p-3 join-form-card">
            <div className="card-body">
                <div className="row align-items-sm-center mb-5">
                    <div className="col-sm-auto order-sm-2 mb-3 mb-sm-0">
                        <img className="" style={{height: '150px', width: 'auto'}} src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/illustrations/oc-chatting.svg" alt="Illustration" />
                    </div>

                    <div className="col-sm">
                        <h5 className="card-title">Join Omega</h5>
                        <p className="card-text">Hundreds of companies are using Omega to get their brands running.</p>
                    </div>
                </div>

                <JoinForm />
            </div>
        </div>
    );
}

export function AccordionCard() {
    return(
        <div className="card card-lg accordion-card">
            <div className="card-body">
                <FAQAccordion />
            </div>
            <div className="card-footer text-center">
                <p className="mb-0">Still have questions?</p>
                <Link className="link" to="#">Contact our friendly support team <i className="bi bi-chevron-right small ms-1"></i></Link>
            </div>
        </div>
    );
}