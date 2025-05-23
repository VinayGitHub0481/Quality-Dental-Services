
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import  Faq from './Components/Faq';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import { Col,List,ListGroup,Row } from 'reactstrap';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Appointment from './Pages/Appointment';
import protect_teeth from './images/protect_teeth.jpg';

function App() {
  return (
   <Router>
    <div className='text-center' style={{
         backgroundColor:'#003366',
         marginLeft:'3%',
         marginTop:'2%',
         marginBottom:'2rem',
         borderRadius:'10px',
         marginRight:'3%'
    }}>
      <Header  />                                 
      <Row>
      <Col md={3}>
     <List>
      <ListGroup>
        <Link to="/" className='list-group-item list-group-item-info' outline>Home </Link>
          <Link to="/about" className='list-group-item list-group-item-success' outline>About </Link>
            <Link to="/service" className='list-group-item list-group-item-info' outline>Services </Link>
              <Link to="/contact" className='list-group-item list-group-item-danger' outline>Contact </Link>
      </ListGroup>
     </List>
     <img src={protect_teeth} alt="Dental_teeth" style={{height:'400px'}} />
</Col>
       
   <Col md={8}>
   <Routes>
      <Route path='/' element={<HomePage />}  exact/>
      <Route path='/appointment' element={<Appointment />} exact/>
        <Route path='/about' element={<About />}  exact/>
          <Route path='/service' element={<Services />}  exact/>
            <Route path='/contact' element={<Contact />}  exact/>
    </Routes>
      </Col>

      </Row>

     <Footer />
      <Faq />
    </div>
    </Router>
  );
}

export default App;





