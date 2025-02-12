//react bootstrap 
import { Container } from 'react-bootstrap'
import Header from '../Components/Header'
import FaqCard from '../Components/FaqCard'

const data = [
    {
        index:0,
        text: "the quick fox jumps over the lazy dog",
        subtitle: "Things on a very small scale behave like nothing "
    },
    {
        index:1,
        text: "the quick fox jumps over the lazy dog",
        subtitle: "Things on a very small scale behave like nothing "
    },
    {
        index:2,
        text: "the quick fox jumps over the lazy dog",
        subtitle: "Things on a very small scale behave like nothing "
    },
    {
        index:3,
        text: "the quick fox jumps over the lazy dog",
        subtitle: "Things on a very small scale behave like nothing "
    },
    {
        index:4,
        text: "the quick fox jumps over the lazy dog",
        subtitle: "Things on a very small scale behave like nothing "
    },
    {
        index:5,
        text: "the quick fox jumps over the lazy dog",
        subtitle: "Things on a very small scale behave like nothing "
    },
    {
        index:6,
        text: "the quick fox jumps over the lazy dog",
        subtitle: "Things on a very small scale behave like nothing "
    },
    {
        index:7,
        text: "the quick fox jumps over the lazy dog",
        subtitle: "Things on a very small scale behave like nothing "
    },
    {
        index:8,
        text: "the quick fox jumps over the lazy dog",
        subtitle: "Things on a very small scale behave like nothing "
    },
]

function Faq() {
    return (
        <Container className='my-5'>
            <Header header={"FAQ"} subtitle={"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "} />

            <div className="row g-4 mt-3">
                {data.map((card) => {
                    return  <FaqCard key={card.index}
                        title={card.text}
                        subtitle={card.subtitle}
                    />
                })}
            </div>
        </Container>
    )
}

export default Faq
