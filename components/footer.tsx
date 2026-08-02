export default function Footer() {

  return (

    <footer className="border-t border-white/10 py-12">

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">


        <div>

          <div className="flex items-center gap-2 text-xl font-black">

            <span className="rounded-lg bg-gradient-to-r from-teal-400 to-emerald-400 px-2 py-1 text-slate-950">

              🛡️

            </span>

            SafeSpend

          </div>


          <p className="mt-3 max-w-sm text-sm text-slate-500">

            A simple tax reserve companion for freelancers and independent earners.

          </p>


        </div>




        <div className="flex flex-wrap gap-6 text-sm text-slate-400">


          <a
            href="#features"
            className="hover:text-teal-400"
          >
            Features
          </a>


          <a
            href="#pricing"
            className="hover:text-teal-400"
          >
            Pricing
          </a>


          <a
            href="#how-it-works"
            className="hover:text-teal-400"
          >
            How It Works
          </a>


          <a
            href="#faq"
            className="hover:text-teal-400"
          >
            FAQ
          </a>


        </div>


      </div>




      <div className="mx-auto mt-10 max-w-7xl px-6">


        <div className="border-t border-white/10 pt-6 text-center text-xs text-slate-600">


          © 2026 SafeSpend App. Not financial or CPA advice.


        </div>


      </div>


    </footer>

  );

}