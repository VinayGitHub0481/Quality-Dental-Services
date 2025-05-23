
import {Container} from 'reactstrap';

 
  const Header=()=>{

return (
  <div style={{
       border:'2px solid',
       borderRadius:'5px',
       backgroundColor: '#D4AF37',
       marginBottom:'20px'
  }}>
    <div className="text-center" style={{
                 paddingLeft:'40%'
    }}>
        <Container >
<h2 style={{backgroundColor:"steelblue",borderRadius:'5px',border:'2px solid black',width:'50%',height:'60px',
              textAlign:'center'
                   
}} className="text-center mt-5">Quality Dental Service</h2>
 <p style={{
          paddingRight:'50%'
 }}> <strong>QUALITY DENTAL SERVICE REFERS TO PROFESSIONAL, PATIENT-CENTERED ORAL HEALTHCARE THAT EMPHASIZES SAFETY, EFFECTIVENESS, AND COMFORT.
   </strong> </p>
    </Container>
 </div>

 </div>
);
  }

  export default Header;



















