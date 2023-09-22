import ButtonWPP from "../items/buttons/ButtonWPP";

const ListGroupHorizontal = () => {
  return (
    <div>
      <div className="py-2 py-sm-3 py-md-4 py-lg-5">
        <ul className="list-group list-group-horizontal-lg ">
          <li className="list-group-item">
            <h5>Atendimento para Adolescentes e Famílias</h5>
            <p>
              Sabendo que a adolescência é uma fase onde todos os sentimentos
              são vivenciados de forma intensa e que é neste momento que o
              adolescente se vê pela primeira vez tomando decisões importantes e
              sem estrutura emocional para lidar com tantas questões, a terapia
              tem o papel de atuar como auxílio, identificando e intervindo nos
              comportamentos disfuncionais e de forma preventiva, garantindo um
              desenvolvimento psíquico emocional saudável ao longo da sua vida,
              além de auxiliar na busca de autonomia e
              autoestima do adolescente.
            </p>
          </li>
          <li className="list-group-item">
            <h5>Transtorno de Ansiedade e outros transtornos</h5>
            <p>
              Apesar de ser um sentimento normal, a ansiedade quando excessiva,
              torna-se prejudicial. A Psicoterapia te ajuda a compreender e
              identificar os gatilhos que desencadeiam a sua ansiedade. Assim,
              você aprende técnicas para controlar eficientemente os seus
              sintomas ansiosos. Ademais, há outros transtornos que também
              necessitam de acompanhamento como o Transtorno Bipolar, Transtorno
              obsessivo-compulsivo e Estresse pós-traumático.
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
              momentos onde se exige maior concentração. Assim, a psicóloga
              auxilia o diagnosticado com TDA/TDAH através da prática de
              mudanças comportamentais, trazendo benefícios para o seu dia a
              dia, no ambiente social, escolar e profissional.
            </p>
          </li>
        </ul>
        <ul className="list-group list-group-horizontal-lg">
          <li className="list-group-item">
            <h5>Saúde emocional</h5>
            <p>
              A sensação de paz com o seu passado, presente e futuro, bem como
              sentir-se confortável com as pessoas ao seu redor é real. A
              Psicologia ajuda você a desconstruir percepções, dar adeus aos
              pensamentos limitantes e a crenças prejudiciais que são
              alimentadas por nós por anos. Assim, você consegue trilhar um
              caminho leve e mais tranquilo.
            </p>
          </li>
          <li className="list-group-item">
            <h5>Relacionamento e relações interpessoais </h5>
            <p>
              A Psicoterapia pode te ajudar a ter um relacionamento sadio, te
              auxiliando a compreender e lidarmelhor com os seus sentimentos e
              relacionamentos, refletindo na qualidade de vida pessoal,
              profissional e amorosa, mas principalmente consigo mesmo.
            </p>
          </li>
          <li className="list-group-item">
            <h5>Orientação Profissional</h5>
            <p>
            Um processo de Orientação Profissional é fundamental para auxiliar adolescentes e jovens a fazerem escolhas maduras e coerentes, ajustadas com seus interesses, aptidões e possibilidades, bem como com a realidade do ambiente em que estão inseridos.
            </p>
          </li>
        </ul>
      </div>
      <div className="my-2 my-md-4">
        <ButtonWPP />
      </div>
    </div>
  );
};

export default ListGroupHorizontal;
