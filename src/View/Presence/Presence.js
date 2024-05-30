import React from 'react';
import ReactDOM from 'react-dom/client';
import './Presence.css'
import { LocationCard } from '../../Components/Presence/LocationCard-Pooja';
import img from '../Presence/ournetwork-img.jpg'
import { Footer } from '../../Components/Footer/Footer'
import { Navbar } from 'react-bootstrap';

export function Presence(){
    return (
<>
<Navbar/>
<img src={img} className='mainimg'></img>
        <h2 className='mainheading'> STORE LOCATION </h2>
                <p className='line'>_______</p>
                <p className='des'>URJA GLOBAL LIMITED IS IN ONE OF INDIA'S LEADING RENEWABLE ENERGY DEVELOPERS</p>


<LocationCard h1='Vyapar Udyog Prakisthan' h2='Shri Shyam Motors' h3='Jai Ambay Traders' info1='Prakisthan Building, Opp. Godown no 4 Bais Godam, jaipur, Rajasthan, 302006' info2='Arihant Tower, Near Pioneer Hospital Station Road , Sikar, Rajasthan- 332001' info3='Shri Krishna Temple, near Bypass Road, Madrela Road, Chirawa Dist., Jhunjhunu, Rajasthan- 333026'/>
<LocationCard h1='Shri Dev Automobile' info1='171/298, Haldi Ghati Marg, Sector- 17, Pratap Nagar, Sanganer, Jaipur, Rajasthan- 302033' h2='Exideplus Lubricant Private Limited' info2='01, ward No.8, Radawas, Main Bus Stand, Jaipur, Rajasthan, 302016' h3='Saraj Motors' info3='B-A Plot No.- 130, Bhai Vihar, Losal- 332025'/>
<LocationCard h1='Shri Shyam Motors' info1='Saraf Complex, Sakadi Gali, Poddar Bhawan, bagi Gate , Fatehpur- 332301' h2='Alutech' info2='C- 22/ 23 Kabir Road, Varanasi, uttar Pradesh- 221001' h3='Sharma Traders' info3='Begam Pura, Meerut, Uttar Pradesh'/>
<LocationCard h1='Zaffar Brothers' info1='Barabanti, Uttar Pradesh' h2='Alutech' info2='52E/ 2A/ 42, Tashkand Marg, Civil Lines, Pyaragraj, Uttar Pradesh- 211001' h3='Hindon Traders' info3='169, Sanjay Colony, Arthala, Mohan Nagar, Ghaziabad, 201007'/>
<LocationCard h1='Loodo Ventures Pvt. Ltd.' info1='JNC Plot No.6, Sector- 5, Vaishali- 110025' h2='Shree Motors' info2='A/P Dudhgaon, Tal- miraj,Sangali, Maharashtra- 416316' h3='Mansa Automobile' info3='1/1/1 Plot 1, behind Jyoti farm, Opposite Essar Petrol pump, Kadambvan Society, Ambad Link Road, Nashik, Maharashtra- 422007'/>
<LocationCard h1='Manakkunel Green Ventures' info1='13/ 113, 114, Kagingada chethipuzha kottayam, Kerala- 32' h2='Shri ram Enterprises' info2='JP Chowk Jai Prakash Nagar, Siwan, Bihar- 841226' h3='Stom Electric' info3='Bargarh, Brahmabihar, near Ram Mandir goru market road, Odisha- 768028'/>



<Footer/>


</>

    )
}