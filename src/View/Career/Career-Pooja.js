import 'bootstrap/dist/css/bootstrap.css'
import './Career.css'
import img from './career-img.jpg'

export function Career() {
    return (
        <>
            <div className='body'>
                <img src={img} className='mainimg'></img>
                <h1 className='mainheading'> Register with Us </h1>
                <p className='line'>________</p>
                <p className='para'> If you're interested in joining our team, please submit your resume through our website. We review applications on a rolling basis, and we'll be in touch if we  believe you're a good fit for <br /> one of our open positions. Thank you for considering a career with us. We look forward to hearing from you!</p>

                <form>
                    <label>First Name</label><br />
                    <input type='text' placeholder='First Name' className='text-type'></input><br /><br />

                    <label>Last Name</label><br />
                    <input type='text' placeholder='Last Name' className='text-type'></input><br /><br />

                    <label>Upload CV</label><br />
                    <input type='file' className='text-type'></input><br />

                    <button className='btn'>SEND</button>
                </form>
                

            </div>
        </>
    )
}