import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Projetos from '../pages/Projetos'
import Contato from '../pages/Contato'

function RoutesApp () {
    return(
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='sobre-mim' element={ <Sobre/> }/>
            <Route path='/projetos' element={ <Projetos/> }/>
            <Route path='/contato' element={ <Contato/> }/>
        </Routes>
    )
}
export default RoutesApp