import "bootstrap/dist/css/bootstrap.css"
import UrjaGlobal from './Urja Global Limited 4.jpg'
import logos from './logos-removebg-preview.png'
// import './Home.css'
import './Navbar.css'

export function Navbar (){
    return(

      <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        
      <img src={UrjaGlobal} className='brandlogo' alt="..."/>

      <img src={logos} className='logosname' alt="..."/>
        
        

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><p className="pagess">Company Overview</p></a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><p className="pages">Electric Vehicle</p></a>
        </li>


        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><p className="pages">Company Policy</p></a>
        </li>
        

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><p className="pages">Dealer Zone</p></a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><p className="pages">Careers</p></a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><p className="pages">Company Profile</p></a>
        </li>

      
       
         
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><p className="pages">Contact Us</p></a>
        </li>
        


        
      </ul>
      
     
    </div>
  </div>
</nav>

</>

    )
}

