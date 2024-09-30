import '../header/header.css'
import '../header/header-pc.css'
import Logo from '../../assets/logo.png'

export function MeuHeader() {

    return (
       <header className='header'>
            <div className='div-logo'>
                <img src={Logo}/>
                <h1 className='rarity'>Rarity</h1>
            </div>

            {/* ESPAÇO ENTRE FOTO E TAG A */}

            {/* MENU PC */}
            <span className='container-span'>
                <ul className='container-ul'>
                    <li className='container-li'><a href="#home">Home</a></li>
                    <li className='container-li'><a href="#sobre">Sobre</a></li>
                    <li className='container-li'><a href="#servicos">Serviços</a></li>
                    <li className='container-li'><a href="#orcamento">Orçamento</a></li>
                    <li className='container-li'><a href="#contato">Contato</a></li>
                </ul>
            </span> 
 

            {/* MENU PARA CELULAR */}
           
      </header>
    )
}
