const Question = () => {
  return (
    <div
      className="container-fluid accordion accordion-flush"
      id="accordionFlushExample"
    >
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            1. Aceita convênio médico?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Sim, aceito todos os convênios médicos por meio de reembolso das sessões.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            2. Quais são os benefícios da Psicoterapia Online?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul>
              <li>
                Praticidade, já que as consultas podem ser realizadas do conforto do seu lar ou em um escritório, por meio de plataformas on-line como o Google Meet.
              </li>
              <li>
                Sigilo, as consultas são realizadas por vídeo seguindo as
                regulamentações dos Conselhos Federais de Psicologia (CRP)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            3. Quanto tempo dura as sessões?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Cada sessão tem duração de 45 minutos. É importante evitar atrasos,
            pois o tempo de atraso não poderá ser compensado.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            4. As consultas podem ser remarcadas?
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Qualquer consulta poderá ser remarcada até 24h antes do atual
            horário da consulta, e poderá ser remarcada de acordo com os
            horários disponíveis na agenda.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            5. Como funciona a Psicoterapia On-line?
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul class="list-group">
              <li class="list-group-item">
                1. Entre em contato comigo por <a className='btn m-0 p-0 text-decoration-none text-success font-weight-bold' href="https://wa.link/m87fyg"><b>WhatsApp</b></a>.
              </li>
              <li class="list-group-item">
                2. Escolha o melhor horário para ser atendido.
              </li>
              <li class="list-group-item">
                3. Faça o pagamento da sessão (pix, transferência ou cartão).
              </li>
              <li class="list-group-item">
                4. Esteja em um local reservado e silencioso.
              </li>
              <li class="list-group-item">
                5. Certifique-se que está com um bom sinal de internet e se
                conecte-se no link enviado.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix"
            aria-expanded="false"
            aria-controls="flush-collapseSix"
          >
            6. Como funciona os atendimentos presenciais?
          </button>
        </h2>
        <div
          id="flush-collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingSix"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p>
              Os atendimentos são realizados em clínicas de Psicologia na região
              do ABC Paulista, basta entrar em contato pelo whatsapp ou e-mail e
              agendar no local mais próximo da sua residência.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
