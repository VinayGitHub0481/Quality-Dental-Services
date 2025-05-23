

// Home Page:- Banner or Hero section- 


import {Link} from 'react-router-dom';
import Dental from '../images/Dental.jpg';
import { CardBody,Card } from 'reactstrap';

const HomePage=()=>{


return ( 
<div className="container" style={{
       backgroundColor:'#e6f2ff  '
}}>
    <img src={Dental} alt='Dental-Image' style={{
         width:'80%',
         height:'500px',
         border:'2px solid',
         borderRadius:'5px',
         marginBottom: '5px',
         marginTop: '20px'
    }}/>



     <div style={{textAlign:'justify',
     marginTop:'15px',
     marginBottom:'15px',
        maxWidth:'1140px',
        margin: '0 auto'
     }}>
 <h5 style={{
     marginTop:'20px',
     justifyContent:'center',
     fontStyle:'italic'
    }}>

        Quality dental service clinic prioritizes patient comfort, hygiene, and well-being while providing reliable dental care.
     It focuses on preventative measures, accurate diagnoses, and effective treatments, all while adhering to the highest standards of hygiene 
     and safety. A good clinic also values patient education and communication, ensuring patients are fully informed about their oral health 
     and treatment options. 
     By choosing a good dental clinic, patients can be rest assured of being in good hands. A good dental clinic appoints only top-notch,
      experienced dental professionals who keep themselves updated about advancements in dentistry and provide reliable dental advice and 
      treatments. 
        <br /> <br />  They understand every patient’s unique dental needs and concerns and provide them with tailored, quality care,answer each of 
      their questions and give them every detail about their treatment plan.
      Quality Dental clinic has well-versed, experienced dental experts who utilise state-of-the-art dental technologies and ensure a tailored, 
      comprehensive range of dental services in a relaxing environment. It is a perfect place for seamless, top-notch dental care.
Make no more delays in achieving a healthier, radiant smile. Reach out to us today and discover a dental clinic that goes the extra mile for you. 

 </h5>


 
      </div>

<Card>
    <CardBody style={{backgroundColor:'#e0f7f1 '} }>
<section >
    <h2 >Overview Of Service</h2> <hr />
<ul className='service-list'>
<li><strong>Orthodontics:</strong> Healtheir simles, great solutions for straighter </li>
<li><strong>General Dentistry:</strong> Routine checkups, cleanings, fillings</li>
<li><strong>Emergency Care :</strong>Promised treatment for toothaches,broken teeths</li>
<li><strong>Pediatric Dentistry: </strong>Good dental care for children,pleasent environment</li>

</ul>
</section>
</CardBody>
</Card>

<h4 style={{ marginTop: '30px', color: '#2980b9' }}>
        Don’t wait—achieve a healthier, radiant smile today. Contact us to experience exceptional dental care.
      </h4>
 <Link to="/appointment" >
<button type='button' className='btn btn-primary' style={{marginBottom:'10px'}}>Book-Appointment</button>
</Link>

</div>
);
}

export default HomePage;