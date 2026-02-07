import './../sass/Header.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Headerimg from './../assets/Header.png'
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Col, Container, Row } from 'react-bootstrap';
import breifcase from './../assets/breifcase.png'
import collabeicon from './../assets/collabeicon.png'
import officeimg from './../assets/officeimg.png'
import spotify from './../assets/spotify.png'
import slack from './../assets/slack.png'
import adobe from './../assets/adobe.png'
import asana from './../assets/asana.png'
import linear from './../assets/linear.png'
import wishlist from './../assets/wishlist.png'
import forward from './../assets/forward.png'
import clock from './../assets/clock.png'
import wallet from './../assets/wallet.png'
import map from './../assets/map.png'
import regional from './../assets/regional.png'
import internal from './../assets/internal.png'
import district from './../assets/district.png'
import agriculture from './../assets/agriculture.png'
import metal from './../assets/metal.png'
import shoppingbag from './../assets/shoppingbag.png'
import constructor from './../assets/constructor.png'
import hotelimg from './../assets/hotelimg.png'
import education from './../assets/education.png'
import finance from './../assets/finance.png'
import transport from './../assets/transport.png'
import defaultimg from './../assets/defaultimg.png'
import banner from './../assets/banner.png'
import news1 from './../assets/news1.png'
import profile1 from './../assets/profile1.png'
import quotes from './../assets/quotes.png'
import jobbag from './../assets/jobbag.png'






const Header = () => {
  return (


    <div className="headerimg"

      style={{ backgroundImage: `url(${Headerimg})` }}>
      <h1 className='dreamjob'>Find Your Dream Job Today!</h1>
      <p className='description'>Connecting Talent with Opportunity: Your Gateway to Career Success</p>

      <ListGroup className='listgroup_' horizontal>
        <ListGroup.Item>Job Title or Company</ListGroup.Item>
        <ListGroup.Item>Select Location</ListGroup.Item>
        <ListGroup.Item>Select Category</ListGroup.Item>
        <Button variant="success" className="search-job">
          Search Job
        </Button>
      </ListGroup>
      <section className="stats">
        <div className="stat-card">
          <img src={breifcase} alt="Jobs" />
          <b>25,850</b>
          <div>Jobs</div>
        </div>
        <div className="stat-card">
          <img src={collabeicon} alt="Candidates" />
          <b>10,250</b>
          <div>Candidates</div>
        </div>
        <div className="stat-card">
          <img src={officeimg} alt="Companies" />
          <b>18,400</b>
          <div>Companies</div>
        </div>
      </section>

      <div>
        <div className='own_container'>
          <img src={spotify} alt="spotify" className="spotify" />
          <img src={slack} alt="slack" className="slack" />
          <img src={adobe} alt="adobe" className="adobe" />
          <img src={asana} alt="asana" className="asana" />
          <img src={linear} alt="linear" className="linear" />



        </div>
      </div>
      <div>
        <h1 className='aviable'> <b>Recent Jobs Aviable</b></h1>

        <p className='paragraph'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquetc <span className='veiw'> <b>Veiw aLL</b></span></p>
        <div className="job-card">

          <div className="job-top">
            <p className="minutes">10 min ago</p>
            <img className="wishlist" src={wishlist} alt="wishlist" />
          </div>

          <div className="forward">
            <img src={forward} alt="company logo" />
            <div>
              <b>Forward Security Director</b>
              <p className="descriptio_forwrd">
                Bauch, Schuppe and Schulist Co
              </p>
            </div>
          </div>

          <div className="job-info">
            <span>
              <img src={breifcase} alt="" height={30} />
              Hotels & Tourism
            </span>

            <span>
              <img src={clock} alt="" />
              Full time
            </span>

            <span>
              <img src={wallet} alt="" />
              $40000-$42000
            </span>

            <span>
              <img src={map} alt="" />
              New York, USA
            </span>

            <Button className="job_detail1">Job Details</Button>
          </div>

        </div>



        <div className="job-top">
          <p className="minutes">12 min ago</p>
          <img className="wishlist" src={wishlist} alt="wishlist" />
        </div>

        <div className="forward">
          <img src={regional} alt="company logo" />
          <div>
            <b>Regional Creative Facilitator  </b>
            <p className="descriptio_forwrd">
              Wisozk - Becker Co
            </p>
          </div>
        </div>

        <div className="job-info">
          <span>
            <img src={breifcase} alt="" height={30} />
            Media
          </span>

          <span>
            <img src={clock} alt="" />
            Part time
          </span>

          <span>
            <img src={wallet} alt="" />
            $28000-$32000
          </span>

          <span>
            <img src={map} alt="" />
            Los- Angeles, USA    </span>

          <Button className="job_detail1">Job Details</Button>
        </div>


        <div className="job-top">
          <p className="minutes">15 min ago</p>
          <img className="wishlist" src={wishlist} alt="wishlist" />
        </div>

        <div className="forward">
          <img src={internal} alt="company logo" />
          <div>
            <b>Internal Integration Planner  </b>
            <p className="descriptio_forwrd">
              Mraz, Quigley and Feest Inc.
            </p>
          </div>
        </div>

        <div className="job-info">
          <span>
            <img src={breifcase} alt="" height={30} />
            Construction
          </span>

          <span>
            <img src={clock} alt="" />
            Full time
          </span>

          <span>
            <img src={wallet} alt="" />
            $28000-$32000
          </span>

          <span>
            <img src={map} alt="" />
            Los- Angeles, USA
          </span>

          <Button className="job_detail1">Job Details</Button>
        </div>

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
        <div className="job-top">
          <p className="minutes">26 min ago</p>
          <img className="wishlist" src={wishlist} alt="wishlist" />
        </div>

        <div className="forward">
          <img src={district} alt="company logo" />
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
            $38000-$40000
          </span>

          <span>
            <img src={map} alt="" />
            Boston, USA
          </span>

          <Button className="job_detail1">Job Details</Button>
        </div>


        <div className='hero_section2'>
          <h1 className='hero-section_heading'>Browse by Category</h1>
          <p className='hero_section_paragraph'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque</p>

          <section class="categories">
            <div class="card">
              <div><img src={agriculture} alt="agriculture" /></div>
              <h3>Agriculture</h3>
              <span>1254 jobs</span>
            </div>

            <div class="card">
              <div ><img src={metal} alt="metal" /></div>
              <h3>Metal Production</h3>
              <span>816 jobs</span>
            </div>

            <div class="card">
              <div><img src={shoppingbag} alt="shoppingbag" /></div>
              <h3>Commerce</h3>
              <span>2082 jobs</span>
            </div>

            <div class="card">
              <div><img src={constructor} alt="constructor" /></div>
              <h3>Construction</h3>
              <span>1520 jobs</span>
            </div>

            <div class="card">
              <div><img src={hotelimg} alt="hotelimg" /></div>
              <h3>Hotels & Tourism</h3>
              <span>1022 jobs</span>
            </div>

            <div class="card">
              <div> <img src={education} alt="education" /></div>
              <h3>Education</h3>
              <span>1496 jobs</span>
            </div>

            <div class="card">
              <div><img src={finance} alt="finance" /></div>
              <h3>Financial Services</h3>
              <span>1529 jobs</span>
            </div>

            <div class="card">
              <div><img src={transport} alt="transport" /></div>
              <h3>Transport</h3>
              <span>1244 jobs</span>
            </div>
          </section>




        </div>
        <div className="hero">
          <div className="hero-img">
            <img src={defaultimg} alt="hero" />
          </div>

          <div className="hero-content">
            <h1>
              Good Life Begins With <br />A Good Company
            </h1>
            <p>
              Ultricies purus dolor viverra in iaculis sit euismod.
              Aliquam erat volutpat blandit elit mattis.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Search Job</button>
              <a href="#" className="link-btn">Learn more</a>
            </div>
          </div>
        </div>

        <Container>
          <Row className="text-center text-md-start">

            <Col md={4} className="mb-4 mb-md-0">
              <h2 className="stats-number">12k+</h2>
              <h5 className="fw-semibold">Clients worldwide</h5>
              <p className="text-muted">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
                Blandit a massa elementum.
              </p>
            </Col>

            <Col md={4} className="mb-4 mb-md-0">
              <h2 className="stats-number">20k+</h2>
              <h5 className="fw-semibold">Active resume</h5>
              <p className="text-muted">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
                Blandit a massa elementum.
              </p>
            </Col>

            <Col md={4}>
              <h2 className="stats-number">18k+</h2>
              <h5 className="fw-semibold">Companies</h5>
              <p className="text-muted">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
                Blandit a massa elementum.
              </p>
            </Col>

          </Row>
        </Container>



        <section className="hero-banner">
          <img src={banner} alt="banner" className="hero-bg-img" />

          <div className="hero-overlay">
            <Container >
              <Row>
                <Col md={6}>
                  <h1 className="hero-title"><b> Create A Better</b>
                    <br /><b> Future For Yourself</b>
                  </h1>

                  <p className="hero-text">
                    At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
                    Blandit a massa elementum id scelerisque rhoncus.
                  </p>

                  <Button variant="success" className="hero-btn">
                    Search Job
                  </Button>
                </Col>
              </Row>
            </Container>



          </div>
        </section>



        <section className="py-5 testimonial-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="testimonial"> <b>Testimonials from Our Customers</b> </h2>
              <p className="text-muted">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
              </p>
            </div>

            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card testimonial-card">
                  <div className="card-body">
                    <div className="text-warning mb-2">★★★★★</div>
                    <h5>Amazing services</h5>
                    <p className="text-muted small">
                      Metus faucibus sed turpis lectus feugiat tincidunt.
                      Rhoncus sed tristique in dolor.
                    </p>

                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <div className="d-flex align-items-center">
                        <div> <img src={profile1} alt="profile picture" /></div>
                        <div>
                          <strong>Marco Kihn</strong>
                          <div className="text-muted small">Happy Client</div>
                        </div>
                      </div>
                      <span><img src={quotes} alt="quotes" /></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card testimonial-card">
                  <div className="card-body">
                    <div className="text-warning mb-2">★★★★★</div>
                    <h5>Everything simple</h5>
                    <p className="text-muted small">
                      Mus etiam et vestibulum venenatis viverra.
                      Elit morbi bibendum.
                    </p>

                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <div className="d-flex align-items-center">
                        <div ><img src={profile1} alt="profile picture" /></div>
                        <div>
                          <strong>Kristin Hester</strong>
                          <div className="text-muted small">Happy Client</div>
                        </div>
                      </div>
                      <span><img src={quotes} alt="quotes" /></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card testimonial-card">
                  <div className="card-body">
                    <div className="text-warning mb-2">★★★★★</div>
                    <h5>Awesome, thank you!</h5>
                    <p className="text-muted small">
                      Rhoncus sed tristique in dolor.
                      Mus etiam et vestibulum venenatis.
                    </p>

                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <div className="d-flex align-items-center">
                        <div><img src={profile1} alt="profile picture" /></div>
                        <div>
                          <strong>Zion Cisneros</strong>
                          <div className="text-muted small">Happy Client</div>
                        </div>
                      </div>
                      <span><img src={quotes} alt="quotes" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

            <img src={news1} alt="news_image" className="news_" height={400} width={636} />

            <img src={news1} alt="news_image" className="news_2" height={400} width={636} />

          </div>
          <div className='blog-date'>
            30 March 2024 <b className='date-2'>30 March 2024</b>
          </div>
          <div className='blog-content'> <b>Revitalizing Workplace Morale: Innovative Tactics for  <br />Boosting Employee Engagement in 2024</b> <b className='blog-descrpition'>How to avoid the top six most common job interview mistakes</b>  </div>
          <div ><a href="#" className='readmore'> Read more  </a><a href="" className='readmore2'> Read more </a></div>
        </section>




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


      </div>
    </div>

  )
}

export default Header