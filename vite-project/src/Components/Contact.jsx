import './../sass/contact.css'
import phone from './../assets/phone.png'
import mail from './../assets/mail.png'
import clock2 from './../assets/clock2.png'
import location2 from './../assets/location2.png'
import googlemap from './../assets/googlemap.png'
import zoom from './../assets/zoom.png'
import tinder from './../assets/tinder.png'
import dribble from './../assets/dribble.png'
import asana2 from './../assets/asana2.png'
import jobbag from './../assets/jobbag.png'

const Contact = () => {
    return (
        <section>
            <div className='header'>
                <h1>Contact us</h1>
            </div>



            <section className="contact-section">
                <div className="contact-container">

                    <div className="contact-left">
                        <h1>
                            You Will Grow, You Will <br /> Succeed. We Promise That
                        </h1>

                        <p>
                            Pellentesque arcu facilisis nunc proin. Dignissim mattis
                            interdum tincidunt ut vitae. Diam convallis molestie
                            pellentesque egestas.
                        </p>

                        <div className="contact-info">
                            <div className="info">
                                <span><img src={phone} alt="" /></span>
                                <div>
                                    <h4>Call for inquiries</h4>
                                    <p>+257 388-6895</p>
                                </div>
                            </div>

                            <div className="info-box">
                                <span><img src={mail} alt="" /></span>
                                <div>
                                    <h4>Send us email</h4>
                                    <p>kramulous@jobglobal.net</p>
                                </div>
                            </div>

                            <div className="info-box">
                                <span><img src={clock2} alt="" /></span>
                                <div>
                                    <h4>Opening hours</h4>
                                    <p>Mon - Fri: 10AM - 10PM</p>
                                </div>
                            </div>

                            <div className="info-box">
                                <span><img src={location2} alt="" /></span>
                                <div>
                                    <h4>Office</h4>
                                    <p>19 North Road Piscataway, NY 08854</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right content */}
                    <div className="contact-right">
                        <h3>Contact Info</h3>
                        <p>Nibh dis faucibus proin lacus tristique</p>

                        <form className="contact-form">
                            <div className="form-row">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>

                            <input type="email" placeholder="Email Address" />
                            <textarea placeholder="Your message..." rows="4"></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                </div>
            </section>

            <section>
                <div className='googlemap'>
                    <img src={googlemap} alt="map image" className='googlemap' />
                </div>
            </section>
            <section className='logobanner'>
                <img src={zoom} alt="logo banner" />
                <img src={tinder} alt="logo banner" />
                <img src={dribble} alt="logo banner" />
                <img src={asana2} alt="logo banner" />

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
        </section>
    )
}

export default Contact
