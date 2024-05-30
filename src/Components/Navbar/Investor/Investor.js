import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Investor.css';

export default function Card(info) {
    return (
        <>
     
         <div className='display'>
                <div className='card'>
            
                        <img className='div' src={info.images} />
                       <p className='para'>{info.text}</p>
                      <img className='pic' src={info.watch}/>
                    <img className='pic3' src={info.cloude}/>
            </div>
        
           </div>
       
        </>
    )
}
