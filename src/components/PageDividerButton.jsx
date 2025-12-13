
const PageDividerButton = ({ btnLink, btnHeading, btnText, side }) => {
  return (
    <div className={`w-full h-full border hover:bg-neutral-950/20 duration-500 ${ side === "left" ? "pl-50" : "pr-50" }`}>
      <a
      href={btnLink}
      className="h-full flex items-center justify-center flex-col text-3xl font-montserrat font-bold uppercase"
      >
        {btnHeading}
        <p>
            {btnText}
        </p>
      </a>
    </div>
  )
}

export default PageDividerButton