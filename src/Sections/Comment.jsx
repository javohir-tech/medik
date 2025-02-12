//boostarpa css
import { Container } from 'react-bootstrap'

//component
import Header from '../Components/Header'
import CommetCard from '../Components/CommetCard'

//images
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

function Comment() {
    return (
        <Container className='my-5'>
            <Header
                header={"Leading Medicine"}
                subtitle={"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "}
            />
            <div className="row g-2 mt-4">

                <CommetCard img={image1}/>   

                <CommetCard img={image2}/>

                <CommetCard img={image3}/>

            </div>
        </Container>
    )
}

export default Comment
