import GearHeading from "../components/GearHeading";
import GearCard from "../components/GearCard";
import { gear } from "../../gear-config";

const Gear = () => {
  return (
    <section className="w-full h-full">

      {/* TOP STRÁNKY - HEADING S NADPISEM MY GEAR */}
        <div
        className="w-full h-100 flex items-center justify-center flex-col bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(imgs/_DSC8863.webp)" }}
        >
          <h1 className="text-5xl font-montserrat font-black tracking-wide italic">MY GEAR</h1>
        </div>

        {/* CONTAINER */}
        <div className="w-full h-full py-26 px-52 flex flex-col">

          {/* NADPIS KATEGORIE GEARU */}
          <GearHeading heading="camera bodies" />

          {/* CONTAINER S GEAR CARDS */}
          <div className="w-full flex items-center justify-start gap-8">
            <GearCard heading={gear[0].heading} image={gear[0].image} />
          </div>

          <GearHeading heading="lenses" />

        </div>


    </section>
  )
}

export default Gear