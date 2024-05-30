import Card from '../Components/Products/Product';
import scooterbanner from '../image/scooterbanner.jpeg'
import scooty from '../image/scooty.png'
import bike from '../image/bike.png'
export default function Productcard(){
    return(
        <>
        <Navbar/>
        <Card img1={scooterbanner } pic={scooty} picture={bike}/>
        </>
    );
}