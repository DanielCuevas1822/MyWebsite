import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xyylyekz");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre Completo:</label>
        <input type="text" className="form-control" id="name" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo Electrónico:</label>
        <input id="email" type="email" name="email" className="form-control" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensaje:</label>
        <textarea
          className="form-control"
          name="message"
          id="message"
          rows="3"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting} className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}

function App() {
  return <ContactForm />;
}
export default App;
