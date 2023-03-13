import './style.css'
import image from '../../assests/images/yure.png'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer'

import {SiGooglemaps} from 'react-icons/si'
import { Container, Row, Col } from 'reactstrap'

export default function Sobre () {
    return(
        <main>
            <Header/>

            <Container>
            <Row xs="2">
            <Col id='container-col'>
            <h3>Yure <span>Rafael</span></h3>
            <h4> <SiGooglemaps/> Cafarnaum - Bahia</h4>
            <Col id='image-mobile'><img src={image} alt='cover'/></Col>
            <p>Desde cedo fui fascinado pelo universo digital, 
                   de saber como que funciona a estrutura de uma interface.
                   Decidi que iria me dedicar a aprender programação para construir sites e aplicações web, e foi isso que fiz. 
                   <p>Assim, me encontrei no Front-End, usando principalmente o
                   React Js como principal ferramenta.</p>
                        <p>No Meu Tempo Livre, procuro desenvolver minhas 
                            habilidades comportamentais juntamente com o Desenvolvimento Pessoal.
                        </p>
                        <p>Meus objetivos como profissional são tanto documentar o passo a passo
                        da minha jornada com a equipe, quanto corroborar para que ambos cresçam 
                        proporcionalmente, tanto equipe como empresa.
                        </p>  
                </p>
            </Col>

            <Col id='container-col-2'>
            <img src={image} alt='1'/>
            </Col>

            </Row>
            </Container>
            
            <Footer/>
        </main>
    )
}