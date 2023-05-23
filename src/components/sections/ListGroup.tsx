import ButtonWPP from "../buttons/ButtonWPP";
import { FaCheck } from "react-icons/fa";

const ListGroup = () => {
  return (
    <div className="px-3">
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
          Relacionamentos
        </li>
        <li className="list-group-itemd-flex align-items-center">
          <i>
            <FaCheck />
          </i>
          Sexualidade
        </li>
        <li className="list-group-itemd-flex align-items-center">
          <i>
            <FaCheck />
          </i>
          Outras demandas
        </li>
      </ul>
      <div className="mt-4">
        <ButtonWPP />
      </div>
    </div>
  );
};

export default ListGroup;
