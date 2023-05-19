import ButtonWPP from "../buttons/ButtonWPP";
import { FaCheck } from "react-icons/fa";

const ListGroup = () => {
  return (
    <div className="px-5 px-sm-4 px-md-0">
      <ul className="list-group">
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
          Saúde Emocional
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
          Relacionamentos
        </li>
        <li className="list-group-itemd-flex align-items-center">
          <i>
            <FaCheck />
          </i>
          Sexualidade
        </li>
      </ul>
      <div className='mt-3 py-2 text-lg-center'>
        <ButtonWPP />
      </div>
    </div>
  );
};

export default ListGroup;
