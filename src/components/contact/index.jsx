import '../contact/contact.css'
import '../contact/contact-pc.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCardAlt, faEnvelope, faPhone, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faPix } from '@fortawesome/free-brands-svg-icons'

export function MeuContact() {

    return (
        <div className='container-geral-contact' id='contato'>
           <div className='container-mae'>
                <div className='container-contact'>
                    <h1>Contato</h1>
                    <div className='container-icons'>
                        <div className='container-cer'>
                            <FontAwesomeIcon className='icon' icon={faPhone}/>
                            <p>11933255476</p>
                        </div>

                        <div className='container-cer'>
                            <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                            <p>rarity@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='container-contact'>
                    <h1>Redes Sociais</h1>
                    <div className='container-icons'>
                        <div className='container-cer'>
                            <FontAwesomeIcon className='icon' icon={faInstagram}/>
                            <a href=''>@rarity</a>    
                        </div>

                        <div className='container-cer'>
                            <FontAwesomeIcon className='icon' icon={faFacebook}/>
                            <a href=''>Rarity Tech</a>    
                        </div>

                        <div className='container-cer'>
                            <FontAwesomeIcon className='icon' icon={faLinkedinIn}/>
                            <a href=''>raritytech</a>    
                        </div>
                    </div>
                </div>

                <div className='container-contact'>
                    <h1>Meios de Pagamento</h1>
                    <div className='container-icons'>
                        <div className='container-cer'>
                            <FontAwesomeIcon className='icon' icon={faPix}/>
                            <p>Pix</p>    
                        </div>

                        <div className='container-cer'>
                            <FontAwesomeIcon className='icon' icon={faCreditCardAlt}/>
                            <p>Cartão de Crédito</p>    
                        </div>

                        <div className='container-cer'>
                            <FontAwesomeIcon className='icon' icon={faTicket}/>
                            <p>Boleto</p>    
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}