import { useEffect } from 'react';
import '../serviço/service.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../serviço/service-pc.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBezierCurve, faBug, faCloud, faDesktop, faTeletype, faWifi } from '@fortawesome/free-solid-svg-icons'

export function MeuServices() {

    
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Inicializa o AOS com a duração da animação em milissegundos
      }, []);


    return (
        <div id='servicos' className='container-geral'>
            <div className='container-title-services'>
                <h1>SERVIÇOS</h1>
            </div>

            <div className='container-cards-mae'>
                <div className='card-unico'>
                    <div><FontAwesomeIcon className='Font-icon' icon={faCloud} /></div>
                    <h1 className='meu-h1'>Redes</h1>
                </div>

                <div className='card-unico'>
                    <div><FontAwesomeIcon className='Font-icon' icon={faWifi} /></div>
                    <h1 className='meu-h1'>Wi-Fi</h1>
                </div>
                
                <div className='card-unico'>
                    <div><FontAwesomeIcon className='Font-icon' icon={faDesktop} /></div>
                    <h1 className='meu-h1'>Help Desk</h1>
                </div>

                <div className='card-unico'>
                    <div><FontAwesomeIcon className='Font-icon' icon={faTeletype} /></div>
                    <h1 className='meu-h1'>VoiP</h1>
                </div>

                <div className='card-unico'>
                    <div><FontAwesomeIcon className='Font-icon' icon={faBezierCurve} /></div>
                    <h1 className='meu-h1'>Cabeamento</h1>
                </div>

                <div className='card-unico'>
                    <div><FontAwesomeIcon className='Font-icon' icon={faBug} /></div>
                    <h1 className='meu-h1'>Anti-vírus</h1>
                </div>

            </div>        

            <div className='container-cards-mae-pc'>
                <div className='cards' data-aos="fade-up">
                    <div className='card-unico'>
                        <div><FontAwesomeIcon className='Font-icon' icon={faCloud} /></div>
                        <h1 className='meu-h1'>Redes</h1>
                    </div>

                    <div className='card-unico'>
                        <div><FontAwesomeIcon className='Font-icon' icon={faWifi} /></div>
                        <h1 className='meu-h1'>Wi-Fi</h1>
                    </div>
                    
                    <div className='card-unico'>
                        <div><FontAwesomeIcon className='Font-icon' icon={faDesktop} /></div>
                        <h1 className='meu-h1'>Help Desk</h1>
                    </div>
                </div>

                <div className='cards' data-aos="fade-up">
                    <div className='card-unico'>
                        <div><FontAwesomeIcon className='Font-icon' icon={faTeletype} /></div>
                        <h1 className='meu-h1'>VoiP</h1>
                    </div>

                    <div className='card-unico'>
                        <div><FontAwesomeIcon className='Font-icon' icon={faBezierCurve} /></div>
                        <h1 className='meu-h1'>Cabeamento</h1>
                    </div>

                    <div className='card-unico'>
                        <div><FontAwesomeIcon className='Font-icon' icon={faBug} /></div>
                        <h1 className='meu-h1'>Anti-vírus</h1>
                    </div>
                </div>

            </div>        


        </div>
    )
}