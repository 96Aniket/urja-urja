import './Products.css'
import 'bootstrap/dist/css/bootstrap.css'  

export default function ProductCard(props) {
  return (
    <>
     <div className='card'>

        <img className='img' src={props.scooterbanner} />
      </div>

      <div className='H1'>
      <div className='Head'>
         <h1><b><u>E-Life</u></b></h1>

</div>

<div >
<p  className='row'>
   Urja Introducing the best electric scooter E-Life with
      an unrivalled range up to 100Kms<br /> per charge. It features a sleek & modern design,
      with lightweight and durable frame and is <br />
      equipped with advance safety features,
      robust waterproof & dust resistant battery, while <br />
      the powerful motor provides a smooth & enjoyable ride.</p>
      <br/> <br/>

 <button type='Know More' className='Btn'>Know More</button>
<button type='Know More' className='Btn'>Book Now</button>   
  </div>


        < img className='scooter' src={props.scooter} />
      </div>
      <div>
      < img className='scooty' src={props.bike} />
    </div>
    <div className='head'>
         <h1><b><u>E-zess</u></b></h1>

</div>
<div>
<p  className='col'>
   Urja Introducing the best electric scooter E-Life with
      an unrivalled range up to 100Kms<br /> per charge. It features a sleek & modern design,
      with lightweight and durable frame and is <br />
      equipped with advance safety features,
      robust waterproof & dust resistant battery, while <br />
      the powerful motor provides a smooth & enjoyable ride. <br/>The E-ZESS is here to change the way India moves.</p>
      <button type='text' className='imge'>Know More</button>
<button type='text' className='imge'>Book Now</button>
  </div>

    </>

  )
}















 
