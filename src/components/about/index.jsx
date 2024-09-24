import '../about/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../about/about-pc.css'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBullseye } from '@fortawesome/free-solid-svg-icons/faBullseye'

export function MeuAbout() {

    return (
        <>
        <div className='container-sobre'>
            <h1>SOBRE NÓS</h1>
        </div>

        <article className='container-article-pc'>
            <div className='container-icon-pc'>
                <h1>Missão</h1>
                <h2>Fornecer soluções tecnológicas inovadoras e personalizadas, com foco em infraestrutura, help desk, telefonia VoIP, e suporte avançado para garantir a segurança, eficiência e evolução dos negócios de nossos clientes. Nossa missão é criar parcerias sólidas, entregando serviços de alta qualidade que otimizem operações e reduzem custos.</h2>
            </div>

            <div className='container-icon-pc'>
                <h1>Visão</h1>
                <h2>Ser reconhecida como a principal referência em tecnologia e infraestrutura, destacando-se pela excelência no atendimento e pela capacidade de oferecer soluções integradas que acompanhem a evolução do mercado e as necessidades dos nossos clientes, sempre com foco na inovação e no sucesso mútuo.</h2>
            </div>

            <div className='container-icon-pc'>
                <h1>Valores</h1>
                <h2>Na Rarity, a inovação está no centro de tudo o que fazemos, sempre em busca das melhores tecnologias para atender nossos clientes. Priorizamos a qualidade em cada serviço oferecido, garantindo resultados que superam as expectativas. A transparência guia nossas relações, seja com clientes, parceiros ou colaboradores, agindo sempre com clareza e honestidade.</h2>
            </div>  
        </article>


        {/* MOBILE ABOUT */}
        <article className='container-article'>
            <div className='container-icon'>
                <h1>Missão</h1>
                <h2>Oferecer soluções tecnológicas eficientes e personalizadas em infraestrutura, help desk e telefonia VoIP, ajudando empresas a otimizar suas operações e reduzir custos com qualidade e inovação.</h2>
            </div>

            <div className='container-icon'>
                <h1>Visão</h1>
                <h2>Ser referência no mercado de tecnologia, reconhecida pela excelência em soluções integradas e pela capacidade de atender às demandas em constante evolução dos nossos clientes.</h2>
            </div>

            <div className='container-icon'>
                <h1>Valores</h1>
                <h2>Na Rarity, prezamos pela inovação, qualidade e transparência, sempre comprometidos em atender nossos clientes com soluções personalizadas e sustentáveis.</h2>
            </div>
        </article>


        </>
    )
}