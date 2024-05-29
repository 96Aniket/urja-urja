import './Footer.css'
import Insta from './insta-removebg-preview.png'
export  function Footer (){
    return(
        <>
        <div className='manecardss'>
        <div className='fot'><ul>About</ul>
        <li>Company Overview</li>
        <li>Our Leadership</li>
        <li>Contact Us</li>
        <ul>Products & Solutions</ul>
        <li>Batteries</li>
        <li>Electric Vehicles</li></div>


        <div className='fot'><ul>Investors</ul>
        <li>Regulation-46-And-62-Of-Sebi-[LODR]</li>
        <li>Announcements</li>
        <li>Contact Information</li>
        <li>Annual Report</li>
        <li>Corporate Governance</li>
        <li>Share Holding Pattern</li></div>


        <div className='fot'><ul>Presence</ul>
        <li>Our Network</li>
        <li>Dealer Zone</li>
        <ul>Careers</ul>
        <li>Apply For Jobs</li>
        <ul>Looking to buy a battery ?</ul>
        <li>Quick Buy</li></div>


        <div className='fot'><ul>Subscribe to our Newsletter</ul>
        <li><input className='hii' type='text' placeholder='Enter your email address'></input></li>
        <ul>Follow Us</ul>
        <img src={Insta} className='ss' alt="..."/>
        </div>
    </div>
    <div className='last'>
        <h6>All right reserved @ Urja Global Limited | 2024</h6>
    </div>
        </>
    )
}