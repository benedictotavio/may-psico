import ButtonWPP from "../buttons/ButtonWPP";
import ListGroup from "../layout/ListGroup";

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
    </>
  );
};

export default Homeview;
