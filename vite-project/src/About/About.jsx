import { Button, Card, Navbar } from 'react-bootstrap'
import './../About/About.css'
import aboutdefaul from './../assets/aboutdefaul.png'
import userimg from './../assets/userimg.png'
import cv from './../assets/cv.png'
import breifcase from './../assets/breifcase.png'
import done from './../assets/done.png'

const About = () => {
  return (
   <section>
    <div className='about-top'>
<div className='about-text' >
  <h1><b>About Us</b></h1>
</div>
    </div>
<section>
  <div className="heading-row">
    <h1><b>Et nunc ut tempus duis nisl sed <br /> massa</b></h1>

    <span className="right-text">
      Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue <br />non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor  <br />risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim <br />feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc. 
    </span>
  </div>
</section>


<section className='about-img'>
  <img src={aboutdefaul} alt="" />
</section>

<section className='how-works'>
  <h1><b>How it works</b></h1>
  <p className='works-paragraph'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum  <br />id scelerisque rhoncus</p>
</section>
<section className='cards'>

  <div className='card-1'>
    <Card style={{ width: '15rem',height:"15rem" }}>
      <Card.Img/>
      <img className='user-img' src={userimg} alt="user image" />
      <Card.Body>
        <Card.Title> <b>Create Account</b></Card.Title>
        <Card.Text>
    Nunc sed a nisl purus. Nibh dis faucibus proin lacus 
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
   

   <div className='card-2'>
 {/* card-2 */}
      <Card style={{ width: '15rem',height:"15rem" }}>
      <Card.Img  />
      <img className='user-img' src={cv} alt="user image" />
      <Card.Body>
        <Card.Title> <b>Upload Resume</b></Card.Title>
        <Card.Text>
Felis eu ultrices a sed massa. Commodo fringilla sed tempor         </Card.Text>
      </Card.Body>
    </Card>
   </div>
   <div className='card-3'>
{/* card-3 */}
       <Card style={{ width: '15rem',height:"15rem"}}>
      <Card.Img  />
      <img className='user-img' src={breifcase} alt="user image" />
      <Card.Body>
        <Card.Title> <b>Find Jobs</b></Card.Title>
        <Card.Text>
 Commodo fringilla sed tempor risus laoreet ultricies ipsum        </Card.Text>
      </Card.Body>
    </Card>
   </div>
   
    <div className='card-4'>
{/* card-4 */}
       <Card style={{ width: '15rem',height:"15rem" }}>
      <Card.Img  />
      <img className='user-img' src={done} alt="user image" />
      <Card.Body>
        <Card.Title> <b>Apply Job</b></Card.Title>
        <Card.Text>
 Nisi enim feugiat enim volutpat. Sem quis viverra         </Card.Text>
      </Card.Body>
    </Card>
    
    </div>
    
</section>


   </section>

  )
}

export default About
