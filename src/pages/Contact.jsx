const Contact = () => {
  return (
    <section
    id="contact"
    className="w-full h-full flex flex-col items-center justify-start py-26 bg-neutral-500"
    >
        <h2>Get in touch</h2>
        <form className="flex flex-col items-center justify-center gap-8 w-[60vw] h-full">
            <div className="flex items-center gap-4 w-full">
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="form_name">Name</label>
                    <input id="form_name" type="text" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="form_email">Email</label>
                    <input id="form_email" type="email" />
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="form_message">Message</label>
                <textarea id="form_message" className="min-h-40" />
            </div>
            <input type="submit" value="Send" />
        </form>
    </section>
  )
}

export default Contact