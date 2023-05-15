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
            <h4>ATENDIMENTO ONLINE E PRESENCIAL DE PSICOLOGIA CLÍNICA</h4>
            <p>PARA ADOLESCENTES E ADULTOS</p>
            <p>
              Fale diretamente comigo, tire suas dúvidas e agende a sua sessão!
            </p>
            <ButtonWPP />
          </div>
        </div>
      </section>
      <section className="text-center container p-md-3">
        <ListGroup />
        <ButtonWPP />
      </section>
      <section className="container-fluid">
        <About />
      </section>
      <section className="container text-center">
        <h3>
        Psicóloga clínica, com atendimentos em modo online para todos os estados do Brasil e presencial no ABC Paulista.
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
