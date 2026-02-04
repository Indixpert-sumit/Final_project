import './../sass/Header.css'
import Headerimg from './../assets/Header.png'
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Container } from 'react-bootstrap';
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
import corporate from './../assets/corporate.png'
import agriculture from './../assets/agriculture.png'
import metal from './../assets/metal.png'
import shoppingbag from './../assets/shoppingbag.png'
import constructor from './../assets/constructor.png'
import hotelimg from './../assets/hotelimg.png'
import education from './../assets/education.png'
import finance from './../assets/finance.png'
import transport from './../assets/transport.png'
import defaultimg from './../assets/defaultimg.png'






const Header = () => {
  return (
    
    <div
      className="headerimg"
      style={{ backgroundImage: `url(${Headerimg})` }}
    >
      <h1 className='dreamjob'>Find Your Dream Job Today!</h1>
      <p className='description'>Connecting Talent with Opportunity: Your Gateway to Career Success</p>
      
       <ListGroup className='listgroup_' horizontal>
      <ListGroup.Item>Job Title or Company</ListGroup.Item>
      <ListGroup.Item>Select Location</ListGroup.Item>
      <ListGroup.Item>Select Category</ListGroup.Item>
      <Button
              variant="success"
              className="search-job"
            >
              search job
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

{/* descriptions part */}


    </div>
</div>
<div>
  <h1 className='aviable'> <b>Recent Jobs Aviable</b></h1>
  
<p className='paragraph'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquetc <span className='veiw'> <b>Veiw aLL</b></span></p>
<Button className='minute'> 10m min ago</Button>
<span><img className='wishlist' src={wishlist} alt="" /></span>
<div className='forward'>
  <img src={forward} alt="forwad company logo" />
 <b>Forward Security Director</b>
 <p className='descriptio_forwrd'>Bauch, Schuppe and Schulist Co</p>

</div>
<div><img className='hotel-bag' src={breifcase} alt="hotel bag" /> Hotels & Tourism 
<img  className='clock'src={clock} alt="clock image"  />Full time
 <img className='wallet' src={wallet} alt="wallet image" />$40000-$42000
 <img className='map' src={map} alt="map" />New-York, USA
 <Button className='job_detail1'>job details</Button>
 </div>

 

 <Button className='minute'> 12m min ago</Button>
<span><img className='wishlist' src={wishlist} alt="" /></span>
<div className='forward'>
  <img src={regional} alt="regional company logo" />
 <b>Regional Creative Facilitator</b>
 <p className='descriptio_forwrd'>Wisozk - Becker Co</p>
 
</div>
<div><img className='media' src={breifcase} alt="hotel bag" /> Media
<img  className='parttime'src={clock} alt="clock image"  />part time
 <img className='wallet' src={wallet} alt="wallet image" />$28000-$32000
 <img className='map' src={map} alt="map" />Los- Angeles, USA
 <Button className='job_detail2'>job details</Button>
 </div>

 <Button className='minute'> 15m min ago</Button>
<span><img className='wishlist' src={wishlist} alt="" /></span>
<div className='forward'>
  <img src={internal} alt="forwad company logo" />
 <b>Internal Integration Planner</b>
 <p className='descriptio_forwrd'>Mraz, Quigley and Feest Inc.</p>

</div>
<div><img className='hotel-bag' src={breifcase} alt="hotel bag" /> Construction
<img  className='clock'src={clock} alt="clock image"  />Full time
 <img className='wallet' src={wallet} alt="wallet image" />$48000-$50000
 <img className='map' src={map} alt="map" />Texas, USA
 <Button className='job_detail3'>job details</Button>
 </div>

 <Button className='minute'> 24 min ago</Button>
<span><img className='wishlist' src={wishlist} alt="wihsist image" /></span>
<div className='forward'>
  <img src={district} alt="forwad company logo" />
 <b>District Intranet Director</b>
 <p className='descriptio_forwrd'>VonRueden - Weber Co</p>

</div>
<div><img className='hotel-bag' src={breifcase} alt="hotel bag" />  Commerce 
<img  className='clock'src={clock} alt="clock image"  />Full time
 <img className='wallet' src={wallet} alt="wallet image" />$42000-$48000
 <img className='map' src={map} alt="map" />Florida, USA
 <Button className='job_detail4'>job details</Button>
 </div>

 <Button className='minute'> 26 min ago</Button>
<span><img className='wishlist' src={wishlist} alt="" /></span>
<div className='forward'>
  <img src={corporate} alt="forwad company logo" />
 <b>District Intranet Director</b>
 <p className='descriptio_forwrd'>Cormier, Turner and Flatley Inc</p>

</div>
<div><img className='hotel-bag' src={breifcase} alt="hotel bag" />Commerce
<img  className='clock'src={clock} alt="clock image"  />Full time
 <img className='wallet' src={wallet} alt="wallet image" />$38000-$40000
 <img className='map' src={map} alt="map" />Boston, USA
 <Button className='job_detail5'>job details</Button>
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
   <div className='hero-section-2'>
    <img className='default-img'src={defaultimg} alt="defaultimg"   /> 
<h1 className="hero-text">
    Good Life Begins With <br /> A Good Company </h1>
  <br />
  <p className='herosection_para'>hello</p>
   
   </div>
   
  


  </div>
    </div>
   
  )
}

export default Header
