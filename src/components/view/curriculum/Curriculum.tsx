import { FaCheck } from "react-icons/fa";
import ButtonWPP from "../../items/buttons/ButtonWPP";
import styles from "./Curriculum.module.css";

const OtherServicesView = () => {
  return (
    <div className={styles.container}>
      <section className={styles.sec1}>
        <h2>Consultoria em currículo e LinkedIn</h2>
        <p>
          A partir de uma análise detalhada da trajetória profissional e suas
          aspirações, seu perfil profissional terá maior visibilidade de acordo
          com seu objetivo e com perfil da vaga desejada. Pois desenvolvo
          currículos modernos, relevantes e assertivos, alinhados com as
          necessidades de avaliadores e com as novas tecnologias de recrutamento
          e seleção online.
        </p>
        <p>
          Além da tradução de currículos para o Inglês, Espanhol e outros
          idiomas, caso seja solicitado.
        </p>
        <div>
          <ButtonWPP />
        </div>
      </section>

      <section className={styles.sec2}>
        <div>
          <div>
            <h2>Diferenciais</h2>
            <ul className={`list-group`}>
              <li className={`list-group-item`}>
                <i>
                  <FaCheck />
                </i>
                {' '}
                  Avaliação de uma profissional de psicologia com experiência em
                  triagem de currículos
              </li>
              <li className={`list-group-item`}>
                <i><FaCheck /></i>
                {' '}
                Aumento de visibilidade do currículo no mercado
              </li>
              <li className={`list-group-item`}>
                <i><FaCheck /></i>
                {' '}
                Inclusão de palavras-chave
              </li>
              <li className={`list-group-item`}>
                <i>
                  <FaCheck />
                </i>{' '}
                Linguagem mercadológica atualizada
              </li>
              <li className={`list-group-item`}>
                <i><FaCheck /></i> {' '}
                LinkedIn com melhoria de rankeamento
              </li>
              <li className={`list-group-item`}>
                <i><FaCheck /></i> {' '}
                Projeto com rápida entrega (24h)
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2>Tipos de serviços</h2>
          <ul className={`list-group`}>
            <li className={`list-group-item`}>
              <i><FaCheck /></i>{' '}
              Currículo digital (em pdf)
            </li>
            <li className={`list-group-item`}>
              <i><FaCheck /></i>{' '} Currículo no LinkedIn (Perfil do LinkedIn) 
            </li>
            <li className={`list-group-item`}>
              <i><FaCheck /></i>{' '} 
              Carta de apresentação
            </li>
            <li className={`list-group-item`}>
              <i><FaCheck /></i>{' '} Portfólio profissional
            </li>
            <li className={`list-group-item`}>
              <i><FaCheck /></i>{' '} Elevator Pitch.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.sec4}>
        <h2>A importância da consultoria de elaboração de currículo</h2>
        <p>
          O currículo tem um papel fundamental na conquista de um emprego, mas
          culturalmente os profissionais desprezam a importância do currículo,
          seja na criação, atualização, entrega para ter um bom desempenho nos
          processos seletivos. Ter um excelente currículo é essencial para o seu
          sucesso. Este é um problema crítico! Você pode ter muito conhecimento
          sobre determinada área mas se cometer falhas ao fazer seu currículo
          você continuará desempregado. Um bom CV é a porta de entrada para o
          mercado de trabalho, e não priorizá-lo é uma ótima maneira para
          destruir sua imagem no processo seletivo.
        </p>
      </section>

      <section className={styles.sec5}>
        <h2>Por que investir em um currículo profissional?</h2>
        <p>
          Independente da empresa ou da vaga, lembre-se que a triagem de
          currículos é uma fase obrigatória em qualquer processo seletivo.
          Porém, muitos ainda erram na elaboração do currículo. Em um processo
          seletivo específico, os recrutadores costumam rejeitar 96,4% dos
          currículos recebidos devido a incompatibilidade com o perfil da vaga
          ou incongruência nas informações. Por isso, lembre-se que tudo começa
          pelo seu currículo. Objetivo, organizado e transparente, um currículo
          pode facilitar sua jornada em um processo seletivo. No entanto,
          repleto de informações irrelevantes, o CV pode ser o grande vilão na
          hora de conquistar seu tão sonhado emprego.
        </p>
      </section>

      <section className={styles.sec6}>
        <h2>Como funciona a elaboração de currículos?</h2>
        <li>1. Contratação da consultoria de currículo (clique aqui)</li>
        <li>2. Pagamento do serviço de consultoria</li>
        <li>3. O processo de elaboração de currículo</li>
        <li>4. Finalização e entrega do currículo</li>
      </section>
    </div>
  );
};

export default OtherServicesView;
