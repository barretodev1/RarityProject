import { useRef, useState } from 'react';
import '../budget/budget.css';
import '../budget/budget-pc.css';
import conexao from '../../service/conexao.js';

export function MeuBudget() {
  const [formEnviado, setFormEnviado] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState(""); // Estado para o serviço selecionado

  const nameRef = useRef();
  const emailRef = useRef();
  const cellRef = useRef();
  const messageRef = useRef();

  async function postData(event) {
    event.preventDefault();
    
    try {
      await conexao.post('/', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        cell: cellRef.current.value,
        service: servicoSelecionado, // Usar o estado do serviço selecionado
        message: messageRef.current.value
      });
      setFormEnviado(true); // Definir formEnviado como true após o envio
    } catch (error) {
      alert('ERRO AO CADASTRAR O USUÁRIO.');
    }
  }

  return (
    <div className='container-geral-budget' id='orcamento'>
      <div className='container-title-budget'>
        <h1>FAÇA SEU ORÇAMENTO</h1>
      </div>

      <form className='form' onSubmit={postData}>
        <div className="input-menor">
          <input ref={nameRef} placeholder="Seu nome" type="text" required />
          <input ref={emailRef} placeholder="Seu e-mail" type="email" required />
        </div>

        <div className="input-menor">
          <input ref={cellRef} placeholder="Seu telefone" type="tel" required />
          <select 
            className='select-service' 
            id="servicos" 
            name="servicos" 
            value={servicoSelecionado} 
            onChange={(e) => setServicoSelecionado(e.target.value)} // Atualiza o estado ao mudar
            required
          >
            <option value="" disabled hidden>Serviço</option>
            <option value="Redes">Redes</option>
            <option value="VoiP">VoiP</option>
            <option value="Cabeamento">Cabeamento</option>
            <option value="Wi-Fi">Wi-Fi</option>
            <option value="HelpDesk">Help Desk</option>
            <option value="AntiVirus">Anti-Vírus</option>
          </select>
        </div>

        <div className="input-menor">
          <input ref={messageRef} className="mensagem" placeholder="Mensagem" type="text" />
        </div>

        <div className="botao-varejoo">
          <button className="botao-varejo" type="submit">SOLICITAR</button>
        </div>
      </form>

      {formEnviado && <p className='mensagem-form'>Formulário Enviado</p>}
    </div>
  );
}
