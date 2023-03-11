import { Col, Row } from 'reactstrap'
import './style.css'
import pc from '../../assests/images/pc-custom.png'

export default function Main() {
    return(
        <main className='main'>
          <Row xs='2'>
            <Col id='col-1'>
                <h1>Olá!</h1>
                <p>Eu Sou o <span>Yure</span></p>
                <p>Desenvolvedor Front-End</p>
                <a target='_blank' href='https://api.whatsapp.com/send?phone=5574988594216'>
                    <button className='contact'>Contatar</button>
                </a>
            </Col>

            <Col id='col-2'>
                <img src={pc} alt='1'/>
            </Col>
        </Row>
        </main>
    )
}