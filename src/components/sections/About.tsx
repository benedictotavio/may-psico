import img_mayara from '../../assets/imgs/media/webp/about_me_mayara.webp'

const About = () => {
  return (
    <div className="p-3 p-sm-2 p-md-4 d-flex align-items-center ">
      <div className='d-sm-block d-none me-2'>
        <img src={img_mayara} alt="image picture from Mayara Silva Vieira" width='350' height='449' style={{ clipPath: 'circle()' }}/>
      </div>
      <div>
        <h4>Mayara Vieira</h4>
        <p>CRP: 06/193085</p>
        <p>
          Psicóloga Clínica, direcionada a saúde psicológica de homens e mulheres
          da adolescência até a terceira idade.
        </p>
        <p>
          Nos estágios que realizei dentro do período da graduação, prestei
          atendimento e apoio psicológico para diversas pessoas com idades e
          transtornos diferentes. Esses anos de prática na clínica, aumentaram o
          meu desejo profissional em me tornar uma Psicóloga com enfoque na saúde
          das pessoas.
        </p>
        <p>
          Sendo assim, os atendimentos são realizados com empatia e acolhimento,
          no qual realizo um trabalho psicoterapêutico individualizado e
          humanizado, de modo a recuperar o emocional, a saúde mental e autoestima
          das pessoas. Eu espero te ajudar a compreender e lidar com as questões
          da sua vida e te auxiliar a dar sentido para sua trajetória.
        </p>
      </div>
    </div>
  );
};

export default About;
