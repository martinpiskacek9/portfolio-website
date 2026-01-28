import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-full h-[70vh] flex flex-col gap-6 items-center justify-center pt-52 p-26">
        <p className="uppercase text-9xl font-bold">404</p>
        <Link to="/" className="errorpage-btn text-xl font-raleway">Zpět na <span>úvodní stránku</span></Link>
    </section>
  )
}

export default ErrorPage;