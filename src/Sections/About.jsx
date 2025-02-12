
//react bootstrap
import { Container } from 'react-bootstrap'

//components
import Header from '../Components/Header'
import AboutCard from '../Components/AboutCard'

function About() {
  return (
    <Container className='my-5'>
        <Header header={"Leading Medicine"} subtitle={"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "}/>
        <div className='row mt-5'>
            <div className="col-md-4">
                <AboutCard title={"Emergency Case "}/>
            </div>
            <div className="col-md-4">
                <AboutCard title={"Cancer Care"}/>
            </div>
            <div className="col-md-4">
                <AboutCard title={"Health Queries"}/>
            </div>
        </div>
    </Container>
  )
}

export default About
