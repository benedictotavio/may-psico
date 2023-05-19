import img_girl_lofi from "../../assets/imgs/girl_bg.png";

type IPropsCard = {
  text: string;
};

const Card = ({ text }: IPropsCard) => {
  return (
    <div className="px-3 px-md-5 d-sm-flex align-items justify-space-between">
      <div className="align-items p-sm-3">
        <img src={img_girl_lofi} alt="" />
      </div>
      <div className='p-3 p-sm-4 p-lg-5'>
        <h1>{text}</h1>
        <p>
          Você já ouviu falar em psicoterapia? Esse é um processo que
          proporciona ao paciente a adquirir consciência sobre seus próprios
          atos. É algo que precisa ser feito em médio a longo prazo, dessa
          forma, ele terá tempo para explorar totalmente a sua insegurança, dor,
          emoção ou experiência e compreender a situação.
        </p>
        <p>
          É uma ciência que acredita que a fala sobre si proporciona ao paciente
          a oportunidade de sentir e entrar em contato consigo mesmo. De modo
          que, ele consiga, através dos atendimentos, perceber o que é
          importante em sua vida, e consiga ressignificar suas experiências,
          resolver conflitos internos, desenvolver um melhor relacionamento
          consigo mesmo e com quem está ao seu redor. Além de se tratar de uma
          prática que gera autoconhecimento.
        </p>
      </div>
    </div>
  );
};

export default Card;
