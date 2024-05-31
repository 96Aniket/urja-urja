import React from 'react';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Scooter(props) {
  return (
    <>
      <div className='new'>

        <img className='urja' src={props.scooterbanner} />
      </div>

      <div className='h1'>
        <div className='head'>
          <h1><b><u>E-Life</u></b></h1>
        
        </div>
        </div>
     <div className='second'>
      <div>
        <p className='paragraph'> Urja Introducing the best electric scooter E-Life with
          an unrivalled range up to 100Kms per charge. It features a sleek & modern design,
          with lightweight and durable frame and is equipped with advance safety features, robust waterproof & dust resistant battery, while 
          the powerful motor provides a smooth & enjoyable ride.</p>

      </div>
      <div>
      <img className='newimg' src={props.scooty} />
      </div>
      </div>
     <div>
     <button type='text' className='singlebtn'>Know More </button>
    <button type='text' className='dblbtn'>Book Now</button>
     </div>
        <div>
        <img className='vehicle' src={props.bike}/>
        </div>
        <div className='point'>
    <div className='Head'>
      <h1><b><u>E-zess</u></b></h1>
     </div>
     <div >
<p  className='col'>
   Urja Introducing the best electric scooter E-Life with
      an unrivalled range up to 100Kms per charge. It features a sleek & modern design,
      with lightweight and durable frame and is 
      equipped with advance safety features,
      robust waterproof & dust resistant battery, while 
      the powerful motor provides a smooth & enjoyable ride.The E-ZESS is here to change the way India moves.</p>
    </div>
     </div>
   <div className='text'>
   <button type='text' className='newbtn'>Know More </button>
    <button type='text' className='oldbtn'>Book Now</button>
   </div>
    </>

  )
}
















