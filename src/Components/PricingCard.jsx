import { GoCheck } from "react-icons/go";

function PricingCard() {
    return (
        <div className="col-md-3 price-card text-center border px-4  py-5 rounded-4">
            <h2>Free</h2>
            <p>Organize across all
                apps by hand</p>
            <div className='d-flex align-items-center justify-content-center'>
                <p>0</p>
                <div>
                    <p className="mb-0">$</p>
                    <p>Per Month</p>
                </div>
            </div>
            <div>
                <div className="d-flex align-items-center gap-4 mb-3 justify-content-center">
                    <div className="true-box d-flex align-items-center justify-content-center text-light rounded-pill">
                        <GoCheck />
                    </div>
                    <p className="mb-0">Unlimited product updates</p>
                </div>

                <div className="d-flex align-items-center gap-4 mb-3 justify-content-center">
                    <div className="true-box d-flex align-items-center justify-content-center text-light rounded-pill">
                        <GoCheck />
                    </div>
                    <p className="mb-0">Unlimited product updates</p>
                </div>

                <div className="d-flex align-items-center gap-4 mb-3 justify-content-center">
                    <div className="true-box d-flex align-items-center justify-content-center text-light rounded-pill">
                        <GoCheck />
                    </div>
                    <p className="mb-0">Unlimited product updates</p>
                </div>

                <div className="d-flex align-items-center gap-4 mb-3 justify-content-center">
                    <div style={{backgroundColor:"#BDBDBD"}} className="true-box d-flex align-items-center justify-content-center text-light rounded-pill">
                        <GoCheck />
                    </div>
                    <p className="mb-0">Unlimited product updates</p>
                </div>

                <div className="d-flex align-items-center gap-4 mb-3 justify-content-center">
                    <div style={{backgroundColor:"#BDBDBD"}} className="true-box d-flex align-items-center justify-content-center text-light rounded-pill">
                        <GoCheck />
                    </div>
                    <p className="mb-0">Unlimited product updates</p>
                </div>

            </div>
            <button className="btn btn-primary w-100">Try for free</button>
        </div>
    )
}

export default PricingCard
