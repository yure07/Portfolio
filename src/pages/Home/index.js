import './style.css'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Skills from '../../components/Skills'
import Footer from '../../components/Footer'

export default function Home () {
    return(
        <main className='contain-fluid'>
            <Header/>
            <Main/>
            <Skills/>
            <Footer/>
        </main>
    )
}