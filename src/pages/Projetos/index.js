import './style.css'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/index'

import PrimeFlix from '../../assests/images/prime-flix.png'
import LojaDoFulano from '../../assests/images/loja-do-fulano.jpeg'
import CRUD from '../../assests/images/to-do-list.jpeg'

export default function Projetos () {
    return(
        <main>
            <Header/>
            <div className='projects-container'>
                <span>Projetos</span>
                <div className='projects'>

             <Link to='https://react-listagem.netlify.app/' target='_blank'>
                <div className='card-active'>
                    <img src={PrimeFlix} alt='1' className='img-project'/>
                    <span>&lt;</span>
                    <span>Prime Flix</span>
                    <span>&gt;</span>
                </div>
            </Link>

            <Link to='https://lojadofulano.com/' target='_blank' > 
                <div className='loja-fulano'>
                    <img src={LojaDoFulano} alt='2' className='img-project'/>
                    <span>&lt;</span>
                    <span>Loja Do Fulano</span>
                    <span>&gt;</span>
                </div>
            </Link>

            <Link to='https://crud-to-do-portfolio.netlify.app/' target='_blank'>
                <div className='card-active'>
                    <img src={CRUD} alt='3' className='img-project'/>
                    <span>&lt;</span>
                    <span>CRUD</span>
                    <span>&gt;</span>
                </div>
            </Link>

                <div className='soon'>
                    <p>EM BREVE!</p>
                </div>

                <div className='soon'>
                    <p>EM BREVE!</p>
                </div>

                <div className='soon'>
                    <p>EM BREVE!</p>
                </div>

                </div>
            </div>
            <Footer/>
        </main>
    )
}