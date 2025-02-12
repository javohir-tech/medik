//react bootsrap
import { Container } from 'react-bootstrap'

//components
import TelegramBot from '../Components/TelegramBot'

function Banner() {
  return (
    <Container>
      <div className="row banner align-items-center">
        <div className="col-md-6 banner-info">
          <h1>Meet the Best Hospital</h1>
          <p>We know how large objects will act,
            but things on a small scale.</p>
          <button className='btn btn-primary rounded-pill me-2'>Get Quote Now</button>
          <button className='btn btn-outline-light rounded-pill'>Learn More</button>
        </div>
        <div className="col-md-3">
          <div className='form-box d-flex flex-column align-items-center px-3 py-2'>
            <h3>Book Appointment</h3>
            <TelegramBot/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Banner
