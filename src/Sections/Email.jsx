//react bootstrap
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap'


function Email() {
    return (
        <div className='my-5' style={{backgroundColor:"rgba(37, 43, 66, 1)"}}>
            <Container>
                <div className="row align-items-center py-5">
                    <div className="col-md-4 offset-1 text-light email-info">
                        <h2>Get In Touch</h2>
                        <p>
                            The gradual accumulation of information about atomic and
                            small-scale behaviour during the first quarter of the 20th
                        </p>
                    </div>
                    <div className="col-md-4 offset-2">
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Your Email"
                                aria-label="Recipient's username"
                                aria-describedby="email"
                            />
                           <button className='btn btn-primary' id='email'>Subscribe</button>
                        </InputGroup>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Email
