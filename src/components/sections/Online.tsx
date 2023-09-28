import ButtonWPP from "../items/buttons/ButtonWPP";
import img_online_icon from "../../assets/imgs/media/online_logo.png";

const Online = () => {
  return (
    <div className="container text-center py-5">
      <img src={img_online_icon} alt="image for meets in Google Meet" width='300' height='100%' />
      <p>
        Sessões Google Meet ou WhatsApp. Você pode escolher entre as principais ferramentas de vídeo chamada para otimizar o seu atendimento.
      </p>
      <ButtonWPP />
    </div>
  );
};

export default Online;
