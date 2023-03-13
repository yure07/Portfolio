import './style.css'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/index'

import PrimeFlix from '../../assests/images/prime-flix.png'
import LojaDoFulano from '../../assests/images/loja-do-fulano.jpeg'
import CRUD from '../../assests/images/to-do-list.jpeg'

import { BsLink45Deg, BsGithub } from 'react-icons/bs'

export default function Projetos () {
    return(
        <main>
            <Header/>
            <div className='projects-container'>
                <span>Projetos</span>
                <div className='projects'>

             
                <div className='card-active'>
                    <img src={PrimeFlix} alt='1' className='img-project'/>
                    <span>Prime Flix</span>
                    <span>Tecnologias: React, JSX e CSS</span>
                    <div className='links'>
                        <button>
                            <Link to='https://react-listagem.netlify.app/' target='_blank'> 
                            <BsLink45Deg/> Site 
                            </Link> 
                        </button>

                        <button>
                            <Link to='https://github.com/yure07/prime-flix' target='_blank'>
                            <BsGithub/> Github
                            </Link>
                        </button>    
                    </div>
                </div>
           

                <div className='loja-fulano'>
                    <img src={LojaDoFulano} alt='2' className='img-project'/>
                    <span>Loja do Fulano</span>
                    <span>Tecnologias: React, JSX e CSS</span>
                    
                    <div className='links'>
                        <button>
                            <Link to='https://lojadofulano.com/' target='_blank'> 
                            <BsLink45Deg/> Site 
                            </Link> 
                        </button>

                        <button>
                            <Link to='https://github.com/yure07/LojaFulano' target='_blank'>
                            <BsGithub/> Github
                            </Link>
                        </button>
                    </div>
                </div>

            <Link to='https://crud-to-do-portfolio.netlify.app/' target='_blank'>
                <div className='card-active'>
                    <img src={CRUD} alt='3' className='img-project'/>
                    <span>CRUD</span>
                    <span>Tecnologias: React, JSX, CSS e Firebase</span>

                    <div className='links'>
                        <button>
                            <Link to='https://crud-to-do-portfolio.netlify.app/' target='_blank'> 
                            <BsLink45Deg/> Site 
                            </Link> 
                        </button>

                        <button>
                            <Link to='https://github.com/yure07/crud' target='_blank'>
                            <BsGithub/> Github
                            </Link>
                        </button>
                    </div>
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