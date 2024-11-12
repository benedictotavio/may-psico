import img_mayara from '../../assets/imgs/media/webp/about_me_mayara.webp'

const About = () => {
  return (
    <div className="p-3 p-sm-2 p-md-4 d-flex align-items-center ">
      <div className='d-sm-block d-none me-2'>
        <img src={img_mayara} alt="image picture from Mayara Silva Vieira" width='350' height='449' style={{ clipPath: 'circle()' }} />
      </div>
      <div>
        <h4>Mayara Vieira</h4>
        <p>CRP: 06/193085</p>
        <p>
          Olá, muito prazer! Me chamo Mayara, sou psicóloga e meu compromisso é ajudar você a encontrar equilíbrio, autoconhecimento e bem-estar emocional.
        </p>
        <p>
          Atendo adolescentes e adultos, oferecendo um espaço seguro e acolhedor para explorar seus sentimentos, desafios e conquistas. Sei que cada pessoa é única, por isso, os atendimentos são personalizados, com foco em recuperar o emocional, a saúde mental e a autoestima dos pacientes.
        </p>
        <p>
          Estou aqui para te ajudar a compreender e lidar com as questões da sua vida e te auxiliar a dar sentido para sua trajetória.
        </p>
      </div>
    </div>
  );
};

export default About;
