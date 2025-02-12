//icons
import { GoChevronRight } from "react-icons/go";

function FaqCard({title, subtitle}) {
  return (
    <div className='col-md-4'>
      <div className="d-flex faq-card shadow">
        <div className="faq-card__icon">
        <GoChevronRight/>
        </div>
        <div className="faq-card-info">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqCard
