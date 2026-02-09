import { Container, Row, Col, Card, Button, FloatingLabel } from "react-bootstrap";
import './../../sass/jobdetail.css'
import wishlist from './../../assets/wishlist.png'
import district from './../../assets/district.png'
import clock from './../../assets/clock.png'
import wallet from './../../assets/wallet.png'
import map from './../../assets/map.png'
import breifcase from './../../assets/breifcase.png'
import check from './../../assets/check.png'
import facebook from './../../assets/facebook.png'
import x from './../../assets/x.png'
import linkedin from './../../assets/linkedin.png'
import internalcord from './../../assets/internalcord.png'
import person from './../../assets/person.png'
import starbatch from './../../assets/starbatch.png'
import breifcase2 from './../../assets/breifcase2.png'
import degree from './../../assets/degree.png'
import googlemap2 from './../../assets/googlemap2.png'
import { Form } from "react-bootstrap";
import jobbag from './../../assets/jobbag.png'
import corporatelogo from './../../assets/corporatelogo.png'






const Corporate_detail = () => {
  return (
    <section>

      <div className='job_details'>
        <h1>Job details</h1>

      </div>
      <Container>
        <div className="job-top">
          <p className="minutes">24 min ago</p>
          <img className="wishlist" src={wishlist} alt="wishlist" />
        </div>

        <div className="forward">
          <img src={district} alt="company logo" />
          <div>
            <b>District Intranet Director</b>
            <p className="descriptio_forwrd">
              Bauch, Schuppe and Schulist Co
            </p>
          </div>
        </div>

        <div className="job-info">
          <span>
            <img src={breifcase} alt="" height={30} />
            Commerce
          </span>

          <span>
            <img src={clock} alt="" />
            Full time
          </span>

          <span>
            <img src={wallet} alt="" />
            $42000-$48000
          </span>

          <span>
            <img src={map} alt="" />
            Florida, USA
          </span>

          <Button className="job_detail1">Job Details</Button>
        </div>


      </Container>
      <Container className="my-5">
        <Row>
          {/* LEFT SIDE */}
          <Col lg={8} md={12}>
            <div className="job-left">
              <h5 className="fw-bold">Key Responsibilities</h5>
              <p>
                <img src={check} alt="check icon" />
                Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique.
                Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa.
              </p>

              <p>
                <img src={check} alt="check icon" />
                Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in
              </p>
              <p>
                <img src={check} alt="check icon" />
                Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames
              </p>
              <p>
                <img src={check} alt="check icon" />
                Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta
              </p> <p>
                <img src={check} alt="check icon" />
                Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta
              </p> <p>
                <img src={check} alt="check icon" />
                Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta
              </p>
            </div>


            <h5 className="fw-bold">Professional Skills</h5>
            <div className="professional_para">
              <p>
                <img src={check} alt="check icon" />
                Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare.
              </p> <p>
                <img src={check} alt="check icon" />
                Ornare varius faucibus nisi vitae vitae cras ornare              </p>
              <p>
                <img src={check} alt="check icon" />
                Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae              </p> <p>
                <img src={check} alt="check icon" />
                Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae              </p> <p>
                <img src={check} alt="check icon" />
                Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae.
              </p>
            </div>
            <h5 className="fw-bold">Tags:</h5>
            <div>
              <Button className="button_group ">Full time</Button>
              <Button className="button_group">Commerce</Button>
              <Button className="button_group">New - York</Button>
              <Button className="button_group">Corporate</Button>
              <Button className="button_group">Location</Button>

            </div>
            <div className="mt-5">
              <h5>Share Job:   <img src={facebook} alt="facebook_img" /> <img src={x} alt="" /> <img src={linkedin} alt="" /></h5>
            </div>
            <div className="mt-5">
              <h2><b>Realted jobs</b> </h2>
              <p className="mt-3">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
            </div>

            {/* last section */}
            <Container>
              <Card className="last_card">
                <div className="job-top">
                  <p className="minutes">24 min ago</p>
                  <img className="wishlist" src={wishlist} alt="wishlist" />
                </div>

                <div className="forward">
                  <img src={internalcord} alt="company logo" />
                  <div>
                    <b>Internal Creative Coordinator </b>
                    <p className="descriptio_forwrd">
                      Green Group
                    </p>
                  </div>
                </div>

                <div className="job-info">
                  <span>
                    <img src={breifcase} alt="" height={30} />
                    Commerce
                  </span>

                  <span>
                    <img src={clock} alt="" />
                    Full time
                  </span>

                  <span>
                    <img src={wallet} alt="" />
                    $42000-$48000
                  </span>

                  <span>
                    <img src={map} alt="" />
                    New-York, USA
                  </span>

                  <Button className="job_detail1">Job Details</Button>
                </div>
              </Card>

            </Container>

            <Container>
              <Card className="last_card">

                <div className="job-top">
                  <p className="minutes">24 min ago</p>
                  <img className="wishlist" src={wishlist} alt="wishlist" />
                </div>

                <div className="forward">
                  <img src={district} alt="company logo" />
                  <div>
                    <b>District Intranet Director  </b>
                    <p className="descriptio_forwrd">
                      VonRueden - Weber Co
                    </p>
                  </div>
                </div>

                <div className="job-info">
                  <span>
                    <img src={breifcase} alt="" height={30} />
                    Commerce
                  </span>

                  <span>
                    <img src={clock} alt="" />
                    Full time
                  </span>

                  <span>
                    <img src={wallet} alt="" />
                    $42000-$48000
                  </span>

                  <span>
                    <img src={map} alt="" />
                    Florida, USA
                  </span>

                  <Button className="job_detail1">Job Details</Button>
                </div>

              </Card>
            </Container>

            <Container>
              <Card className="last_card">

                <div className="job-top">
                  <p className="minutes">24 min ago</p>
                  <img className="wishlist" src={wishlist} alt="wishlist" />
                </div>

                <div className="forward">
                  <img src={corporatelogo} alt="company logo" />
                  <div>
                    <b>Corporate Tactics Facilitator  </b>
                    <p className="descriptio_forwrd">
                      Cormier, Turner and Flatley Inc
                    </p>
                  </div>
                </div>

                <div className="job-info">
                  <span>
                    <img src={breifcase} alt="" height={30} />
                    Commerce
                  </span>

                  <span>
                    <img src={clock} alt="" />
                    Full time
                  </span>

                  <span>
                    <img src={wallet} alt="" />
                    $38000-$40000          </span>

                  <span>
                    <img src={map} alt="" />
                    Florida, USA
                  </span>

                  <Button className="job_detail1">Job Details</Button>
                </div>

              </Card>

            </Container>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={4} md={12}>
            <Card className="right_card" >
              <Card.Body>
                <h6 className="fw-bold mb-3">Job Overview</h6>

                <div>
                  <img src={person} alt="person image" /><b className="job_title">Job tiile</b>
                  <p className="overveiw_p">Corporate Solutions Executive</p>
                </div>

                <div>
                  <img src={clock} alt="clock image" /><b className="job_title">Job Type</b>
                  <p className="overveiw_p">Full Time</p>
                </div>

                <div>
                  <img src={breifcase2} alt="breifcase" /><b className="job_title">Category</b>
                  <p className="overveiw_p">Commerce</p>
                </div>

                <div>
                  <img src={starbatch} alt="" /><b className="job_title">Experience</b>
                  <p className="overveiw_p">5 Years</p>
                </div>

                <div>
                  <img src={degree} alt="" /><b className="job_title">Degree</b>
                  <p className="overveiw_p">Master</p>
                </div>

                <div>
                  <img src={wallet} alt="" /><b className="job_title">Offered Salary</b>
                  <p className="overveiw_p">$40000-$42000</p>
                </div>
                <div>
                  <img src={wallet} alt="" /><b className="job_title">location</b>
                  <p className="overveiw_p">New-York, USA</p>
                </div>
              </Card.Body>
              <img src={googlemap2} alt="" />
            </Card>
            {/* right 2nd box */}
            <Card className="right_card">
              <h5><b>Send Us Message</b></h5>
              <Form className="mt-3">
                <Form.Control type="Full name" placeholder="Full name" />
                <Form.Control className="mt-3" type="Email" placeholder="Email" />
                <Form.Control className="mt-3" type="Full name" placeholder="Phone no" />
                <Form.Control className="mt-3" as="textarea" rows={4} placeholder="Description" />

              </Form>
              <Button className="send_message" >
                Send message
              </Button>
            </Card>

          </Col>

        </Row>

      </Container>
      {/* Footere */}
      <footer className="footer">
        <div className="footer-container">

          {/* Column 1 */}
          <div className="footer-col">
            <h3 className="footer-logo"><img src={jobbag} alt="" /> Job</h3>
            <p>
              Quis enim pellentesque viverra tellus eget malesuada facilisis.
              Congue nibh vivamus aliquet nunc mauris.
            </p>
          </div>

          {/* Column 2 */}
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

          {/* Column 3 */}
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

          {/* Column 4 */}
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Eu nunc pretium vitae platea. Non netus elementum vulputate.</p>
            <div className="newsletter">
              <input type="email" placeholder="Email Address" />
              <button>Subscribe now</button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
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

export default Corporate_detail
