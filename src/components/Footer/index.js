import './style.css'
import { Link } from 'react-router-dom'

 /* --   ICONS -- */
import {BsInstagram, BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'

export default function Footer () {
    return(
        <footer>
            <div className='socials-footer'>
            <Link to='https://www.instagram.com/_yurerafael/' target='_blank'><BsInstagram/></Link>
            <Link to='https://github.com/yure07' target='_blank'><BsGithub/></Link>
            <Link to='https://www.linkedin.com/in/yure-rafael/' target='_blank'><BsLinkedin/></Link>
            <Link to='mailto:rafaelyure53@gmail.com' target='_blank'><MdOutlineEmail/></Link>
            <Link to='https://wa.link/eeecik' target='_blank'><BsWhatsapp/></Link>
         </div>
        </footer>
    )
}