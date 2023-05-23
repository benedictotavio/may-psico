import styles from "./ContactForm.module.css";
import { useState } from "preact/hooks";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_REACT_APP_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log(json);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      window.alert(
        "Mensagem enviada com sucesso. Em breve retornaremos o contato!"
      );
      console.log("Success", res);
      setInterval(() => {
        setName("");
        setEmail("");
        setMsg("");
        setPhone("");
      }, 6000);
    }
  };
  return (
    <div className={styles.contact_form}>
      <div className="content">
        <div id="form" className="container">
          <div className="row justify-content-center">
            <div className="mt-2 mt-md-4 col-md-8">
              <div className=" row mb-5">
                <div className="col-md-6 ml-auto">
                  <h3 className="thin-heading mb-4">Informações de Contato</h3>
                  <p>
                    <b>T:</b> +55 (11) 94846-6549 <br /> <b>E:</b>{" "}
                    ma0ya0ra@gmail.com
                  </p>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-12">
                  <h3 className="thin-heading mb-4">Contato</h3>

                  <form
                    className="mb-5 text-center"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                    onSubmit={onSubmit}
                  >
                    <input
                      type="hidden"
                      name="from_name"
                      value="mayaravieira.com.br"
                    ></input>
                    <input
                      type="hidden"
                      name="subject"
                      value="Novo paciente"
                      required
                    />
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input
                          value={name}
                          onChange={(e: any) => setName(e.target.value)}
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Nome"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="phone"
                          value={phone}
                          onChange={(e: any) => setPhone(e.target.value)}
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder="Telefone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="email"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12 form-group">
                        <textarea
                          value={msg}
                          onChange={(e: any) => setMsg(e.target.value)}
                          className="form-control"
                          name="message"
                          id="message"
                          placeholder="Mensagem"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary rounded-3 py-2 px-4"
                        >
                          Enviar
                        </button>
                        <span className="submitting"></span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
