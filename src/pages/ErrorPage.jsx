import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404 – Stránka nenalezena - Martin Piskáček</title>
        <meta
          name="description"
          content="Omlouváme se, stránka, kterou hledáte, nebyla nalezena."
        />

        {/* OpenGraph */}
        <meta property="og:title" content="404 – Stránka nenalezena - Martin Piskáček" />
        <meta
          property="og:description"
          content="Omlouváme se, stránka, kterou hledáte, nebyla nalezena."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.martinpiskacek.cz/404" />
        <meta
          property="og:image"
          content="https://www.martinpiskacek.cz/imgs/_DSC7681.webp"
        />
      </Helmet>

      <section className="w-full h-[70vh] flex flex-col gap-6 items-center justify-center pt-52 p-26">
        <h1 className="uppercase text-9xl font-bold">404</h1>
        <Link to="/" className="errorpage-btn text-xl font-raleway">
          Zpět na <span>úvodní stránku</span>
        </Link>
      </section>
    </>
  );
};

export default ErrorPage;
