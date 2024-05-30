import 'bootstrap/dist/css/bootstrap-grid.css'
import './LocationCard.css'



export function LocationCard(props){
    return(
<>

{/* <div className='container text-center'>
  <div className="row">
    <div className="col">
      <h5 className="lname">{props.h1}</h5>
      <p className="linfo">{props.info1}</p>
    </div>
    <div className="col">
    <h5 className="lname">{props.h2}</h5>
    <p className="linfo">{props.info2}</p>
    </div>
    <div className="col">
    <h5 className="lname">{props.h3}</h5>
    <p className="linfo"> {props.info3}</p>
    </div>
  </div>
</div> */}


<div className='main'>
<div className='box'>
<h5 className='name'> {props.h1} </h5>
<p className='info'>{props.info1} </p>

</div>


<div className='box'>
<h5 className='name'> {props.h2} </h5>
<p className='info'>{props.info2} </p>

</div>


<div className='box'>
<h5 className='name'> {props.h3} </h5>
<p className='info'>{props.info3} </p>

</div>
</div>
</>




    )
}