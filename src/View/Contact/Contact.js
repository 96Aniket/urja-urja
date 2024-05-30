import './Contact.css';
import location from './location.png'
import tel from './te.jpg'
import email from './mail.jpg'

function Contact(props) {
  return (
  <>
    <div className='heading'>
            <h1 className='head'><u>CONTACT US</u></h1>
     <p>
      <b >AT URJA GLOBAL we care about our customer's</b>
      </p> <br></br><br></br>
     
   </div>
    
<div className='container'>
  
<div className='row'>
      <div className='contactitem'>
          <h3>Registered Office</h3>
          <div  className='merge'>
          <div className='C_itemD icon'>
                   <img src={location} className='logosize'/>
                   </div>
              <div>
              <p className='head1'>URJA GLOBAL LIMITED <br/>
                <span>486/63,1st Floor,National Market,Peeragarhi,New Delhi-110087 </span></p>
              </div>
                
          </div>
          
          <h3>Contact Us</h3>
        
          <div  className='merge'>
          <div className='C_itemD icon'>
          <img src={tel} className='logosize'/>
                   </div>
              <div>
              <p className='head1'>Official Landline Number <br/>
                <span>+91-11-25279143 | +91-11-45588274 </span></p>
              </div>
                
          </div>

          <div  className='merge'>
          <div className='C_itemD icon'>
          <img src={tel} className='logosize'/>
                   </div>
              <div>
              <p className='head1'>Toll Free No. <br/>
                <span>8000-500-789 </span></p>
              </div>
                
          </div>

          </div>

<div  className='merge'>
<div className='C_itemD icon'>
<img src={email} className='logosize'/>
         </div>
    <div>
    <p className='head1'>EMAIL ADDRESS FOR ONLINE SUPPORT <br/>
      <span>customercare@urjaglobal.in </span></p>
    </div>
      
</div>
         

       
       
    </div>

    <div className='row'>
      <div className='contactitem'>
          <h3>Get In Touch !</h3>
          <div className='C_itemD'>
               <label>Name</label>
               <br></br>
                <input type='text' className='label'></input>
                <br></br>
                <label>Email</label><br></br>
                <input type='email' className='label'></input><br></br>
                <label>Mobile Number</label><br></br>
                <input type='number' className='label'></input><br></br>  
                <label>Query</label><br></br>
                <input type='text' className='int'></input><br></br> 
                <button type='submit' className='btn'>Send</button>  
          </div>  
       </div>    
    </div >
    </div>
    <div  className='Mailb'>
      <h2>For Dealer and Distributorship Enquiry</h2><br></br>
    <h4>EMAIL ID</h4>
    <span>marketing@urjaglobal.in</span>
     </div> 
     <div  className='Mailb'>
      <h2>For Grievances/ Investor Communications</h2><br></br>
    <h4>EMAIL ID</h4>
    <span>cs@urjaglobal.in</span>
     </div> 
     <div><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2820044.0063589807!2d77.75945713201415!3d27.064524613350347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1surja%20global%20limited!5e0!3m2!1sen!2sin!4v1716788045074!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </>
   
  );
}

export default Contact;