import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import One from './1.png';
import Banner from './banner.png';
import './Cravsel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='pic' src={One}/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img className='pic' src={Banner}/>
        
      </Carousel.Item>
      
    </Carousel>
  );
}

export default ControlledCarousel;