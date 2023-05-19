import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contact_form}>
      <div className="content">
        <div id='form' className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="row mb-5">
                <div className="col-md-4 mr-auto">
                  <h3 className="thin-heading mb-4">New York</h3>
                  <p>9757 Aspen Lane South Richmond Hill, NY 11419</p>
                </div>
                <div className="col-md-6 ml-auto">
                  <h3 className="thin-heading mb-4">Contact Info</h3>
                  <p>
                    T: +1 (291) 939 9321 <br /> E: info@mywebsite.com
                  </p>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-12">
                  <h3 className="thin-heading mb-4">Contato</h3>

                  <form
                    className="mb-5"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                  >
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Nome"
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          placeholder="Mensagem"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12">
                        <input
                          type="submit"
                          value="Enviar"
                          className="btn btn-primary rounded-0 py-2 px-4"
                        />
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
