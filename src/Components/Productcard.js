import Productcard from '../Components/Products/Product';
import scooterbanner from '../View/Product/scooterbanner.jpeg'
import scooty from '../image/scooty.png'
import bike from '../image/bike.png'
export default function Productcard(){
    return(
        <>
        <Navbar/>
        <Productcard scooterbanner={scooterbanner} scooty={scooty} bike={bike}/>
        </>
    );
}