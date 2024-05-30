import "bootstrap/dist/css/bootstrap.css"
import UrjaGlobal from './Urja Global Limited 4.jpg'
import logos from './logos-removebg-preview.png'
// import './Home.css'
import './Navbar.css'

export default function Navbar (){
    return(

      <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary m-0 p-0">
  <div class="container-fluid m-0 p-0">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        
      <img src={UrjaGlobal} className='brandlogo' alt="..."/>

      <img src={logos} className='logosname' alt="..."/>
        
        

      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/About"><p className="pages">About</p></a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Card"><p className="pages">Product</p></a>
        </li>


        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Investor"><p className="pages">Company Policy</p></a>
        </li>
        

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Presence"><p className="pages">Our Network</p></a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/career"><p className="pages">Careers</p></a>
        </li>

        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Catelogue"><p className="pages">Catelogue</p></a>
        </li>
      
       
         
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Contact"><p className="pages">Contact Us</p></a>
        </li>
        


        
      </ul>
      
     
    </div>
  </div>
</nav>

</>

    )
}

