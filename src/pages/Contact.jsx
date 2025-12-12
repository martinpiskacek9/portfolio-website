import FormButton from "../components/FormButton"

const Contact = () => {
  return (
    <section
    id="contact"
    className="w-full h-full flex flex-col items-center justify-start py-26 bg-center bg-cover bg-no-repeat"
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(imgs/_DSC7681.webp)` }}
    >
        <h2>Get in touch</h2>
        <form className="flex flex-col items-center justify-center gap-8 w-[90vw] h-full shadow-2xl bg-neutral-950/20 border-neutral-500 p-10 md:p-18 xl:w-250 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="flex flex-col gap-2 flex-1 w-full">
                    <label htmlFor="form_name">Name</label>
                    <input id="form_name" type="text" className="px-3 py-2 border" required />
                </div>
                <div className="flex flex-col gap-2 flex-1 w-full">
                    <label htmlFor="form_email">Email</label>
                    <input id="form_email" type="email" className="px-3 py-2 border" required />
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="form_message">Message</label>
                <textarea id="form_message" className="min-h-40 px-3 py-2 border" required />
            </div>
            <FormButton />
        </form>
    </section>
  )
}

export default Contact