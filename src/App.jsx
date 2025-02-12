import './App.css'

//react bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

//componnets
import NavbarMain from './Components/NavbarMain';

//sections
import Banner from './Sections/Banner';
import About from './Sections/About';
import Comment from './Sections/Comment';
import Faq from './Sections/Faq';
import Pricing from './Sections/Pricing';

function App() {

  return (
    <>
      <div className='back'>
        {/* navbar */}
        <NavbarMain />
        {/* banner section */}
        <Banner />
      </div>
      {/* about section */}
      <About/>
      {/* Comment section */}
      <Comment/>
      {/* Faq */}
      <Faq/>
      {/*  pricing section */}
      <Pricing/>
    </>
  )
}

export default App
