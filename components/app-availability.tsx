export default function AppAvailability() {
  return (
    <section className="relative py-32 md:py-40">

      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
          Coming Soon
        </p>

        <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
          Your freelance finances, anywhere you work.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          SafeSpend is being built for freelancers who want instant clarity
          wherever they work.
        </p>


        <div className="mt-12 grid gap-6 md:grid-cols-3">


          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <div className="text-3xl">
              📱
            </div>

            <h3 className="mt-4 text-xl font-bold">
              Mobile App
            </h3>

            <p className="mt-3 text-slate-400">
              Manage payments and tax reserves anywhere.
            </p>

          </div>



          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <div className="text-3xl">
              ⚡
            </div>

            <h3 className="mt-4 text-xl font-bold">
              Instant Calculations
            </h3>

            <p className="mt-3 text-slate-400">
              See your safe-to-spend balance immediately.
            </p>

          </div>



          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <div className="text-3xl">
              🔒
            </div>

            <h3 className="mt-4 text-xl font-bold">
              Privacy First
            </h3>

            <p className="mt-3 text-slate-400">
              No bank connection required.
            </p>

          </div>


        </div>


      </div>

    </section>
  );
}