import { Navbar } from '../../Components/Navbar/Navbar';
import UncontrolledExample from '../../Components/Cravsel/Cravsel';
import { Inform } from '../../Components/Inform/Inform';
import { Footer } from '../../Components/Footer/Footer';


export default function Home(){
 return(
 <>
  <Navbar/>
  <UncontrolledExample/>
  <Inform/>
  <Footer/>
  </>
  );
}