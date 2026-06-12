const Cenik = () => {
  return (
    <section
      id="cenik"
      className="w-full py-26 px-6 flex flex-col items-center"
    >
      <h2 className="mb-4">ceník</h2>

      <p className="text-center max-w-3xl mb-16 text-neutral-300 leading-relaxed">
        Ceny slouží jako orientační přehled nejčastějších služeb. Pokud máte
        specifické požadavky, neváhejte mě kontaktovat a společně najdeme
        vhodné řešení.
      </p>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Portréty */}
        <div className="border p-8">
          <h3 className="mb-6 text-2xl uppercase">Portréty & Rodiny</h3>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-xl">Mini</p>
              <p className="font-light">45-60 minut focení</p>
              <p className="font-light">5 upravených fotografií</p>
              <p className="mt-2 text-xl">800 Kč</p>
            </div>

            <div>
              <p className="font-bold text-xl">Standard</p>
              <p className="font-light">60-90 minut focení</p>
              <p className="font-light">10 upravených fotografií</p>
              <p className="mt-2 text-xl">1 200 Kč</p>
            </div>

            <div>
              <p className="font-bold text-xl">Premium</p>
              <p className="font-light">90-120 minut focení</p>
              <p className="font-light">20 upravených fotografií</p>
              <p className="mt-2 text-xl">1 800 Kč</p>
            </div>
          </div>
        </div>

        {/* Chaty */}
        <div className="border p-8">
          <h3 className="mb-6 text-2xl uppercase">Chaty & Ubytování</h3>

          <p className="text-3xl mb-4">od 1 800 Kč</p>

          <p className="font-light">
            Cena se odvíjí od velikosti objektu, rozsahu focení a požadovaných
            výstupů.
          </p>
        </div>

        {/* Eventy */}
        <div className="border p-8">
          <h3 className="mb-6 text-2xl uppercase">Eventy & Akce</h3>

          <p className="text-3xl mb-4">od 1 500 Kč</p>

          <p className="font-light">
            Cena se odvíjí od typu akce, délky fotografování a požadovaných
            výstupů.
          </p>
        </div>

        {/* Svatby */}
        <div className="border p-8">
          <h3 className="mb-6 text-2xl uppercase">Svatby</h3>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-xl">Obřad</p>
              <p className="font-light">Obřad, skupinové fotografie a novomanželské portréty</p>
              <p className="mt-2 text-xl">2 000 Kč</p>
            </div>

            <div>
              <p className="font-bold text-xl">Půlden</p>
              <p className="font-light">Obřad, portréty a část svatebního dne</p>
              <p className="mt-2 text-xl">4 500 Kč</p>
            </div>

            <div>
              <p className="font-bold text-xl">Celý den</p>
              <p className="font-light">
                Ideální, pokud chcete zachytit celý svatební den, od obřadu až po večerní oslavy
              </p>
              <p className="mt-2 text-xl">8 000 Kč</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cenik;