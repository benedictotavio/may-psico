import ButtonWPP from "../buttons/ButtonWPP";
import { BiHealth } from "react-icons/bi";

const ListGroup = () => {
  return (
    <>
      <ul className="list-group py-2 py-sm-3 py-md-4 py-lg-5">
        <li className="list-group-itemd-flex align-items-center">
          <i>
            <BiHealth />
          </i>
          Transtorno de Ansiedade
        </li>
        <li className="list-group-itemd-flex align-items-center">
          <i><BiHealth /></i>TDAH (Transtorno do Déficit de Atenção/Hiperatividade)
        </li>
        <li className="list-group-itemd-flex align-items-center">
          <i><BiHealth /></i>TEA Adolescentes e Adultos (Transtorno Espectro Autista)
        </li>
        <li className="list-group-itemd-flex align-items-center">
          <i><BiHealth /></i>Saúde Emocional
        </li>
        <li className="list-group-itemd-flex align-items-center">
          <i><BiHealth /></i>Relacionamentos (amoroso, familiar e interpessoal)
        </li>
        <li className="list-group-itemd-flex align-items-center">
          <i><BiHealth /></i>Sexualidade
        </li>
      </ul>
      <ButtonWPP />
    </>
  );
};

export default ListGroup;
