
import React,{ useState } from "react";
import { Form, FormGroup,Button } from "reactstrap";
import axios from 'axios';
import { ToastContainer,toast } from "react-toastify";


const Contact=()=>{

    const [data,Setdata]=useState(   
        {
            name:'',
            email:'',
            subject:'',
            message:''
         }
        )
    

  const handleChanges=(a)=>{                           //this function sets the state of the respective field ex: name: 'abc';
      Setdata({...data,
        [a.target.id]: a.target.value
      })
  }

    const postingToServer=(e)=>{             
          e.preventDefault();                                  //prevents reloading of page.
      
    axios.post('/insert',data).then((response)=>{           //with the help of axios we can hit http requests like GET,POST,PUT etc..
            console.log(response);
            toast.success("Submitted Successfull",{          //if posted successfull this message will be shown on the screen
                position:'top-center'
            })
             reset();                                              //After posting we are reseting fields.

    }).catch((error)=>{
                 console.log(error);
           toast.error("Submition Failed 404",{
                position:'top-center'
            })
               reset();     
    })
}
   const reset=()=>{                                           //using this function to reset the fields in the page.
        Setdata({
            name:'',
            email:'',
            subject:'',
            message:''
        })
    }

return (
 <div   style={{ padding: "2rem" ,border:'2px solid #ccc',borderRadius:'10px ',
                backgroundColor:"#e8fdf5"
 }}>

    <div  style={{
    maxWidth:'700px',
    margin:'auto',
    border:'2px solid',
    borderRadius:'20px ',
    width:'60%',
   padding: '30px',
    backgroundColor: '#f7f7f7',
 } } outline>
    <Form onSubmit={postingToServer} style={{marginTop:'2rem'}} >
        <h1 style={{paddingBottom:'10px'}}>Contact Form</h1>
      <FormGroup>
        <label htmlFor='name' style={{fontStyle:'bold',paddingRight:'10px'}}><strong>Name</strong></label>
      <input type='text' id="name" placeholder="Enter the Name" style={{textAlign:'center',width:'50%'}} value={data.name} 
      onChange={handleChanges}  />

      </FormGroup>
   <FormGroup>
        <label htmlFor='email' style={{fontStyle:'bold',paddingRight:'10px'}}><strong>Email</strong></label>
      <input type='email' id="email" placeholder="Enter the Email" style={{textAlign:'center',width:'50%'}}
      value={data.email} 
      onChange={handleChanges}  />

      </FormGroup>
  <FormGroup>
        <label htmlFor='subject' style={{fontStyle:'bold',paddingRight:'10px'}}><strong>Subject</strong></label>
      <input type='text' id="subject" placeholder="Enter the Subject" style={{textAlign:'center',width:'50%'}}
      value={data.subject} 
      onChange={handleChanges}  />

      </FormGroup>
  <FormGroup>
        <label htmlFor='message' style={{fontStyle:'bold',paddingRight:'10px'}}><strong>Message</strong></label><br />
      <textarea  id="message" placeholder="Enter the Message"  style={{textAlign: 'center', width: '50%', height: '100px', padding: '20px' }}
      value={data.message} 
      onChange={handleChanges}  />

      </FormGroup>
      <Button type="submit"  color="success" >Submit</Button>
    </Form>
    </div>



  <div style={{
      marginTop: '40px',
      textAlign: 'center',
      color: '#333',
    fontSize: "16px" ,
    border:'1px solid',
    borderRadius:'10px',
    backgroundColor:"#f0f8ff"
    }}>
      <section>
  <h2>Contact Information</h2>
  <ul >
  <li>
  <p><strong>Phone Number:</strong> +1 9xxxxxxx891</p>
  </li>
  <li >
  <p><strong>Email:</strong> <a href="/careers@qualityservices.com">careers@qualityservices.com</a></p>
  </li>
  <li >
  <p><strong>Address (Headquarters):</strong> USA, California</p>
  </li>
  </ul>
  </section>
</div>


<div>
<h3>Clinic Location</h3>
 <iframe 
 title="Location"
 src= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9031122363234!2d-122.08424968469284!3d37.421999779825746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c6b9f77a5%3A0x6c75c5d7db7db4f6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1618320929187!5m2!1sen!2sus'
 width="55%"
 height="250px"

 style={{
    border:'2px ',
 borderRadius:'12px solid'
 }}
 >
 </iframe>

</div>


<ToastContainer />
 </div>
);
}

export default Contact;
