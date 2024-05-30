import Card from '../../Components/Product/Products';
import scooterbanner from '../View/Product/scooterbanner.jpeg';
import scooty from '../image/scooty.png';
import bike from '../image/bike.png';
import Navbar  from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
// import ProductCard from '../../Components/Product/Products';
export default function Card(){
    return(
        <>
        <Navbar/>
        < ProductCard scooterbanner={scooterbanner} scooty={scooty} bike={bike}/>
        <Footer/>
        </>
    );
}