
//  Services Page:- List at least 6 dental services
//  - For each service, show title, image/icon, and a short description
//  - Optional: Service details expandable using modal or accordion (bonus)
import { useState } from 'react'
import Cleanings from '../images/Cleanings.jpg'
import Crowns from '../images/Crowns.jpg'
import Fillings1 from '../images/Fillings1.webp'
import Root_Canal_1 from '../images/Root_Canal_1.webp'
import Tooth_Extraction_1 from '../images/Tooth_Extraction_1.png'
import whitening from '../images/whitening.png'

const Services=()=>{

const[index,Setindex]=useState(0);               //through the function we are setting the state of index.

const show=(data)=>{
  Setindex(index===data?null:data);      //means if index equals to data then it is in expanded state and if not equals then in closed state. 
}


const services=[
  {
   title:"Cleanings",
   about:"Routine cleanings remove plaque, tartar, and stains from teeth to prevent cavities and gum disease.",
   description:"Dental cleanings help prevent gum disease, cavities, and bad breath, and they support overall oral health. The process typically involves scaling (removing hardened deposits above and below the gum line), polishing (smoothing the tooth surface), and sometimes fluoride treatment to strengthen the enamel..",
   image: Cleanings
  },
  {
   title:"Crowns",
   about:"Crowns cap damaged teeth, while bridges replace one or more missing teeth using adjacent teeth for support.",
   description: "The procedure typically involves two visits: one for preparing the tooth and taking impressions, and another for fitting the permanent crown. Crowns can last many years with good oral hygiene and regular dental check-ups.",
      image: Crowns
  },
  {
 title:"Filling Gaps",
   about:" Used to restore teeth damaged by decay. Materials include composite resin, amalgam, gold, or porcelain.",
   description: " For larger gaps or missing teeth, dental bridges or implants can be used to restore both function and appearance. In cases involving alignment issues, orthodontic treatments like braces or clear aligners may be necessary. The choice of treatment depends on the individual patient’s dental condition, needs, and goals.",
      image: Fillings1
  },
  {
 title:"Root Canals",
   about:"Removes infected or damaged pulp from inside the tooth, preventing extraction and relieving pain.",
   description: "The procedure involves removing the infected pulp, cleaning and disinfecting the inside of the tooth, and then filling and sealing it. In most cases, a crown is placed afterward to restore the tooth’s strength and function. Root canals are highly effective and help preserve the natural tooth, preventing the need for extraction. With modern techniques and anesthesia, the procedure is usually painless and has a high success rate.",
      image: Root_Canal_1
  },
  {
 title:"Tooth Extraction",
   about:"Removal of teeth that are severely decayed, damaged, or impacted (such as wisdom teeth.",
   description: "Common reasons for extraction include advanced tooth decay, gum disease, broken teeth that cannot be repaired, overcrowding (especially before orthodontic treatment), or impacted wisdom teeth. The procedure can be simple or surgical, depending on the tooth’s condition and position. Local anesthesia is usually used to ensure the patient feels little to no pain during the extraction. ",
   image: Tooth_Extraction_1
  },
  {
 title:"Whitening of teeth",
   about:"Cosmetic procedure to lighten discolored or stained teeth, offered in-office or as take-home kits.",
   description: " There are also at-home whitening options like custom-fitted trays, whitening strips, and toothpaste. Common causes of tooth discoloration include consumption of coffee, tea, red wine, smoking, aging, and certain medications. While teeth whitening is generally safe when done properly, it may cause temporary tooth sensitivity or gum irritation. Results vary depending on the individual’s dental condition and lifestyle habits.",
   image: whitening
  }
]

    return (
     <div style={{textAlign:'center', marginTop:'2rem',borderRadius:'1.5px ',border:'1px solid',marginBottom:'5px',backgroundColor:'whitesmoke'}}>
      <h1>Dental Services</h1>
   {
    services.map((serve,id)=>{    
      return (         //validating the services  
       <div key={id} > 
       <div style={{fontWeight:'bold',fontSize:'1.5rem',marginTop:'5px'}}> 
          {serve.title}    
          <div>      
           <img src={serve.image} alt={serve.title} style={{width:'400px',height:'200px',borderRadius:'5px',border:'2px solid',marginBottom:'15px'}}/>
           </div>

           <div onClick={()=>show(id)} style={{cursor:'pointer', marginTop:'5px',fontStyle:'italic',fontSize:'1rem'}} > 
              {serve.about}
           </div>
       </div>             
       {
        index===id &&(<div style={{marginTop:'5px', fontStyle:'italic'}} >       
          {serve.description}           
          </div>
        )
       }      
       </div>     
                                                       //when the  show function clicked based on the id the title will be shown 
      )
    }) }
  </div>
)
  }

export default Services;






















{/* 
        <section>
   <h2 style={{fontStyle:'italic',marginTop:'1.5rem'}}> Dental Cleanings (Prophylaxis) </h2>
   <img src={Cleanings} alt="Dental Cleanings"  style={{width:'300px', height: '200px',borderRadius:'1-px',border:'3px solid'}}/>
  <p style={{fontStyle:'italic'}}>
  </p>
  </section>

   <section>
   <h2 style={{fontStyle:'italic',marginTop:'1.5rem'}}>Fillings </h2>
    <img src={Fillings1} alt="Fillings"  style={{width:'300px', height: '200px',borderRadius:'1-px',border:'3px solid'}} />
  <p style={{fontStyle:'italic'}}> <strong></strong></p>
  </section>

   <section>
   <h2 style={{fontStyle:'italic' ,marginTop:'1.5rem'}}>Root Canal Treatment </h2>
    <img src={Root_Canal_1}  alt="Root Canal Treatment" style={{width:'300px', height: '200px',borderRadius:'1-px',border:'3px solid'} }/>
  <p style={{fontStyle:'italic'}}>  <strong></strong></p>
  </section>

   <section>
   <h2 style={{fontStyle:'italic' ,marginTop:'1.5rem'}}> Tooth Extractions </h2>
    <img src={Tooth_Extraction_1} alt="Tooth Extractions" style={{width:'300px', height: '200px',borderRadius:'1-px',border:'3px solid'} } />
  <p style={{fontStyle:'italic'}}>  <strong> </strong></p>
  </section>

   <section>
   <h2 style={{fontStyle:'italic' ,marginTop:'1.5rem'}}>  Teeth Whitening </h2>
    <img src={whitening} alt="Teeth Whitening"  style={{width:'300px', height: '200px',borderRadius:'1-px',border:'3px solid'} }/>
  <p style={{fontStyle:'italic'}}> <strong> .</strong></p>
  </section>

   <section>
   <h2 style={{fontStyle:'italic' ,marginTop:'1.5rem'}}> Crowns and Bridges</h2>
    <img src={Crowns} alt="Crowns and Bridges" style={{width:'300px', height: '200px',borderRadius:'1-px',border:'3px solid'} }/>
  <p style={{fontStyle:'italic'}}> <strong> </strong></p>
  </section> */}
