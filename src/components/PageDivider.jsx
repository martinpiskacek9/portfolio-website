import PageDividerButton from "./PageDividerButton"

const PageDivider = () => {
  return (
    <section>
        <div
        className="w-full h-120 bg-cover bg-center bg-no-repeat flex"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url("imgs/_DSC5754.webp")` }}
        >
          <PageDividerButton side={"left"} btnLink={"/galleries"} btnHeading={"Gallery"} btnText={"Check out my work"} />
          <PageDividerButton side={"right"} btnLink={"/gear"} btnHeading={"My Gear"} btnText={"What I shoot with"} />
        </div>
    </section>
    
  )
}

export default PageDivider