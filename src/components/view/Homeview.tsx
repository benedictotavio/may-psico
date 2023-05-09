import ButtonWPP from "../buttons/ButtonWPP";
import About from "../layout/About";
import Card from "../layout/Card";
import ListGroup from "../layout/ListGroup";
import ListGroupHorizontal from "../layout/ListGroupHorizontal";
import Question from "../layout/Question";

const Homeview = () => {
  return (
    <>
      <section>
        <div className="d-flex flex-row p-md-5">
          <div>
            <h4>ATENDIMENTO ON-LINE DE PSICOLOGIA CLÍNICA</h4>
            <p>PARA ADOLESCENTES, ADULTOS E FAMÍLIAS.</p>
            <p>
              Fale diretamente comigo, tire suas dúvidas e agende a sua sessão!
            </p>
            <ButtonWPP />
          </div>
        </div>
      </section>
      <section className="text-center">
        <ListGroup />
        <ButtonWPP />
      </section>
      <section>
        <About />
      </section>
      <section className="container text-center">
        <h3>
          Psicóloga Clínica, com atendimento em modo on-line para todos os
          estados da região Sul e Sudeste do Brasil.
        </h3>
      </section>
      <section className="d-flex justify-content-center">
        <ListGroupHorizontal />
      </section>
      <section>
        <Card text="O que é Psicotera​pia?" />
      </section>
      <section>
        <Question />
      </section>
    </>
  );
};

export default Homeview;
