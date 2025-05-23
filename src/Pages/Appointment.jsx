
import {Form,FormGroup,Label} from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify';
import React,{ useState } from 'react';
import axios from 'axios';


const Appointment=()=>{

    const[user,SetUser]=useState({                        //this is the mock data 
        name:'Sam ',  
        mobile_no: 9123847399,
        email:'sam@123',
        message: ' '
    })


    const show=(a)=>{                                      //this function is to update the state of the respective fields.
        SetUser({
          ...user,
       [a.target.id]:a.target.value
        })
    }

    const handle=(data)=>{
        data.preventDefault();

        axios.post('/appoint',user).then((response)=>{
    console.log(user);
     toast.success("Booked Successfull",{
                position: 'top-center',
                autoClose: 3000
             })
          reset();
        }).catch((error)=>{
 toast.error("Booked Failed 404",{                      //we get this message because their is no backend api call so 404 not found error
                position: 'top-center',
                autoClose: 3000
             })
         reset();
        })

    }
 
    const reset=()=>{             //by using this constant reset we are resetting the form to the blank.
        SetUser({
            name: '',
            mobile_no: '',
          email: '',
          message:''
        })
    }


return(


  <div style={{
     marginTop:'10%'
  }}>
  <div style={{
       paddingLeft:'15%',
       height:'70%'
  }}>
<Form onSubmit={handle}   style={{
      textAlign:'center',
      border:'2px solid black',
      borderRadius:'10px',
      width:'80%',
       backgroundColor:'#e8fdf5',
      marginTop:'10px'
      
  }} >
       <FormGroup style={{
        marginTop:'20px'
       }}>
    <Label htmlFor="name" ><strong>Name:</strong></Label> 
    <input type='text' placeholder='Enter the name ' id="name" value={user.name} onChange={show} />
     </FormGroup>
     
     <FormGroup>
     <Label htmlFor="number"><strong>Mobile:</strong></Label>
       <input type='number' placeholder='Enter the mobile number ' id="number"  value={user.mobile_no} onChange={show} />
     </FormGroup>

     <FormGroup>
     <Label htmlFor="mail" ><strong>E-mail:</strong></Label>
       <input type='email' placeholder='Enter the email ' id="mail" value={user.email}  onChange={show} />
     </FormGroup>

     <FormGroup>
     <Label htmlFor="message" ><strong>Message:</strong></Label><br />
      <textarea  id="message" placeholder="Enter the Message"  style={{textAlign: 'center', width: '50%', height: '100px', padding: '20px' }}  onChange={show} />
</FormGroup>
<button type="submit" className='btn btn-primary' outline>Book </button>
 <p style={{fontStyle:'italic'}}><strong>Book Appointment and get the solution for your problem with in minutes</strong></p>
<ToastContainer/>
</Form>

</div>
</div>

);
}
export default Appointment;
