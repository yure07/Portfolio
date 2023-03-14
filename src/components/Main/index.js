import './style.css'
import pc from '../../assests/images/pc-custom.webp'
import curriculo from '../../assests/curriculo.pdf'

import { IoLogoWhatsapp } from 'react-icons/io'
import { FaDownload } from 'react-icons/fa'
import { Col, Row } from 'reactstrap'

export default function Main() {
    return(
        <main className='main'>
          <Row xs='2'>
            <Col id='col-1'>
                <h1>Olá!</h1>
                <p>Eu Sou o <span>Yure</span></p>
                <p>Desenvolvedor Front-End</p>

                <div className='info'>
                    <a target='_blank' href='https://api.whatsapp.com/send?phone=5574988594216' className='contact'>
                        <IoLogoWhatsapp/> Contatar
                    </a>

                    <a download='curriculo.pdf' href={curriculo} className='contact'>
                        <FaDownload/> Baixar CV
                    </a>  
                </div>        
            </Col>

            <Col className='collumn-2'>
                <img src={pc} alt='1'/>
            </Col>
        </Row>
        </main>
    )
}