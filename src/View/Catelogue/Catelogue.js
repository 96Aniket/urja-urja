import './Catelogue.css';
import  Navbar  from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';
import img from '../Catelogue/windmil.png';
import solar from '../Catelogue/solar.jpg';
function Catelogue() {
  return (
  <>
 <Navbar/>
   <div >
   <div >
      <img src={solar} className='solar'/> 
      
      <div className='text'>
          <h1><u>URJA GLOBAL LIMITED</u></h1>
          <p className='bold'>
     <b > URJA GLOBAL LIMITED IS IN ONE OF INDIA'S LEADING RENEWABLE ENERGY DEVELOPERS</b>
     </p> 
     </div>  
      </div>
     
         <div className='main'>
         <div className='para'>
            <p>Urja Global Limited is in one of India’s leading Renewable Energy developers and operators.
                Urja is engaged in design, consultancy, integration, supply, installation, commissioning 
                & maintenance of off-grid and grid connected Solar Power Plants. We are approved Channel 
                Partners of Ministry of New and Renewable Energy (MNRE), Govt. of India.
            </p>
               <p>We at Urja are committed to providing world-class services to rapidly develop rural
                India focusing on rural electrification especially in hilly areas, forest regions,
                deserts, islands, far flung villages, unmanned locations and other areas which require
                reliable and uninterrupted power supply.
              </p>
              <p>
              We own one of the largest sales/installation networks PAN India backed by our team.Urja Global
               Limited is promoted by the promoters group hailing from Rajasthan, India.
              </p>
              <p>
              With more than two decades of experience, they have established as one of the country’s leading
               industrial companies and a strong well-diversified conglomerate which is active in: Renewable 
               Energy, IT&ITES, Tours & Travels, and Education & Training having presence across the globe.
              </p>
              <p>We assure customer’s satisfaction in terms of product quality and service. Urja offers outstanding
                quality varied Solar Products which makes use of green and clean energy simple viz. Solar Home
                 Lighting Systems,Solar Lanterns, Solar Street Lighting Systems, Roof Top Systems, Solar PV
                  Pannels with quality and standards conforming to ISO 9001 . All our Solar products range 
                  comply with MNRE standards.
              </p>
         </div>
         <div className='img'>
                    <img src={img}></img>

                    <p>
                    Our team comprises of seasoned professionals with a proven track record in design and
                     integration of off grid and grid connected solar projects.
                    </p>

                    <p>
                    With a strong design and manufacturing back ground UGL has developed themselves as a leading manufacturer
                     of Solar Energy Systems to cater to almost the complete range of customer requirements
                    </p>
                    
         </div>
  
   
   </div>
   <div className='lastelement'></div>
   </div>
    <Footer/>
  </>
   
  );
}

export default Catelogue;