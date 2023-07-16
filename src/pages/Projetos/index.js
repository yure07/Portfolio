import './style.css'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/index'

import FormigaLanches from '../../assests/images/FORMIGA-LANCHES.jpg'
import LojaDoFulano from '../../assests/images/loja-do-fulano.jpeg'
import DelPlata from '../../assests/images/desktop-delplata.jpeg'
import Instagram from '../../assests/images/instagram-clone.png'
import CRUD from '../../assests/images/to-do-list.jpeg'
import PrimeFlix from '../../assests/images/prime-flix.png'

import { BsLink45Deg, BsGithub } from 'react-icons/bs'

export default function Projetos () {
    return(
        <main>
            <Header/>
            <div className='projects-container'>
                <span>Projetos</span>
                <div className='projects'>

                <div className='card-active'>
                    <img src={FormigaLanches} alt='formiga-img' className='img-project'/>
                    <span>Landing Page</span>
                    <span>Tecnologias: React, Javascript, CSS</span>

                    <div className='links'>
                        <button>
                            <Link to='https://formigalanches.netlify.app/' target='_blank'> 
                            <BsLink45Deg/> Site 
                            </Link> 
                        </button>

                        <button>
                            <Link to='https://github.com/yure07/FormigaLanches' target='_blank'>
                            <BsGithub/> Github
                            </Link>
                        </button>
                    </div>
                </div>
           
                <div className='loja-fulano'>
                    <img src={LojaDoFulano} alt='fulano-img' className='img-project'/>
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

                <div className='card-active'>
                    <img src={DelPlata} alt='delplata-img' className='img-project'/>
                    <span>DelPlata</span>
                    <span>Tecnologias: React, JSX, CSS e Javascript</span>

                    <div className='links'>
                        <button>
                            <Link to='https://delplata.store/' target='_blank'> 
                            <BsLink45Deg/> Site 
                            </Link> 
                        </button>

                        <button>
                            <Link to='https://github.com/yure07/DelPlata' target='_blank'>
                            <BsGithub/> Github
                            </Link>
                        </button>
                    </div>
                </div>

                <div className='card-active'>
                    <img src={Instagram} alt='instagram-img' className='img-project'/>
                    <span>Instagram Clone</span>
                    <span>Tecnologias: React Js e SASS</span>

                    <div className='links'>
                        <button>
                            <Link to='https://clone-instagram1.netlify.app/' target='_blank'> 
                            <BsLink45Deg/> Site 
                            </Link> 
                        </button>

                        <button>
                            <Link to='https://github.com/yure07/instagram-clone' target='_blank'>
                            <BsGithub/> Github
                            </Link>
                        </button>
                    </div>
                </div>

                <div className='card-active'>
                    <img src={CRUD} alt='crud-img' className='img-project'/>
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

                <div className='card-active'>
                    <img src={PrimeFlix} alt='primeflix-img' className='img-project'/>
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