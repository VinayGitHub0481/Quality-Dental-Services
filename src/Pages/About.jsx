import teeth from '../images/teeth.png'

const about=()=>{

    return (
      <div style={{
          backgroundColor:'#e8fdf5',
          maxWidth: '1000px',
            marginTop:'10px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      }}>
<div style={{
      margin: '2rem auto',
      padding: '2rem'
     
    }}>
 <p >
    <h2>
  <img src={teeth} alt='logo'  style={{
     width:'150px',
     height:'150px',
    // marginRight:'50%',

  }}/> About us </h2>
  <p>
At our <strong>Quality Dental Service </strong>, we are committed to delivering compassionate, high-quality dental care in a comfortable and welcoming environment. 

Established in 2000, our clinic has grown to become a trusted provider of family and cosmetic dentistry, serving  world-wide community with integrity 
and excellence. 
Our modern facility is equipped with the latest dental technology, allowing us to offer a wide range of services — from routine cleanings and exams 
to advanced procedures such as root canals, dental implants, and orthodontics.</p>We believe in preventive care and patient education, helping you 
maintain a healthy smile for life.

Our experienced team of dentists, hygienists, and support staff are passionate about making your visit stress-free and personalized.
 Whether you're visiting for a regular check-up or a complete smile makeover, we strive to provide treatment tailored to your needs and goals.

We proudly serve patients of all ages and accept most major insurance plans. For those without insurance, we offer flexible payment plans to 
ensure access to quality dental care for everyone.

<ul>
    <br />
    <h3><strong>Our Mission </strong></h3>
    <li>
<blockquote style={{ fontStyle: 'italic' }} >
To provide exceptional dental care in a warm and supportive environment, using modern technology and a patient-first approach.
</ blockquote>
   </li>

   <h3><strong>Our Vision </strong></h3>
    <li>
        <blockquote style={{ fontStyle: 'italic' }} >
To be the leading dental clinic in India, known for innovation, integrity, and outstanding patient satisfaction.
</blockquote>
</li>

</ul>

<h5><strong>Core Values </strong></h5>
<ul >
<li>✔ Compassion </li>
<li>✔ Excellence </li>
<li>✔ Transparency </li>
<li>✔ Innovation  </li>
<li>✔ Community  </li>
</ul>
 </p>

      <h2 style={{ textAlign: 'center' }}>Dr.Smith, DDS</h2>
      <p style={{ textAlign: 'center', fontStyle: 'italic'}}>
        Chief Dental Surgeon - Cosmetic & Family Dentistry Specialist<br />
        15 Years of Experience
      </p>

      <section style={{ marginTop: '1.5rem' }}>
        <h3>About Dr. Smith</h3>
        <p>
          Dr. Jane Smith is a highly skilled and compassionate dental professional dedicated to delivering outstanding oral health care.
          With over 15 years of clinical experience, she specializes in preventive, restorative, and cosmetic dentistry.
        </p>
        <p>
          Renowned for her patient-first philosophy, Dr. Smith believes that dental care should not only improve smiles but also enhance overall well-being and confidence.
          Her calm demeanor and clear communication help patients of all ages feel at ease.
        </p>
      </section>

      <section style={{ marginTop: '1.5rem' }}>
        <h3>Education & Credentials</h3>
        <ul>
          <li>Doctor of Dental Surgery (DDS) – University of California, San Francisco</li>
          <li>Certified in Cosmetic Dentistry & Advanced Restorative Techniques</li>
          <li>Ongoing training in Invisalign, Implantology, and Digital Dentistry</li>
        </ul>
      </section>

      <section style={{ marginTop: '1.5rem' }}>
        <h3>Areas of Expertise</h3>
        <ul>
          <li>Preventive & Family Dentistry</li>
          <li>Smile Design & Teeth Whitening</li>
          <li>Root Canal Therapy</li>
          <li>Dental Crowns, Veneers & Bridges</li>
          <li>Clear Aligners (Invisalign)</li>
          <li>Implants & Minor Oral Surgeries</li>
        </ul>
      </section>

      <section style={{ marginTop: '1.5rem' }}>
        <h3>Patient Philosophy</h3>
        <blockquote style={{ fontStyle: 'italic', borderLeft: '4px solid #ccc', paddingLeft: '1rem' }}>
          “My mission is to provide exceptional dental care in a way that is comfortable, informative, and tailored to each individual’s needs.”
        </blockquote>
      </section>

      <section style={{ marginTop: '1.5rem' }}>
        <h3>Languages Spoken</h3>
        <p>English, Spanish</p>
      </section>

      <section style={{ marginTop: '1.5rem' }}>
        <h3>Outside the Clinic</h3>
        <p>
          When not in the clinic, Dr. Smith enjoys hiking, reading, and volunteering in community dental outreach programs.
        </p>
      </section>
 
    
        <section style={{marginTop:'1.5rem'}}>                        
            <p><strong>To provide high-quality, affordable dental care in a safe, welcoming environment, helping patients
                 achieve lifelong oral health. </strong></p>
        </section>                                                   
     
</div>
 </div>
);
}

export default about;