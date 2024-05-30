import Scooter from '../../Components/Product/Products';
import scooterbanner from '../../Components/Product/scooterbanner.jpeg';
import scooty from '../../Components/Product/scooty.png';
import bike from '../../Components/Product/bike.png';
import Navbar  from '../Components/Navbar/Navbar';
export default function Product(){
    return(
        <>
        <Navbar/>
        <Scooter scooterbanner={scooterbanner} scooty={scooty} bike={bike}/>
        <Footer/>
        </>
    );
}