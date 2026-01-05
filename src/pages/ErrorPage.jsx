import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-full h-full flex items-center justify-center p-26">
        <p>This page doeesn't exist.</p>
        <Link to="/">GO BACK HOME</Link>
    </section>
  )
}

export default ErrorPage;