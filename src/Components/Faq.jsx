import { useState } from "react";


const Faq=()=>{

    const[info,Setinfo]=useState(null);

    const faqs=[
     {
        question: "Do you accept dental insurance? " ,
        answer: "Yes, we accept most major dental insurance plans. Please contact our office to confirm your provider. "
     },
     {
         question: "Is teeth whitening safe? " ,
        answer: "Yes, professional teeth whitening is safe and effective when performed under a dentist’s supervision. "

     }
    ]

  const show=(data)=>{
        Setinfo(info===data?null:data);                           //means showing info==data then opens else in close state.
  }


    return (
        <div className="text-center" style={{
             paddingLeft:'40%'
        }}>
     <div style={{
         border:'2px solid',
         borderRadius:'1px',
         width:'60%',
         paddingLeft:'',
             backgroundColor:'#f9f9f9'
     }}>
<h3 >Frequently Asked Questions</h3>
{
    faqs.map((Object,index)=>(
    <div key={index} onClick={()=>show(index)} style={{cursor:'pointer'}}> 
           <strong>{Object.question}</strong>
           {
             index===info && <p style={{marginTop:'10px'}}>{Object.answer} </p>
           }
    </div> 
    )
)
}
</div>
</div>
    );
}

export default Faq;
