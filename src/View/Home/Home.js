import { Navbar } from '../../Components/Navbar/Navbar';
import Carousel from '../../Components/Cravsel/Cravsel';
import { Inform } from '../../Components/Inform/Inform';
import { Footer } from '../../Components/Footer/Footer';

export default function Home(){
 return(
 <>
  <Navbar/>
  <Carousel />
  <Inform/>
  <Footer/>
  </>
  );
}