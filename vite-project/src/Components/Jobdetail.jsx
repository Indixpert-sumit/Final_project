import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './../sass/jobdetail.css'
import wishlist from './../assets/wishlist.png'
import district from './../assets/district.png'
import clock from './../assets/clock.png'
import wallet from './../assets/wallet.png'
import map from './../assets/map.png'
import breifcase from './../assets/breifcase.png'
import check from './../assets/check.png'
import facebook from './../assets/facebook.png'
import x from './../assets/x.png'
import linkedin from './../assets/linkedin.png'
import internalcord from './../assets/internalcord.png'
import corporate from './../assets/corporate.png'
import person from './../assets/person.png'



const Jobdetail = () => {
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
              <Button className="button_group">Full time</Button>
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
                  <img src={corporate} alt="company logo" />
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
            <Card >
              <Card.Body>
                <h6 className="fw-bold mb-3">Job Overview</h6>

                <div>
                   <img src={person} alt="" className="job_title"/><b>Job tiile</b> 
                  <p>Corporate Solutions Executive</p>
                </div>

                <div>
                   <img src={person} alt="" className="job_title"/><b>Job tiile</b> 
                  <p>Corporate Solutions Executive</p>
                </div>

                <div>
                   <img src={person} alt="" className="job_title"/><b>Job tiile</b> 
                  <p>Corporate Solutions Executive</p>
                </div>

                 <div>
                   <img src={person} alt="" className="job_title"/><b>Job tiile</b> 
                  <p>Corporate Solutions Executive</p>
                </div>

                <div>
                   <img src={person} alt="" className="job_title"/><b>Job tiile</b> 
                  <p>Corporate Solutions Executive</p>
                </div>

                 <div>
                   <img src={person} alt="" className="job_title"/><b>Job tiile</b> 
                  <p>Corporate Solutions Executive</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


    </section>
  )
}

export default Jobdetail
