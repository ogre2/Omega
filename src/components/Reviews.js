export const Reviews = {
    'Header': {
        'AirBnb': function Airbnb() {
            return (
                <div className="col-sm mb-5 mb-sm-0">
                    <div className="d-flex gap-1 mb-2">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                    </div>

                    <blockquote className="blockquote blockquote-sm text-white mb-4">
                        <i className="bi bi-quote superscript"></i> Thanks to Omega, our brand reach skyrocketed instantly. <i className="bi bi-quote superscript flip-180"></i>
                    </blockquote>

                    <img className="" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/brands/airbnb-white-50.svg" alt="Company" />
                </div>
            );
        },
        'Amazon': function Airbnb() {
            return (
                <div className="col-sm mb-5 mb-sm-0">
                    <div className="d-flex gap-1 mb-2">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                    </div>

                    <blockquote className="blockquote blockquote-sm text-white mb-4">
                        <i className="bi bi-quote superscript"></i> Omega boosted our sales tremendously, they are phenomenal. <i className="bi bi-quote superscript flip-180"></i>
                    </blockquote>

                    <img className="" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/brands/amazon-white-50.svg" alt="Company" />
                </div>
            );
        },
        'Google': function Amazon() {
            return(
                <div className="col-sm mb-5 mb-sm-0">
                    <div className="d-flex gap-1 mb-2">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                    </div>

                    <blockquote className="blockquote blockquote-sm text-white mb-4">
                        <i className="bi bi-quote superscript"></i> Scaling up was a breeze thanks to Omega and their many tools. <i className="bi bi-quote superscript flip-180"></i>
                    </blockquote>

                    <img className="" src="https://htmlstream.com/preview/space-v2.3.1/assets/svg/brands/google-white-50.svg" alt="Company" />
                </div>
            );
        }
    }
}