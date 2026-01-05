import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-full h-full flex flex-col gap-6 items-center justify-center pt-52 p-26">
        <p className="text-xl font-bold">This page doesn't exist.</p>
        <Link to="/" className="errorpage-btn text-lg font-raleway">Return to <span>homepage</span></Link>
    </section>
  )
}

export default ErrorPage;