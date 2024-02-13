import { FaCheck } from "react-icons/fa";
import ButtonWPP from "../../items/buttons/ButtonWPP";
import styles from "./Curriculum.module.css";
import img_curriculum from "../../../assets/imgs/media/webp/curriculo_sem_fundo.webp";

const OtherServicesView = () => {
  return (
    <div className={styles.container}>
      <section className={styles.sec1}>
        <div>
          <h2>CONSULTORIA DE CURRÍCULOS E LINKEDIN</h2>
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
            <ButtonWPP text="Faça seu currículo" />
          </div>
        </div>
        <div>
          <img src={img_curriculum} alt="imagem figura de busca de curriculos" />
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
                Aumento de visibilidade do currículo no mercado de trabalho
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
              <i><FaCheck /></i>{' '} Currículo em Plataformas (Catho, Vagas.com e etc)
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

      <section className={styles.sec3}>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                1. Qual a importância da consultoria de currículo?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
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
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                2. Por que investir em um currículo profissional?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
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
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                3. Como funciona a elaboração de currículos?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <ul className={`list-group`}>
                  <li className={`list-group-item`}>1. Contratação da consultoria de currículo <a href="https://wa.link/m87fyg">(clique aqui)</a></li>
                  <li className={`list-group-item`}>2. Pagamento do serviço de consultoria</li>
                  <li className={`list-group-item`}>3. O processo de elaboração de currículo</li>
                  <li className={`list-group-item`}>4. Finalização e entrega do currículo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherServicesView;
