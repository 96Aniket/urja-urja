import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import One from './1.png';
import Banner from './banner.png';
import './Cravsel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='do'>
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='imm' src={One}/>
       
      </Carousel.Item>
      <Carousel.Item>
        <img className='imm' src={Banner} />
        
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;