import './style.css'
import { Link } from 'react-router-dom'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

export default function Footer () {
    return(
        <footer>
            <p>&copy; 2023 - Yure Rafael</p>
            <div className='socials-footer'>
                <Link to='https://github.com/yure07' target='_blank'><BsGithub/></Link>
                <Link to='https://www.linkedin.com/in/yure-rafael/' target='_blank'><BsLinkedin/></Link>
                <Link to='mailto:rafaelyure53@gmail.com' target='_blank'><MdOutlineEmail/></Link>
            </div>
        </footer>
    )
}