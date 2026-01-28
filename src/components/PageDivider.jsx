import PageDividerButton from "./PageDividerButton"

const PageDivider = () => {
  return (
    <section>
        <div
        className="w-full h-full sm:py-0 sm:h-75 lg:h-100 bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url("imgs/_DSC5754.webp")` }}
        >
          <PageDividerButton side={"left"} btnLink={"/gallery"} btnHeading={"galerie"} btnText={"mrkni na mé fotky"} />
          <PageDividerButton side={"right"} btnLink={"/gear"} btnHeading={"vybavení"} btnText={"S čím fotím"} />
        </div>
    </section>
    
  )
}

export default PageDivider