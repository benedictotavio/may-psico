import ButtonWPP from "../buttons/ButtonWPP";
import img_online_icon from "../../assets/imgs/online_logo.png";

const Online = () => {
  return (
    <div className="container text-center py-5">
      <img src={img_online_icon} alt="image for meets in Google Meet" />
      <p>
        Sessões Google Meet ou WhatsApp. Você pode escolher entre as principais
        ferramentas de videochamada disponíveis como Whatsapp e o Google Meet,
        para o seu atendimento.
      </p>
      <ButtonWPP />
    </div>
  );
};

export default Online;
