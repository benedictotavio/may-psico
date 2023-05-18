import ButtonWPP from "../buttons/ButtonWPP";
import { FaCheck } from "react-icons/fa";

const ListGroup = () => {
  return (
    <>
      <div className="container">
        <ul className="list-group py-2 py-sm-3 py-md-4 py-lg-5">
          <li className="list-group-itemd-flex align-items-center">
            <i>
              <FaCheck />
            </i>
            Transtorno de Ansiedade
          </li>
          <li className="list-group-itemd-flex align-items-center">
            <i>
              <FaCheck />
            </i>
            TDAH (Transtorno do Déficit de Atenção/Hiperatividade)
          </li>
          <li className="list-group-itemd-flex align-items-center">
            <i>
              <FaCheck />
            </i>
            TEA Adolescentes e Adultos (Transtorno Espectro Autista)
          </li>
          <li className="list-group-itemd-flex align-items-center">
            <i>
              <FaCheck />
            </i>
            Saúde Emocional
          </li>
          <li className="list-group-itemd-flex align-items-center">
            <i>
              <FaCheck />
            </i>
            Relacionamentos (amoroso, familiar e interpessoal)
          </li>
          <li className="list-group-itemd-flex align-items-center">
            <i>
              <FaCheck />
            </i>
            Sexualidade
          </li>
        </ul>
        <ButtonWPP />
      </div>
    </>
  );
};

export default ListGroup;
