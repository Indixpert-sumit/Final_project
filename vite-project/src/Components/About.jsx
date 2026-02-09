import { Accordion, Button, Card, Col, Container, Navbar, Row } from 'react-bootstrap'
import './../sass/About.css'
import aboutdefaul from './../assets/aboutdefaul.png'
import userimg from './../assets/userimg.png'
import cv from './../assets/cv.png'
import breifcase from './../assets/breifcase.png'
import done from './../assets/done.png'
import aboutvideo from './../assets/aboutvideo.png'
import aboutlast1 from './../assets/aboutlast1.png'
import aboutlast2 from './../assets/aboutlast2.png'
import crown from './../assets/crown.png'
import resume from './../assets/resume.png'
import top from './../assets/top.png'
import first from './../assets/first.png'
import news1 from './../assets/news1.png'
import jobbag from './../assets/jobbag.png'

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
          <Card style={{ width: '15rem', height: "15rem" }}>
            <Card.Img />
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
          <Card style={{ width: '15rem', height: "15rem" }}>
            <Card.Img />
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
          <Card style={{ width: '15rem', height: "15rem" }}>
            <Card.Img />
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
          <Card style={{ width: '15rem', height: "15rem" }}>
            <Card.Img />
            <img className='user-img' src={done} alt="user image" />
            <Card.Body>
              <Card.Title> <b>Apply Job</b></Card.Title>
              <Card.Text>
                Nisi enim feugiat enim volutpat. Sem quis viverra         </Card.Text>
            </Card.Body>
          </Card>

        </div>

      </section>

      <section>
        <div
          className="hero-section"
          style={{ backgroundImage: `url(${aboutvideo})` }}
        >
          <Container className='insidetext' >
            <Button
              className="playbtn rounded-circle"
              style={{ backgroundColor: "#2fb7a3", border: "none" }}>▶
            </Button>



            <h1 className="hero-title">
              Good Life Begins With <br /> A Good Company
            </h1>
          </Container>

          <Container fluid className="feature-bar">
            <Row className="text-white">
              <Col md={4} className="feature-item">
                <span className="feature-number">1</span>
                <p>Elit gravida lorem amet porta br risus vitae at</p>
                <a className='learnmore' href="#">Learn more</a>
              </Col>

              <Col md={4} className="feature-item">
                <span className="feature-number">2</span>
                <p>Volutpat dui lacus mattis urna platea...</p>
                <a className='learnmore' href="#">Learn more</a>
              </Col>

              <Col md={4} className="feature-item">
                <span className="feature-number">3</span>
                <p>Elementum faucibus netus gravida lacus lorem</p>
                <a className='learnmore' href="#">Learn more</a>
              </Col>
            </Row>
          </Container>
        </div>

      </section>
      <section>
        <div className='question'> <h1><b>Frequently Asked Questions</b></h1>
        <p>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
        </div>
<div className='icon'>
  <Accordion defaultActiveKey={null} className="custom-accordion">
  <Accordion.Item eventKey="0">
    <Accordion.Header>
      <b>      01 Can i upload CV?
</b>
    </Accordion.Header>
    <Accordion.Body>
Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc     </Accordion.Body>
  </Accordion.Item>
</Accordion>

    {/* accordion 2 */}
     <Accordion defaultActiveKey={null} className="custom-accordion">
  <Accordion.Item eventKey="0">
    <Accordion.Header>
      <b>      02 How long will the recruitment process take?
</b>
    </Accordion.Header>
    <Accordion.Body>
Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc     </Accordion.Body>
  </Accordion.Item>
</Accordion>
{/* accordion3 */}
 <Accordion defaultActiveKey={null}className="custom-accordion">
  <Accordion.Item eventKey="0">
    <Accordion.Header>
      <b>      03 Do you recruit for Graduates, Apprentices and Students?
</b>
    </Accordion.Header>
    <Accordion.Body>
Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc     </Accordion.Body>
  </Accordion.Item>
</Accordion>
{/* accordion4 */}
 <Accordion defaultActiveKey={null} className="custom-accordion">
  <Accordion.Item eventKey="0">
    <Accordion.Header>
      <b>      04 What does the recruitment and selection process involve?
</b>
    </Accordion.Header>
    <Accordion.Body>
Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc     </Accordion.Body>
  </Accordion.Item>
</Accordion>
{/* 5 */}
 <Accordion defaultActiveKey={null} className="custom-accordion">
  <Accordion.Item eventKey="0">
    <Accordion.Header>
      <b>      05 Can I receive notifications for any future jobs that may interest me?
</b>
    </Accordion.Header>
    <Accordion.Body>
Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc     </Accordion.Body>
  </Accordion.Item>
</Accordion>
</div>
        
      </section>

    <section className="image-section">
  <Container>
    <Row>
      <Col md={6}>
        <div className="image-grid">
          <img src={aboutlast1} alt="" className="img-large" />
          <img src={aboutlast2} alt="" className="img-top" />
          <img src={aboutlast2} alt="" className="img-bottom" />
        </div>
        
      </Col>
      <Col md={6} className="right-content">
  <h2 className="main-title">
    We’re Only Working <br /> With The Best
  </h2>

  <p className="desc">
    Ultricies purus dolor viverra mi laoreet at cursus justo.
    Ultricies purus diam egestas amet faucibus tempor blandit.
  </p>

  <Row className="icon-grid">
    <Col sm={6} className="icon-item">
      <span ><img src={crown} alt="crown" /></span>
      <span>Quality Job</span>
    </Col>

    <Col sm={6} className="icon-item">
      <span ><img src={resume} alt="resume" /></span>
      <span>Resume builder</span>
    </Col>

    <Col sm={6} className="icon-item">
      <span ><img src={top} alt="top company batch" /></span>
      <span>Top Companies</span>
    </Col>

    <Col sm={6} className="icon-item">
      <span > <img src={first} alt="" /></span>
      <span>Top Talents</span>
    </Col>
  </Row>
</Col>

    </Row>
    
  </Container>
</section>
  <section>
          <div className='blog-section'>
            <h1><b>News and Blog</b></h1>
            <p className='blog-para'> Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor</p>
            <div>
              <a href="#" className='veiw_all'>veiw all </a>
            </div>

          </div>
          <div >

            <img src={news1} alt="news_image" className="news_" />

            <img src={news1} alt="news_image" className="news_2" />

          </div> 
          <div className='blog-date'>
            30 March 2024 <b className='date-2'>30 March 2024</b>
          </div>
          <div className='blog-content'> <b>Revitalizing Workplace Morale: Innovative Tactics for  <br />Boosting Employee Engagement in 2024</b> <b className='blog-descrpition'>How to avoid the top six most common job interview mistakes</b>  </div>
          <div ><a href="#" className='readmore1'> Read more  </a><a href="" className='readmore2'> Read more </a></div>
        </section>
       <footer className="footer">
                 <div className="footer-container">
       
                   <div className="footer-col">
                     <h3 className="footer-logo"><img src={jobbag} alt="" /> Job</h3>
                     <p>
                       Quis enim pellentesque viverra tellus eget malesuada facilisis.
                       Congue nibh vivamus aliquet nunc mauris.
                     </p>
                   </div>
       
                   <div className="footer-col">
                     <h4>Company</h4>
                     <ul>
                       <li>About Us</li>
                       <li>Our Team</li>
                       <li>Partners</li>
                       <li>For Candidates</li>
                       <li>For Employers</li>
                     </ul>
                   </div>
       
                   <div className="footer-col">
                     <h4>Job Categories</h4>
                     <ul>
                       <li>Telecommunications</li>
                       <li>Hotels & Tourism</li>
                       <li>Construction</li>
                       <li>Education</li>
                       <li>Financial Services</li>
                     </ul>
                   </div>
       
                   <div className="footer-col">
                     <h4>Newsletter</h4>
                     <p>Eu nunc pretium vitae platea. Non netus elementum vulputate.</p>
                     <div className="newsletter">
                       <input type="email" placeholder="Email Address" />
                       <button>Subscribe now</button>
                     </div>
                   </div>
       
                 </div>
       
                 <div className="footer-bottom">
                   <p>© Copyright Job Portal 2024. Designed by Figma.guru</p>
                   <div className="footer-links">
                     <span>Privacy Policy</span>
                     <span>Terms & Conditions</span>
                   </div>
                 </div>
               </footer>

    </section>

  )
}

export default About
