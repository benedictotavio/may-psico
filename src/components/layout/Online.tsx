import ButtonWPP from "../buttons/ButtonWPP";

type Props = {};

const Online = (props: Props) => {
  return (
    <div className="container text-center py-md-5">
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
