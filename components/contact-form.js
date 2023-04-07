import { useState } from "react";

const URL_SEND = "/api/send";

export default function ContactForm() {
  const [state, setState] = useState({});
  const [response, setResponse] = useState();

  function onInputChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  function sendEmail(event) {
    event.preventDefault();
    fetch(
      URL_SEND,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
      }
    ).then(response => {
      return response.json();
    }).then(json => {
      setResponse(json);
    }).catch(() => {
      setResponse({ success: false, message: "Something went wrong. Try again later." });
    });
  }

  return (
    <div>
      {response && (
        <p className={response.success ? "success" : "error"}>
          { response.message }
        </p>
      )}
      <form onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={onInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={onInputChange}
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter a subject"
            onChange={onInputChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          />
        <button type="submit" className="m-3">
          Submit
        </button>
      </form>
    </div>
  );
}
