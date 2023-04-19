// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

export function FAQAccordion() {
    return(
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        What methods of payments are supported?
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. 
                        This is the first item's accordion body.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Can I cancel at anytime?
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. 
                        This is the second item's accordion body. Let's imagine this being filled with some actual content.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        How do I get a receipt for my purchase?
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. 
                        This is the third item's accordion body. Let's imagine this being filled with some actual content.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFOur">
                        Which license do I need?
                    </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. 
                        This is the fourth item's accordion body. Let's imagine this being filled with some actual content.
                    </div>
                </div>
            </div>
        </div>
    );
}