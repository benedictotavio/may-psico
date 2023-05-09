type IPropsCard = {
  text: string;
};

const Card = ({ text }: IPropsCard) => {
  return (
    <div>
      <h1>{text}</h1>
      <p>
        Você já ouviu falar em psicoterapia? Esse é um processo que proporciona
        ao paciente a adquirir consciência sobre seus próprios atos. É algo que
        precisa ser feito em médio a longo prazo, dessa forma, ele terá tempo
        para explorar totalmente a sua insegurança, dor, emoção ou experiência e
        compreender a situação.
      </p>
      <p>
        Acreditamos que a fala sobre si dá ao paciente a oportunidade de sentir
        e entrar em contato consigo mesmo. Assim, consegue perceber os conteúdos
        significativos da sua vida, os novos sentidos e construir novas
        experiências com abordagens criativas. Uma maneira de ressignificar sua
        história com carinho e acolhimento.
      </p>
      <p>
        Assim, o paciente tem a oportunidade de resolver conflitos internos,
        desenvolver um melhor relacionamento consigo mesmo e com quem está ao
        seu redor. Ao mesmo tempo que desenvolve o autoamor, a responsabilidade
        por seus atos, amadurecimento e autoconhecimento.
      </p>
    </div>
  );
};

export default Card;
