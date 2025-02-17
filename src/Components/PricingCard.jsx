import { GoCheck } from "react-icons/go";

function PricingCard({name, price, another}) {
    return (
        <div className={`col-md-4 ${another ? "price-card align-self-stretch " : "praice-card__two align-self-end "} text-center px-4  py-5 rounded-4 mt-5`}>
                <h2 className="pricing-card__header">{name}</h2>
                <p className="pricing-card__title">Organize across all apps by hand</p>
                <div className='d-flex gap-3 text-primary summa align-items-center justify-content-center'>
                    <p className="price">{price}</p>
                    <div>
                        <p className="mb-0 valyuta text-start">$</p>
                        <p className="month">Per Month</p>
                    </div>
                </div>
                <div>
                    <div className="d-flex align-items-center gap-4 mb-3 justify-content-center">
                        <div className="true-box d-flex align-items-center justify-content-center text-light rounded-pill">
                            <GoCheck />
                        </div>
                        <p className="mb-0 check">Unlimited product updates</p>
                    </div>

                    <div className="d-flex align-items-center gap-4 mb-3 justify-content-center">
                        <div className="true-box d-flex align-items-center justify-content-center text-light rounded-pill">
                            <GoCheck />
                        </div>
                        <p className="mb-0 check">Unlimited product updates</p>
                    </div>

                    <div className="d-flex align-items-center gap-4 mb-3 justify-content-center">
                        <div className="true-box d-flex align-items-center justify-content-center text-light rounded-pill">
                            <GoCheck />
                        </div>
                        <p className="mb-0 check">Unlimited product updates</p>
                    </div>

                    <div className="d-flex align-items-center gap-4 mb-3 justify-content-center">
                        <div style={{backgroundColor:"#BDBDBD"}} className="true-box d-flex align-items-center justify-content-center text-light rounded-pill">
                            <GoCheck />
                        </div>
                        <p className="mb-0 check">Unlimited product updates</p>
                    </div>

                    <div className="d-flex align-items-center gap-4 mb-3 justify-content-center">
                        <div style={{backgroundColor:"#BDBDBD"}} className="true-box d-flex align-items-center justify-content-center text-light rounded-pill">
                            <GoCheck />
                        </div>
                        <p className="mb-0 check">Unlimited product updates</p>
                    </div>

                </div>
                <button className="btn btn-primary w-100">Try for free</button>
        </div>
    )
}

export default PricingCard
