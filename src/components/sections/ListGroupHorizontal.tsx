import ButtonWPP from "../buttons/ButtonWPP";

const ListGroupHorizontal = () => {
  return (
    <div>
      <div className="py-2 py-sm-3 py-md-4 py-lg-5">
        <ul className="list-group list-group-horizontal-lg ">
          <li className="list-group-item">
            <h5>Atendimento para Adolescentes e Famílias</h5>
            <p>
              Sabendo que a adolescência é uma fase onde todos os sentimentos
              são vivenciados de forma intensa e que é nesta fase onde o
              adolescente se vê pela primeira vez tomando decisões importantes e
              sem estrutura emocional para lidar com tantas questões, a terapia
              tem o papel de atuar como auxílio, identificando e intervindo nos
              comportamentos disfuncionais e de forma preventiva, garantindo um
              desenvolvimento psíquico emocional saudável ao longo da sua vida.
            </p>
          </li>
          <li className="list-group-item">
            <h5>Transtorno de Ansiedade</h5>
            <p>
              Apesar de ser um sentimento normal, a ansiedade quando excessiva,
              torna-se prejudicial. A Psicoterapia te ajuda a compreender e
              identificar os gatilhos que desencadeiam a sua ansiedade. Assim,
              você aprende técnicas para controlar eficientemente os seus
              sintomas ansiosos.
            </p>
          </li>
          <li className="list-group-item">
            <h5>TDAH</h5>
            <p>
              O TDA/TDAH (Transtorno do Déficit de Atenção/Hiperatividade) é um
              transtorno neurobiológico de causas genéticas, caracterizado por
              sintomas como falta de atenção, foco, inquietação e ou
              impulsividade. Os primeiros sinais aparecem na infância e pode
              acompanhar o indivíduo por toda a vida, sendo mais intensos em
              momentos onde se exige maior concentração. A Terapia Cognitivo
              Comportamental auxilia o diagnosticado com TDA/TDAH através da
              prática de mudanças comportamentais, trazendo benefícios para o
              seu dia a dia, no ambiente social, escolar e profissional.
            </p>
          </li>
        </ul>
        <ul className="list-group list-group-horizontal-lg">
          <li className="list-group-item">
            <h5>TEA (Transtorno Espectro Autista)</h5>
            <p>
              O Transtorno do Espectro Autista (TEA) é um distúrbio do
              desenvolvimento neurológico caracterizado por dificuldades de
              comunicação social e de interesses restritos desde a infância até
              a fase adulta. Mas pouco se fala sobre a terapia para autistas na
              fase adulta, sabendo que essas crianças cresceram e muitas sem o
              diagnóstico e tratamento adequado, sendo afetadas em sua vida
              adulta, já que o TEA não tem cura e sim recursos
              psicoterapêuticos, para que o portador do transtorno tenha uma
              vida de qualidade.
            </p>
          </li>
          <li className="list-group-item">
            <h5>Saúde emocional</h5>
            <p>
              A sensação de paz com o seu passado, presente e futuro, bem como
              sentir-se confortável com as pessoas ao seu redor é real. A
              Psicologia ajuda você a desconstruir percepções, dar adeus aos
              pensamentos limitantes e a crenças prejudiciais que são
              alimentadas por nós por anos. Assim, você consegue trilhar um
              caminho leve e mais tranquilo.
            </p>
          </li>
          <li className="list-group-item">
            <h5>Relacionamento</h5>
            <p>
              Construa um relacionamento sadio, aprendendo a como se relacionar
              melhor com o auxílio da Terapia Cognitivo Comportamental, onde a
              Psicologia pode te ajudar a compreender e a lidar melhor com os
              seus sentimentos e relacionamentos, refletindo na qualidade de
              vida pessoal, profissional e amorosa, mas principalmente consigo
              mesmo!
            </p>
          </li>
        </ul>
      </div>
      <div className='my-2 my-md-4'>
        <ButtonWPP />
      </div>
    </div>
  );
};

export default ListGroupHorizontal;