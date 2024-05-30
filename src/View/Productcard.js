import Productcard from '../Components/Products/Product';
import scooterbanner from '../View/Product/scooterbanner.jpeg';
import scooty from '../image/scooty.png';
import bike from '../image/bike.png';
import Navbar  from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
export default function Productcard(){
    return(
        <>
        <Navbar/>
        < Card scooterbanner={scooterbanner} scooty={scooty} bike={bike}/>
        <Footer/>
        </>
    );
}