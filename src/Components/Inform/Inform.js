import './Inform.css'
import ttte from './ttte.PNG'
import battery from './battery.png'
import D1 from './b1.png'
import D2 from './b2.png'
import D3 from './4907157.jpg'
export  function Inform (){
    return(
        <div   style={ { backgroundImage: `url(${D3})`}}>
        <p className='pp'>WELCOME TO <br/>URJA GLOBAL LIMITED</p><hr/>
        <h1 className='hh'>We at Urja are committed to providing world-class services to rapidly develop India focusing on rural electrification especially in hilly areas, forest regions, deserts, islands, far flung villages, unmanned locations and other areas which require reliable and uninterrupted power supply. With a strong design and manufacturing back ground UGL has developed themselves as a leading manufacturer of Solar Energy Systems to cater to almost the complete range of customer requirements</h1>
        <button>Know More-</button>
        <h2 className='hhh'>#CONSERVE ENERGY                #CREATE ENERGY</h2>
        <img className='zr' src={battery}/>
        <br/>
        <img src={ttte} className='pics' alt="..."/>
        <p className='pp'>SERVICE NETWORK</p>
        <hr/>
        <h1 className='hh'>A nation-wide network of around 2000 service professionals with tremendous experience</h1>
    <div className='manecard'>
      <div className='card'><p className='pp'>38</p><h1 className='hh'>Dealer Network</h1></div>
      <div className='card'><p className='pp'>59</p><h1 className='hh'>Sales & Service Team</h1></div>
      <div className='card'><p className='pp'>22</p><h1 className='hh'>Distributor Network</h1></div>
      <div className='card'><p className='pp'>10 Mn</p><h1 className='hh'>Happy Customers</h1></div>
    </div>
    <div className='manecards'>
        <div><img src={D1} className='side' alt="..."/></div>
        <div><img src={D2} className='side' alt="..."/></div>
    </div>
    
        </div>
    )
}


