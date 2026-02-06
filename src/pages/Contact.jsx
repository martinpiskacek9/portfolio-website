import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormButton from "../components/FormButton";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const clearStatus = () => {
    if (status) setStatus("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setStatus("Odesílání zprávy...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus("Zpráva odeslána.");
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("Zprávu se nepodařilo odeslat.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-start py-26 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(imgs/_DSC7681.webp)`,
      }}
    >
      <h2 className="mb-12">napište mi</h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-center gap-8 w-[90vw] shadow-2xl bg-neutral-950/20 border-neutral-500 p-10 md:p-18 xl:w-250 backdrop-blur-sm"
      >
        {/* JMÉNO + EMAIL */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <div className="flex flex-col gap-2 flex-1 w-full">
            <label htmlFor="form_name">jméno</label>
            <input
              id="form_name"
              name="user_name"
              type="text"
              className="px-3 py-2 border bg-transparent"
              required
              onChange={clearStatus}
            />
          </div>

          <div className="flex flex-col gap-2 flex-1 w-full">
            <label htmlFor="form_email">e-mail</label>
            <input
              id="form_email"
              name="user_email"
              type="email"
              className="px-3 py-2 border bg-transparent"
              required
              onChange={clearStatus}
            />
          </div>
        </div>

        {/* ZPRÁVA */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="form_message">zpráva</label>
          <textarea
            id="form_message"
            name="message"
            className="min-h-40 px-3 py-2 border bg-transparent"
            required
            onChange={clearStatus}
          />
        </div>

        {/* BUTTON */}
        <FormButton disabled={isSending} />

        {/* STATUS */}
        {status && (
          <p
            aria-live="polite"
            className={`text-sm tracking-wide font-montserrat ${
              status.includes("odeslána")
                ? "text-green-400"
                : status.includes("nepodařilo")
                ? "text-red-400"
                : "text-neutral-300"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
