import { useState } from 'react'
import '../budget/budget.css'
import '../budget/budget-pc.css'

export function MeuBudget() {
  const [formEnviado, setFormEnviado] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormEnviado(true);
  }

    return (
        <div className='container-geral-budget' id='orcamento'>
            <div className='container-title-budget'>
                <h1>FAÇA SEU ORÇAMENTO</h1>
            </div>

            <form className='form' onSubmit={handleSubmit} action="">
            <div className="input-menor"> {/*INPUT MENOR */}
              <input placeholder="Seu nome" type="name"  required/>
              <input placeholder="Seu e-mail" type="email"  required/>
            </div>

          <div className="input-menor"> {/*INPUT MENOR */}
              <input placeholder="Seu telefone" type="tel"  required/>

              <select className='select-service' id="servicos" name="servicos" required>
                <option value="" disabled selected hidden>Serviço</option>
                <option value="Redes">Redes</option>
                <option value="VoiP">VoiP</option>
                <option value="Cabeamento">Cabeamento</option>
                <option value="Wi-Fi">Wi-Fi</option>
                <option value="HelpDesk">Help Desk</option>
                <option value="AntiVirus">Anti-Vírus</option>
              </select>
          </div>

          <div className="input-menor">
            <input className="mensagem" placeholder="Mensagem" type="text"/>
          </div>

          <div className="botao-varejoo">
            <button className="botao-varejo" type="submit">SOLICITAR</button>
          </div>

          </form>

          {formEnviado && <p className='mensagem-form'>Formulário Enviado</p>}

        </div>
    )
}