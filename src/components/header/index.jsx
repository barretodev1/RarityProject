import '../header/header.css'
import '../header/header-pc.css'
import Logo from '../../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export function MeuHeader() {

    return (
       <header className='header'>
            <div className='div-logo'>
                <img src={Logo}/>
            </div>

            {/* ESPAÇO ENTRE FOTO E TAG A */}

            {/* MENU PC */}
            <span className='container-span'>
                <ul className='container-ul'>
                    <li className='container-li'><a href="">Home</a></li>
                    <li className='container-li'><a href="">Sobre</a></li>
                    <li className='container-li'><a href="">Serviços</a></li>
                    <li className='container-li'><a href="">Orçamento</a></li>
                    <li className='container-li'><a href="">Contato</a></li>
                </ul>
            </span> 
 

            {/* MENU PARA CELULAR */}
            <div class="menu-container">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                Menu
            </button>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                <li><a class="dropdown-item" href="#home">Home</a></li>
                <li><a class="dropdown-item" href="#sobre">Sobre</a></li>
                <li><a class="dropdown-item" href="#servico">Serviços</a></li>
                <li><a class="dropdown-item" href="#orcamento">Orçamento</a></li>
                <li><a class="dropdown-item" href="#contato">Contato</a></li>
            </ul>
            </div>
      </header>
    )
}
