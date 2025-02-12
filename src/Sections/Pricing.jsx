//react bootstrap
import { Container } from 'react-bootstrap'

//componenta
import Header from '../Components/Header'
import PricingCard from '../Components/PricingCard'

function Pricing() {
  return (
    <Container className='my-5'>
      <Header header={"Pricing"} subtitle={"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "} />
      <div className="row">
        <PricingCard/>
      </div>
    </Container>
  )
}

export default Pricing
