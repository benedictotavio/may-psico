import ButtonWPP from "../buttons/ButtonWPP";
import About from "../layout/About";
import Card from "../layout/Card";
import Footer from "../layout/Footer";
import ListGroup from "../layout/ListGroup";
import ListGroupHorizontal from "../layout/ListGroupHorizontal";
import Online from "../layout/Online";
import Question from "../layout/Question";
import styles from "./Homeview.module.css";

const Homeview = () => {
  return (
    <div className={styles.content}>
      <section className={styles.sec1}>
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
      <section className={styles.sec2}>
        <div className="text-center container">
          <ListGroup />
          <ButtonWPP />
        </div>
      </section>
      <section className={styles.sec3}>
        <div className="container-fluid py-sm-2 text-justify">
          <About />
        </div>
      </section>
      <section className={styles.sec4}>
        <div className="container text-center p-sm-4">
          <h3>
            Psicóloga clínica, com atendimentos em modo online para todos os
            estados do Brasil e presencial no ABC Paulista.
          </h3>
        </div>
      </section>
      <section className={styles.sec5}>
        <div className="d-flex justify-content-center">
          <ListGroupHorizontal />
        </div>
      </section>
      <section className={styles.sec6}>
        <Card text="O que é Psicotera​pia?" />
      </section>
      <section>
        <Question />
      </section>
      <section>
        <Online />
      </section>
    </div>
  );
};

export default Homeview;
