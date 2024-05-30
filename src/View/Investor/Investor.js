
import images from '../../Components/Navbar/Investor/image.png';
import watch from '../../Components/Navbar/Investor/watch.png';
import cloude from '../../Components/Navbar/Investor/cloude.png';
import InvestCard from '../../Components/Navbar/Investor/Investor';
export default function Investor(){
    return(
    <>
    <InvestCard images={images} text='BUSINESS RESPONSIBILITY POLICY' watch={watch} cloude={cloude}/>
<InvestCard images={images} text='Code for Independent Director ' watch={watch} cloude={cloude}/>
<InvestCard images={images} text='CODE OF CONDUCT FOR DIRECTORS' watch={watch} cloude={cloude}/>
<InvestCard images={images} text='Code of conduct for insider trading' watch={watch} cloude={cloude}/>
<InvestCard images={images} text='Criteria of Payment to Non Executive ' watch={watch} cloude={cloude}/>
<InvestCard images={images} text='Nomination and Remuneration' watch={watch} cloude={cloude}/>
<InvestCard images={images} text='POLICY FOR DETERMINATION ' watch={watch} cloude={cloude}/>
<InvestCard images={images} text='Policy on Related Party Transaction' watch={watch} cloude={cloude}/>
<InvestCard images={images} text='POSH' watch={watch} cloude={cloude}/>
<InvestCard images={images} text='Preservation of documents ' watch={watch} cloude={cloude}/>
<InvestCard images={images} text='Whistle Blower Policy' watch={watch} cloude={cloude}/>
    
    </>

    );
}