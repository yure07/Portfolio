import './style.css'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
import mailSent from '../../assests/images/mail-sent.png'

import { useState } from 'react'
import { addDoc, collection} from 'firebase/firestore'
import { db } from '../../firebaseConnection'

export default function Contato () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [thanks, setThanks] = useState()

    async function handleAdd (e) {
        if(email && name && message !== '') {
        e.preventDefault()
        addDoc(collection(db,"mensagens"),{
            nome: name,
            email: email,
            mensagem: message
        }
    )
    .then(()=>{
        setEmail('')
        setName('')
        setMessage('')
        setThanks(true)
        console.log('SUA MENSAGEM FOI ENVIADA');
    })
    .catch((error)=>{
        console.log("ERRO" + error)   
    })
    } 
}

    return(
        <main>
        <Header/>
        <div className='contact-container'>
            <div className='container-mensage'>

            <div className='container-center'>
                <p>Contato</p>
            {thanks ? 
            <h1>
                Obrigado pela mensagem. Responderei assim que possível.
            </h1>
             : 
             <form  novalidate>
             <label>Nome</label>
             <input type='text' required placeholder='Seu nome..' 
              value={name} onChange={(e)=>{ setName(e.target.value) }}/>

             <label>Email</label>
             <input type='email' placeholder='Seu Email..' required
             value={email} onChange={(e)=>{ setEmail(e.target.value) }}/>

             <label>Mensagem</label>
             <textarea name='mensagem' placeholder='Sua Mensagem..' required
             value={message} onChange={(e)=>{ setMessage(e.target.value) }}/>

             <div>
                 <button className=' btn btn-primary send-message'
                 onClick={handleAdd}>Enviar</button>
             </div>
         </form>
             }
             

                <img src={mailSent} alt='1' className='mail-sent'/> 
            </div>
            </div>
            <Footer/>
        </div>
        </main>
    )
}