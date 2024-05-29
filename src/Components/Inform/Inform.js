import './Inform.css'
import ttte from './ttte.PNG'
import battery from './battery.png'
import D1 from './b1.png'
import D2 from './b2.png'
export  function Inform (){
    return(
        <>
        <p>WELCOME TO <br/>URJA GLOBAL LIMITED</p><hr/>
        <h1>We at Urja are committed to providing world-class services to rapidly develop India focusing on rural electrification especially in hilly areas, forest regions, deserts, islands, far flung villages, unmanned locations and other areas which require reliable and uninterrupted power supply. With a strong design and manufacturing back ground UGL has developed themselves as a leading manufacturer of Solar Energy Systems to cater to almost the complete range of customer requirements</h1>
        <button>Know More-</button>
        <h2>#CONSERVE ENERGY                #CREATE ENERGY</h2>
        <img src={battery} className='pic' alt="..."/>
        <br/>
        <img src={ttte} className='pics' alt="..."/>
        <p>SERVICE NETWORK</p>
        <hr/>
        <h1>A nation-wide network of around 2000 service professionals with tremendous experience</h1>
    <div className='manecard'>
      <div className='card'><p>38</p><h1>Dealer Network</h1></div>
      <div className='card'><p>59</p><h1>Sales & Service Team</h1></div>
      <div className='card'><p>22</p><h1>Distributor Network</h1></div>
      <div className='card'><p>10 Mn</p><h1>Happy Customers</h1></div>
    </div>
    <div className='manecards'>
        <div><img src={D1} className='side' alt="..."/></div>
        <div><img src={D2} className='side' alt="..."/></div>
    </div>
    
        </>
    )
}
