import GearHeading from "../components/GearHeading";

const Gear = () => {
  return (
    <section className="w-full h-full">
        <div
        className="w-full h-100 flex items-center justify-center flex-col bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(imgs/_DSC8863.webp)" }}
        >
          <h1 className="text-5xl font-montserrat font-black tracking-wide italic">MY GEAR</h1>
        </div>

        <div className="w-full h-full py-26 px-52">
          <GearHeading heading="camera bodies" />
        </div>
    </section>
  )
}

export default Gear