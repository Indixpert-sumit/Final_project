import { Container, Row, Col, Card, Form, Button, Badge, ProgressBar } from "react-bootstrap";
import './../sass/job.css'
import wishlist from './../assets/wishlist.png'
import forward from './../assets/forward.png'
import clock from './../assets/clock.png'
import wallet from './../assets/wallet.png'
import hiring from './../assets/hiring.png'
import breifcase from './../assets/breifcase.png'
import map from './../assets/map.png'
import regional from './../assets/regional.png'
import internal from './../assets/internal.png'
import district from './../assets/district.png'
import corporate from './../assets/corporate.png'
import forwardlogo from './../assets/forwardlogo.png'





const JobsPage = () => {
  return (
    <Container fluid className="mt-3">
      <Row>

        {/* LEFT SIDEBAR */}
        <Col md={3}>
          <Card className="p-3 mb-3">
            <h6>Keyword or Title</h6>
            <Form.Control placeholder="job title or company" className="mb-3" />

            <h6 >Location</h6>
            <Form.Select >
              <option>Choose city</option>
              <option>New delhi</option>
              <option>bangluru</option>
              <option>Gurgaon</option>
              <option>Noida</option>

            </Form.Select>

            <h6 className="city">Category</h6>
            <div className="category"><Form.Check label="Commerce" />
              <Form.Check label="Telecomunications " />
              <Form.Check label="Hotels & Tourism" />
              <Form.Check label="Education" />
              <Form.Check label="Financial Services" /></div>


            <Button className="show_btn" variant="success"  > Show more </Button>


            <h6 className="jobtype">Job Type</h6>
            <div className="job_type"><Form.Check label="Full Time" />
              <Form.Check label="Part Time" />
              <Form.Check label="Freelance" />
              <Form.Check label="Seasonal" />
              <Form.Check label="Fixed-Price" />
            </div>





            <h6 className="experience_heading">Experience Level</h6>
            <div className="experience">
              <Form.Check label="Full Time" />
              <Form.Check label="Part Time" />
              <Form.Check label="Remote" />
              <Form.Check label="Remote" />


            </div>

            <h6 className="date_posted">Date Posted</h6>
            <div className="date">
              <Form.Check label="Last Hour" />
              <Form.Check label="last 24 Hours" />
              <Form.Check label="Last 7 days" />
              <Form.Check label="Last 30 days" />


            </div>
            <h6 className="date_posted">salary</h6>
                          <ProgressBar now={80} />;
<div className="salary_range">
  Salary: $0 - $9999  <Button  className="salary-btn">Apply</Button>
</div>
<div>
  <h6 className="tags">Tags</h6>
   <Container>
      <Row className="g-2">
        <Col xs="auto">
          <Button className="rounded-pill px-3" variant="light">
            engineering
          </Button>
        </Col>

        <Col xs="auto">
          <Button className="rounded-pill px-3" variant="light">
            design
          </Button>
        </Col>

        <Col xs="auto">
          <Button className="rounded-pill px-3" variant="light">
            ui/ux
          </Button>
        </Col>

        <Col xs="auto">
          <Button className="rounded-pill px-3" variant="light">
            marketing
          </Button>
        </Col>

        <Col xs="auto">
          <Button className="rounded-pill px-3" variant="light">
            management
          </Button>
        </Col>
      </Row>
    </Container>
  
</div>

          </Card>

          {/* WE ARE HIRING BOX */}
         <div className="image-wrapper">
  <img src={hiring}
    alt="hiring-section"
    className="hiring-img"/>

  <div className="image-text">
    <h2>We Are Hiring</h2>
    <p>Apply now</p>
  </div>
</div>
        </Col>

     <Col xs={12} md={9}>
  {/* Top info */}
  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 mb-3">
    <p className="mb-0">Showing 6-6 of 10 results</p>

    <Form.Select size="sm" style={{ width: "160px" }}>
      <option>Sort by latest</option>
      <option>Sort by oldest</option>
    </Form.Select>
  </div>

  {/* JOB CARD */}
  <Row>
    <Col xs={12}>
      <Card className="jobcard p-3">
        
        {/* TOP ROW */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="minutes mb-0">10 min ago</p>
          <img className="wishlist" src={wishlist} alt="wishlist" />
        </div>

        {/* MIDDLE ROW */}
        <div className="d-flex align-items-start mb-3">
          <img
            src={forward}
            alt="company logo"
            height={45}
            className="me-3"
          />

          <div>
            <h5 className="mb-1">Forward Security Director</h5>
            <p className="descriptio_forwrd mb-0">
              Bauch, Schuppe and Schulist Co
            </p>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="d-flex flex-wrap align-items-center gap-3">
          <span className="d-flex align-items-center">
            <img className="me-1" src={breifcase} alt="" height={22} />
            Hotels & Tourism
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={clock} alt="" height={22} />
            Full time
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={wallet} alt="" height={22} />
            $40000-$42000
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={map} alt="" height={22} />
            New York, USA
          </span>

          <Button className="jobdetail ms-sm-auto">
            Job Details
          </Button>
        </div>

      </Card>
    </Col>
  </Row>
   <Row>
    <Col xs={12}>
      <Card className="jobcard p-3">
        
        {/* TOP ROW */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="minutes mb-0">12 min ago</p>
          <img className="wishlist" src={wishlist} alt="wishlist" />
        </div>

        {/* MIDDLE ROW */}
        <div className="d-flex align-items-start mb-3">
          <img
            src={regional}
            alt="company logo"
            height={45}
            className="me-3"
          />

          <div>
            <h5 className="mb-1">Regional Creative Facilitator</h5>
            <p className="descriptio_forwrd mb-0">
             Wisozk - Becker Co </p>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="d-flex flex-wrap align-items-center gap-3">
          <span className="d-flex align-items-center">
            <img className="me-1" src={breifcase} alt="" height={22} />
           Media
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={clock} alt="" height={22} />
            Part time
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={wallet} alt="" height={22} />
           $28000-$32000
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={map} alt="" height={22} />
          Los- Angeles, USA
          </span>

          <Button className="jobdetail ms-sm-auto">
            Job Details
          </Button>
        </div>

      </Card>
    </Col>
  </Row>
   <Row>
    <Col xs={12}>
      <Card className="jobcard p-3">
        
        {/* TOP ROW */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="minutes mb-0">15 min ago</p>
          <img className="wishlist" src={wishlist} alt="wishlist" />
        </div>

        {/* MIDDLE ROW */}
        <div className="d-flex align-items-start mb-3">
          <img
            src={internal}
            alt="company logo"
            height={45}
            className="me-3"
          />

          <div>
            <h5 className="mb-1">Internal Integration Planner</h5>
            <p className="descriptio_forwrd mb-0">
              Mraz, Quigley and Feest Inc.
            </p>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="d-flex flex-wrap align-items-center gap-3">
          <span className="d-flex align-items-center">
            <img className="me-1" src={breifcase} alt="" height={22} />
          Construction
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={clock} alt="" height={22} />
            Full time
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={wallet} alt="" height={22} />
            $48000-$50000
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={map} alt="" height={22} />
          Texas, USA
          </span>

          <Button className="jobdetail ms-sm-auto">
            Job Details
          </Button>
        </div>

      </Card>
    </Col>
  </Row>
   <Row>
    <Col xs={12}>
      <Card className="jobcard p-3">
        
        {/* TOP ROW */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="minutes mb-0">24 min ago</p>
          <img className="wishlist" src={wishlist} alt="wishlist" />
        </div>

        {/* MIDDLE ROW */}
        <div className="d-flex align-items-start mb-3">
          <img
            src={district}
            alt="company logo"
            height={45}
            className="me-3"
          />

          <div>
            <h5 className="mb-1">District Intranet Director</h5>
            <p className="descriptio_forwrd mb-0">
VonRueden - Weber Co         
   </p>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="d-flex flex-wrap align-items-center gap-3">
          <span className="d-flex align-items-center">
            <img className="me-1" src={breifcase} alt="" height={22} />
           Commerce
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={clock} alt="" height={22} />
            Full time
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={wallet} alt="" height={22} />
         $42000-$48000
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={map} alt="" height={22} />
          Florida, USA
          </span>

          <Button className="jobdetail ms-sm-auto">
            Job Details
          </Button>
        </div>

      </Card>
    </Col>
  </Row>
   <Row>
    <Col xs={12}>
      <Card className="jobcard p-3">
        
        {/* TOP ROW */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="minutes mb-0">26min ago</p>
          <img className="wishlist" src={wishlist} alt="wishlist" />
        </div>

        {/* MIDDLE ROW */}
        <div className="d-flex align-items-start mb-3">
          <img
            src={corporate}
            alt="company logo"
            height={45}
            className="me-3"
          />

          <div>
            <h5 className="mb-1">Corporate Tactics Facilitator</h5>
            <p className="descriptio_forwrd mb-0">
      Cormier, Turner and Flatley Inc
            </p>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="d-flex flex-wrap align-items-center gap-3">
          <span className="d-flex align-items-center">
            <img className="me-1" src={breifcase} alt="" height={22} />
          Commerce
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={clock} alt="" height={22} />
            Full time
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={wallet} alt="" height={22} />
           $38000-$40000
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={map} alt="" height={22} />
           Boston, USA
          </span>

          <Button className="jobdetail ms-sm-auto">
            Job Details
          </Button>
        </div>

      </Card>
    </Col>
  </Row>
   <Row>
    <Col xs={12}>
      <Card className="jobcard p-3">
        
        {/* TOP ROW */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="minutes mb-0">10 min ago</p>
          <img className="wishlist" src={wishlist} alt="wishlist" />
        </div>

        {/* MIDDLE ROW */}
        <div className="d-flex align-items-start mb-3">
          <img
            src={forwardlogo}
            alt="company logo"
            height={45}
            className="me-3"
          />

          <div>
            <h5 className="mb-1">Forward Accounts Consultant </h5>
            <p className="descriptio_forwrd mb-0">
             Miller Group
            </p>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="d-flex flex-wrap align-items-center gap-3">
          <span className="d-flex align-items-center">
            <img className="me-1" src={breifcase} alt="" height={22} />
         Financial services
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={clock} alt="" height={22} />
            Full time
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={wallet} alt="" height={22} />
        $45000-$48000
          </span>

          <span className="d-flex align-items-center">
            <img className="me-1" src={map} alt="" height={22} />
         Boston, USA
          </span>

          <Button className="jobdetail ms-sm-auto">
            Job Details
          </Button>
        </div>

      </Card>
    </Col>
  </Row>
</Col>

        
      </Row>
    </Container>
  );
};

export default JobsPage;
